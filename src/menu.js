export const MENU_ITEMS = {
  "onigiri": "../assets/menu_items/onigiri.png",
  "sashimi": "../assets/menu_items/sashimi.png",
  "pickles": "../assets/menu_items/pickles.png",
  "tempura": "../assets/menu_items/tempura.png",
  "fish": "../assets/menu_items/fish.png",
  "tamago": "../assets/menu_items/tamago.png",
  "meatballs": "../assets/menu_items/meatballs.png",
  "sushi-roll": "../assets/menu_items/sushi-roll.png"
};

export const COMPETITIVE_MENU_ITEMS = {
  "ramen": "../assets/menu_items/ramen.png",
  "dango": "../assets/menu_items/dango.png",
  "dumpling": "../assets/menu_items/dumpling.png",
  "mini-rolls": "../assets/menu_items/mini-rolls.png",
  "sticky-rice": "../assets/menu_items/sticky-rice.png",
  "chowfun": "../assets/menu_items/chowfun.png",
  "bao": "../assets/menu_items/bao.png",
  "crab": "../assets/menu_items/crab.png",
  "onigiri": "../assets/menu_items/onigiri.png",
  "sashimi": "../assets/menu_items/sashimi.png",
  "pickles": "../assets/menu_items/pickles.png",
  "tempura": "../assets/menu_items/tempura.png",
  "fish": "../assets/menu_items/fish.png",
  "tamago": "../assets/menu_items/tamago.png",
  "meatballs": "../assets/menu_items/meatballs.png",
  "sushi-roll": "../assets/menu_items/sushi-roll.png",
  "watermelon": "../assets/menu_items/watermelon.png",
  "naruto": "../assets/menu_items/naruto.png",
  "lemon": "../assets/menu_items/lemon.png",
  "veggies-stir-fry": "../assets/menu_items/veggies-stir-fry.png",
  "corn-dog": "../assets/menu_items/corn-dog.png",
  "mochi": "../assets/menu_items/mochi.png",
  "sausage": "../assets/menu_items/sausage.png",
  "brocolli": "../assets/menu_items/brocolli.png"
};

export class MenuItem {
  constructor(id, imagePath) {
    this.id = id;
    this.imagePath = imagePath;
  }

  render() {
    let img = document.createElement("img");
    img.src = this.imagePath;
    img.alt = `${this.id}-icon`;
    return img;
  }
}

export class Menu {
  constructor(mode="easy") {
    this.menu = [];
    this.mode = mode;

    this.generateMenu(mode);
  }

  generateMenu(mode) {
    let chosenMenu;
    if (mode === "easy") {
      chosenMenu = MENU_ITEMS;
    } else {
      chosenMenu = COMPETITIVE_MENU_ITEMS;
    }
    
    let menuItems = Array.from(document.getElementsByClassName(`${mode} menu-item`));
    menuItems.forEach(item => {
      let itemId = item.id;
      let menuItem = new MenuItem(itemId, chosenMenu[itemId]);
      this.menu.push(menuItem);
      item.appendChild(menuItem.render());
    });
  }

  deleteMenu() {
    Array.from(document.getElementById(`${this.mode}-menu`)
      .getElementsByTagName("img"))
      .forEach(img => img.remove());
    document.getElementById("modal").classList.add("hidden");
  }
}
