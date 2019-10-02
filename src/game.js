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
    this.addListenerOnWindow = this.addListenerOnWindow.bind(this);
    this.removeListenerOnWindow = this.removeListenerOnWindow.bind(this);
    this.start();
  }

  start() {
    this.addListenerOnWindow();
    // this.startTimer();
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

  checkState() {

  }

  restart(){
    document.getElementById("timer-container").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    document.getElementById("customer-lost").innerHTML = "";
    document.getElementById("speech-container").innerHTML = "";
    document.getElementById("customer-container").innerHTML = "";
    document.getElementById("bento-container").innerHTML = "";
    Array.from(document.getElementsByTagName("img")).forEach(img => img.remove())

    document.getElementById("modal").classList.add("hidden");
    return new Game();
  }

  lost() {
    return this.customerLost >= 3;
  }

  renderEndMessage(lost) {
    if (lost) {
      this.removeListenerOnWindow();
      let modal = document.getElementById("modal");
      modal.classList.remove("hidden");
    }
  }
}

export default Game;
