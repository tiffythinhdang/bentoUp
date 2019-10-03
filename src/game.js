import { Menu, MENU_ITEMS } from './menu';
import Bento from './bento';
import { Order } from './order';
import Timer from './timer';

const KEY_MAPPING = {
  "a": "onigiri",
  "w": "sashimi",
  "e": "pickles",
  "f": "tempura",
  "j": "fish",
  "i": "tamago",
  "o": "meatballs",
  ";": "sushi-roll"
}

class Game {
  constructor() {
    this.menu = new Menu();
    
    let numItems = this.generateRandomNum();
    this.order = new Order(numItems, numItems === 4 ? 6 : 8 );
    this.bento = new Bento(numItems, this.order);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));

    this.score = 0;
    this.customerLost = 0;

    this.timeElapsed = 0;
    this.interval = undefined;
    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);
    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);
    this.renderScore();
    this.start();
  }

  start() {
    this.addListenerOnWindow();
    // this.interval = setInterval( this.checkState.bind(this), 1000 );
    this.startTimer();
  }

  stop() {
    // clearInterval(this.interval);
  }

  tapItem(e) {
    let key = e.key;
    if (key === "Backspace") {
      game.bento.removeItem();
      return;
    }

    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.add("hover");
    game.bento.addItem(item.id);
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

  startTimer() {
    let timerContainer = document.getElementById("timer-container");
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
      this.stop();
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
        this.stop();
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
    let customer = document.getElementsByClassName("animated bounceInRight")[0];
    customer.classList.remove("bounceInRight");
    customer.classList.add("lightSpeedOut");
    this.order.deleteOrder();
    this.timer.stop();
    this.timer.deleteTimer();
  }

  generateGameRound() {
    let numItems = this.generateRandomNum();
    this.order = new Order(numItems, numItems === 4 ? 6 : 8);
    this.bento = new Bento(numItems, this.order);
    this.timer = new Timer(this.order.numSeconds, this.checkState.bind(this));
    this.startTimer();
  }

  renderCustomerLost() {
    let customerLost = document.getElementById("customer-lost");
    customerLost.innerHTML = "";
    for (let i = 1; i <= this.customerLost; i++) {
      let cross = document.createElement("img");
      cross.src = "../assets/cross_mark.png";
      customerLost.appendChild(cross);
    }
  }

  restart() {
    document.getElementById("timer-container").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById("customer-lost").innerHTML = "";
    this.order.deleteOrder();
    this.bento.deleteBento();
    this.menu.deleteMenu();

    document.getElementById("modal").classList.add("hidden");

    return new Game();
  }

  lost() {
    return this.customerLost >= 3;
  }

  renderEndMessage() {
    this.removeListenerOnWindow();
    let message = document.getElementsByClassName("modal-message")[0];
    let finalScore = (this.score > 1 ? `${this.score} orders!` : `${this.score} order!`);
    message.innerHTML = `You have served ${finalScore}`;
    document.getElementById("modal").classList.remove("hidden");
  }
}

export default Game;
