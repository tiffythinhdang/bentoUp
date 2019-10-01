const MENU_ITEMS = {
  "onigiri": "../assets/menu_items/onigiri.png",
  "sashimi": "../assets/menu_items/sashimi.png",
  "pickles": "../assets/menu_items/pickles.png",
  "tempura": "../assets/menu_items/tempura.png",
  "fish": "../assets/menu_items/fish.png",
  "tamago": "../assets/menu_items/tamago.png",
  "meatballs": "../assets/menu_items/meatballs.png",
  "sushi-roll": "../assets/menu_items/sushi-roll.png"
};

class MenuItem {
  constructor(id, imagePath){
    this.id = id;
    this.imagePath = imagePath;
  }

  render(){
    let img = document.createElement("img");
    img.src = this.imagePath;
    img.alt = `${this.id}-icon`;
    return img;
  }
}

class Menu {
  constructor() {
    this.menu = [];

    this.generateMenu();
  }

  generateMenu() {
    let menuItems = Array.from( document.getElementsByClassName("menu-item") );
    // debuggser
    menuItems.forEach(item => {
      let itemId = item.id;
      let menuItem = new MenuItem(itemId, MENU_ITEMS[itemId]);
      this.menu.push(menuItem);
      item.appendChild(menuItem.render());
    }); 
  }
}

export default Menu;