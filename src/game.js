import { Menu, MENU_ITEMS } from './menu';
import Bento from './bento';
import { Order } from './order';
import Timer from './timer';

const KEY_MAPPING = {
  "q": "ramen",
  "w": "dango",
  "e": "dumpling",
  "r": "mini-rolls",
  "u": "sticky-rice",
  "i": "chowfun",
  "o": "bao",
  "p": "crab",
  "a": "onigiri",
  "s": "sashimi",
  "d": "pickles",
  "f": "tempura",
  "j": "fish",
  "k": "tamago",
  "l": "meatballs",
  ";": "sushi-roll",
  "z": "watermelon",
  "x": "naruto",
  "c": "lemon",
  "v": "veggies-stir-fry",
  "b": "corn-dog",
  "n": "mochi",
  "m": "sausage",
  ",": "brocolli"
}

class Game {
  constructor(mode="easy") {
    this.menu = new Menu(mode);

    this.mode = mode;
    
    let numItems = this.generateRandomNum();
    this.order = new Order(numItems, numItems === 4 ? 6 : 8, mode);
    this.bento = new Bento(numItems, this.order, mode);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));

    this.score = 0;
    this.customerLost = 0;

    this.timeElapsed = new Date();
    this.levelUpInterval = undefined;

    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);
    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);
    this.addClickToMenuItems = this.addClickToMenuItems.bind(this);
    this.addClickToRemoveButton = this.addClickToRemoveButton.bind(this);
    this.checkTimeElapsed = this.checkTimeElapsed.bind(this);
    this.flashLevelUpMessage = this.flashLevelUpMessage.bind(this);
    this.tapItem = this.tapItem.bind(this);
    this.start = this.start.bind(this);

    this.renderScore();
  }

  start() {
    this.addListenerOnWindow();
    this.addClickToMenuItems();
    this.addClickToRemoveButton();
    this.startTimer();
    this.flashLevelUpMessage();
  }

  flashLevelUpMessage() {
    this.levelUpInterval = setInterval(() => {
      let container = document.getElementById("level-up")
      container.innerHTML = "";
      let message = document.createElement("p");
      message.classList.add("flash")
      message.innerHTML = "Speed Up!";
      container.appendChild(message);
    }, 45000);
  }

  increaseDifficulty(numItems, mode) {
    if ( this.checkTimeElapsed() > 225 ) {
      clearInterval(this.levelUpInterval);
      return new Order(numItems, numItems === 4 ? 1 : 2, mode);
    } else if ( this.checkTimeElapsed() > 180 ) {
      return new Order(numItems, numItems === 4 ? 2 : 3, mode);
    } else if ( this.checkTimeElapsed() > 135 ) {
      return new Order(numItems, numItems === 4 ? 3 : 5, mode);
    } else if ( this.checkTimeElapsed() > 90 ) {
      return new Order(numItems, numItems === 4 ? 4 : 6, mode);
    } else if ( this.checkTimeElapsed() >= 45 ) {
      return new Order(numItems, numItems === 4 ? 5 : 7, mode);
    } else if ( this.checkTimeElapsed() >= 0 ) {
      return new Order(numItems, numItems === 4 ? 6 : 8, mode);
    }
  }

  checkTimeElapsed() {
    return ( new Date() - this.timeElapsed ) / 1000;
  }

  tapItem(e) {
    let key = e.key;
    if (key === "Backspace") {
      this.bento.removeItem();
      return;
    }

    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.add("hover");
    this.bento.addItem(item.id);
    this.checkState();
  }

  untapItem(e) {
    let key = e.key;
    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.remove("hover");
  }

  addListenerOnWindow() {
    window.addEventListener("keydown", this.tapItem );
    window.addEventListener("keyup", this.untapItem );
  }

  removeListenerOnWindow() {
    window.removeEventListener("keydown",this.tapItem);
    window.removeEventListener("keyup",this.untapItem);
  }

  addClickToMenuItems() {
    let menuItems = Array.from( document.getElementsByClassName(`${this.mode} menu-item`) );
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        this.bento.addItem(item.id);
        this.checkState();
      })
    })
  }

  addClickToRemoveButton() {
    let removeBtn = document.getElementById(`${this.mode}-remove-item-button`);
    removeBtn.addEventListener("click", () => {
      this.bento.removeItem();
      this.checkState();
    })
  }

  startTimer() {
    let timerContainer = document.getElementById(`${this.mode}-timer-container`);
    let timer = document.createElement("div");
    timer.id = "timer";
    timer.innerHTML = this.timer.count;
    timerContainer.appendChild(timer);
    this.timer.start();
  }

  renderScore(){
    let score = document.getElementById("score")
    score.innerHTML = (this.score > 1 ? `${this.score} orders` : `${this.score} order`);
  }

  correctBento() {
    return JSON.stringify(this.order.order) === JSON.stringify(this.bento.bento);
  }

  checkState() {
    if (this.lost()) {
      this.renderEndMessage();
      return;
    }

    if (this.timer.count > 0 && this.correctBento()) {
      this.score += 1;
      this.renderScore();

      this.deleteGameRound();
      this.generateGameRound();

    } else if ( this.timer.count <= 0 && !this.correctBento() ) {
      this.customerLost += 1;
      this.renderCustomerLost();

      if (this.lost()) {
        this.renderEndMessage();
        this.timer.stop();
        return;
      }
      this.deleteGameRound();
      this.generateGameRound();
    }
  }

  generateRandomNum() {
    let num = [4, 6];
    let idx = Math.floor(Math.random() * 2);
    return num[idx];
  }

  deleteGameRound() {
    this.bento.deleteBento();
    let customer = document.getElementsByClassName("bounceInRight")[0];
    customer.classList.remove("bounceInRight");
    customer.classList.add("lightSpeedOut");
    this.order.deleteOrder();
    this.timer.stop();
    this.timer.deleteTimer();
  }

  generateGameRound() {
    let numItems = this.generateRandomNum();
    this.order = this.increaseDifficulty(numItems, this.mode);
    this.bento = new Bento(numItems, this.order, this.mode);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));
    this.startTimer();
  }

  renderCustomerLost() {
    let customerLost = document.getElementById(`${this.mode}-customer-lost`);
    customerLost.innerHTML = "";
    for (let i = 1; i <= this.customerLost; i++) {
      let cross = document.createElement("img");
      cross.src = "../assets/cross_mark.png";
      customerLost.appendChild(cross);
    }
  }

  restart() {
    document.getElementById(`${this.mode}-timer-container`).innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById(`${this.mode}-customer-lost`).innerHTML = "";
    this.order.deleteOrder();
    this.bento.deleteBento();
    this.score = 0;
    this.renderScore();
    this.customerLost = 0;
    this.timeElapsed = new Date();
    
    document.getElementById("modal").classList.add("hidden");
    this.addListenerOnWindow();
    this.flashLevelUpMessage();
    
    this.generateGameRound()
  }

  lost() {
    return this.customerLost >= 3;
  }

  renderEndMessage() {
    clearInterval(this.levelUpInterval);
    const score = this.score;
    
    this.removeListenerOnWindow();
    let message = document.getElementsByClassName("modal-message")[0];
    let ranking = document.getElementById("ranking");
    let finalScore = (score > 1 ? `${score} orders` : `${score} order`);
    let rank;
    if ( score >= 120 ) {
      rank = "Master Chef";
    } else if ( score >= 90 ) {
      rank = "Head Chef";
    } else if ( score >= 45 ) {
      rank = "Sous Chef";
    } else if (score >= 15) {
      rank = "Junior Chef";
    } else if (score >= 0) {
      rank = "Apprentice";
    }

    message.innerHTML = `You served ${finalScore}!`;
    ranking.innerHTML = `Rank: ${rank}`;
    document.getElementById("modal").classList.remove("hidden");
  }
}

export default Game;
