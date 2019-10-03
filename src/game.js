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

    let num = [4, 6];
    let idx = Math.floor(Math.random() * 2);
    this.order = new Order(num[idx], num[idx] === 4 ? 20 : 20);
    this.bento = new Bento(num[idx], this.order);
    this.score = 0;
    this.customerLost = 0;
    this.timer = new Timer(this.order.numSeconds);

    this.timeElapsed = 0;
    this.interval = undefined;
    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);
    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);
    this.renderScore();
    this.start();
  }

  start() {
    this.addListenerOnWindow();
    this.interval = setInterval( this.checkState.bind(this), 1000 );
    this.startTimer();
  }

  stop() {
    clearInterval(this.interval);
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
    if (this.bento.bento.length < this.bento.numItems) return false;

    if (JSON.stringify(this.order.order) !== JSON.stringify(this.bento.bento)) {
      return false;
    } else {
      return true;
    }
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

      this.order.deleteOrder();
      this.bento.deleteBento();
      this.timer.stop();
      this.timer.deleteTimer();

      let num = [4, 6];
      let idx = Math.floor(Math.random() * 2);
      this.order = new Order(num[idx], num[idx] === 4 ? 20 : 20);
      this.bento = new Bento(num[idx], this.order);
      this.timer = new Timer(this.order.numSeconds);
      this.startTimer();

    } else if ( this.timer.count <= 0 && !this.correctBento() ) {
      this.customerLost += 1;
      this.renderCustomerLost();

      if (this.lost()) {
        this.stop();
        this.renderEndMessage();
        this.timer.stop();
        return;
      }
      this.order.deleteOrder();
      this.bento.deleteBento();
      this.timer.stop();
      this.timer.deleteTimer();

      let num = [4, 6];
      let idx = Math.floor(Math.random() * 2);
      this.order = new Order(num[idx], num[idx] === 4 ? 20 : 20);
      this.bento = new Bento(num[idx], this.order);
      this.timer = new Timer(this.order.numSeconds);
      this.startTimer();
    }
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
    document.getElementById("modal").classList.remove("hidden");
  }
}

export default Game;
