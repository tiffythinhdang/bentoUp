import { MENU_ITEMS } from "./menu";

class Bento {
  constructor(numItems, order) {
    this.numItems = numItems;
    this.order = order;
    this.bento = [];

    this.generateBento();
  }

  generateBento() {
    let bentoContainer = document.getElementById("bento-container");
    let bento = document.createElement("div");
    bento.id = "bento";

    if (this.numItems === 4) {
      bento.classList.add("bento-4");
    } else if (this.numItems === 6) {
      bento.classList.add("bento-6");
    }

    for (let i = 1; i <= this.numItems; i++ ) {
      let bentoItem = document.createElement("div");
      bentoItem.classList.add("bento-item");
      bentoItem.classList.add(`${i}`);
      bento.appendChild(bentoItem);
    }

    bentoContainer.appendChild(bento);
  }

  deleteBento() {
    document.getElementById("bento-container").innerHTML = "";
  }

  addItem(item) {
    this.bento.push(item);
    this.render();
  }

  removeItem() {
    this.bento.pop();
    this.render();
  }

  render() {
    for (let i = 1; i <= this.numItems; i++) {
      let bentoItem = document.getElementsByClassName(`bento-item ${i}`)[0];
      bentoItem.innerHTML = "";
      let item = this.bento[i - 1];
      if (!item) break;
      let img = document.createElement("img");
      img.src = MENU_ITEMS[item];
      img.alt = `${item}-icon`;
      bentoItem.appendChild(img);
    }
    this.check()
  }

  check() {
    if (this.bento.length < this.numItems) return;
    if (JSON.stringify(this.order) !== JSON.stringify(this.bento)) {
      setTimeout(() => {alert("you lose")}, 1000);
    } else {
      setTimeout(() => {alert("you win")}, 1000);
    }
  }
}

export default Bento;
