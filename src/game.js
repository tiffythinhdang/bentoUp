import { Menu, MENU_ITEMS } from './menu';
import Bento from './bento';
import { Order } from './order';

class Game {
  constructor() {
    debugger
    this.menu = new Menu();

    let num = [4, 6];
    let idx = Math.floor(Math.random() * 2);
    this.order = new Order(num[idx], num[idx] === 4 ? 20 : 20);

    this.bento = new Bento(num[idx], this.order);
    this.score = 0;
    this.customerLost = 0;
  }

  restart(){
    return new Game();
  }

  lost() {

  }

}

export default Game;