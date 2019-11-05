export const ORDER_ITEMS = {
  "onigiri": "../assets/menu_items/onigiri_order.png",
  "sashimi": "../assets/menu_items/sashimi_order.png",
  "pickles": "../assets/menu_items/pickles_order.png",
  "tempura": "../assets/menu_items/tempura_order.png",
  "fish": "../assets/menu_items/fish_order.png",
  "tamago": "../assets/menu_items/tamago_order.png",
  "meatballs": "../assets/menu_items/meatballs_order.png",
  "sushi-roll": "../assets/menu_items/sushi-roll_order.png"
};

export const COMPETITIVE_ORDER_ITEMS = {
  "ramen": "../assets/menu_items/ramen_order.png",
  "dango": "../assets/menu_items/dango_order.png",
  "dumpling": "../assets/menu_items/dumpling_order.png",
  "mini-rolls": "../assets/menu_items/mini-rolls_order.png",
  "sticky-rice": "../assets/menu_items/sticky-rice_order.png",
  "chowfun": "../assets/menu_items/chowfun_order.png",
  "bao": "../assets/menu_items/bao_order.png",
  "crab": "../assets/menu_items/crab_order.png",
  "onigiri": "../assets/menu_items/onigiri_order.png",
  "sashimi": "../assets/menu_items/sashimi_order.png",
  "pickles": "../assets/menu_items/pickles_order.png",
  "tempura": "../assets/menu_items/tempura_order.png",
  "fish": "../assets/menu_items/fish_order.png",
  "tamago": "../assets/menu_items/tamago_order.png",
  "meatballs": "../assets/menu_items/meatballs_order.png",
  "sushi-roll": "../assets/menu_items/sushi-roll_order.png",
  "watermelon": "../assets/menu_items/watermelon_order.png",
  "naruto": "../assets/menu_items/naruto_order.png",
  "lemon": "../assets/menu_items/lemon_order.png",
  "veggies-stir-fry": "../assets/menu_items/veggies-stir-fry_order.png",
  "corn-dog": "../assets/menu_items/corn-dog_order.png",
  "mochi": "../assets/menu_items/mochi_order.png",
  "sausage": "../assets/menu_items/sausage_order.png",
  "brocolli": "../assets/menu_items/brocolli_order.png"
};

export const CUSTOMERS = {
  1: "../assets/customers/customer_1.png",
  2: "../assets/customers/customer_2.png",
  3: "../assets/customers/customer_3.png",
  4: "../assets/customers/customer_4.png",
  5: "../assets/customers/customer_5.png"
};

export class Order {
  constructor(numItems, numSeconds, mode){
    this.numItems = numItems;
    this.order = [];
    this.numSeconds= numSeconds;
    this.mode = mode;

    this.orderOptions = (mode === "easy" ? ORDER_ITEMS : COMPETITIVE_ORDER_ITEMS);

    this.generateCustomer();
    this.generateSpeechBubble();
    this.generateOrder();
    this.renderOrder();
  }

  generateOrder() {
    let menuOptions = Object.keys(this.orderOptions);
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
    img.classList.add("bounceInRight");
    let customerContainer = document.getElementById(`${this.mode}-customer-container`);
    customerContainer.appendChild(img);
  }

  generateSpeechBubble() {
    let speechContainer = document.getElementById(`${this.mode}-speech-container`);
    let speechBubble = document.createElement("div");
    speechBubble.classList.add("speech-bubble");
    speechBubble.classList.add("fadeIn");
    speechContainer.appendChild(speechBubble);
  }

  generateOrderItem(id) {
    let img = document.createElement("img");
    img.src = this.orderOptions[id];
    img.alt = `${id}-icon`;
    return img;
  }

  renderOrder() {
    let orderContainer = document.createElement("div");
    orderContainer.classList.add("order-container");
    orderContainer.classList.add(`box-${this.numItems}`);
    orderContainer.classList.add("fadeIn");

    this.order.forEach(item => {
      let orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.appendChild(this.generateOrderItem(item));
      orderContainer.appendChild(orderItem);
    });
    let speechContainer = document.getElementById(`${this.mode}-speech-container`);
    speechContainer.appendChild(orderContainer);
  }

  deleteOrder() {
    document.getElementById(`${this.mode}-speech-container`).innerHTML = "";
    document.getElementById(`${this.mode}-customer-container`).innerHTML = "";
  }
}
