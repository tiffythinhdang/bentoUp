import { MENU_ITEMS } from "./menu";
import Timer from '../src/timer';

export const CUSTOMERS = {
  1: "../assets/customers/customer_1.png",
  2: "../assets/customers/customer_2.png",
  3: "../assets/customers/customer_3.png",
  4: "../assets/customers/customer_4.png",
  5: "../assets/customers/customer_5.png"
};

export class Order {
  constructor(numItems, numSeconds){
    this.numItems = numItems;
    this.order = [];
    this.numSeconds= numSeconds;
    // this.timer = new Timer(numSeconds);

    this.generateOrder();
    this.generateCustomer();
    this.generateSpeechBubble();
    this.renderOrder();
    // this.startTimer();
  }

  generateOrder() {
    let menuOptions = Object.keys(MENU_ITEMS);
    let numOptions = menuOptions.length;

    for (let i = 1; i <= this.numItems; i ++) {
      let idx = Math.floor(Math.random() * numOptions );
      this.order.push(menuOptions[idx]);
    }
  }

  generateCustomer() {
    let customerOptions = [1, 2, 3, 4, 5];
    let idx = customerOptions[ Math.floor(Math.random() * 5) ];
    let img = document.createElement("img");
    img.src = CUSTOMERS[idx];
    img.alt = "customer-icon";
    let customerContainer = document.getElementById("customer-container");
    customerContainer.appendChild(img);
  }

  generateSpeechBubble() {
    let speechContainer = document.getElementById("speech-container");
    let speechBubble = document.createElement("div");
    speechBubble.classList.add("speech-bubble");
    speechContainer.appendChild(speechBubble);
  }

  generateOrderItem(id) {
    let img = document.createElement("img");
    img.src = MENU_ITEMS[id];
    img.alt = `${id}-icon`;
    return img;
  }

  renderOrder() {
    let orderContainer = document.createElement("div");
    orderContainer.classList.add("order-container");
    orderContainer.classList.add(`box-${this.numItems}`);

    this.order.forEach(item => {
      let orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.appendChild(this.generateOrderItem(item));
      orderContainer.appendChild(orderItem);
    });
    let speechContainer = document.getElementById("speech-container");
    speechContainer.appendChild(orderContainer);
  }

  deleteOrder() {
    document.getElementById("speech-container").innerHTML = "";
    document.getElementById("customer-container").innerHTML = "";
  }
}
