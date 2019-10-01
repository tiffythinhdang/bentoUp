console.log("Webpack is working!")

// const Game = require("./game");
// const GameView = require("./game_view");

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

import { Menu } from './menu';
import Bento  from './bento';

document.addEventListener("DOMContentLoaded", () => {
  let gameCanvas = document.getElementById("game-canvas");

  let menu = new Menu();
  let bento = new Bento(4, ["onigiri", "sashimi", "onigiri", "sashimi"]);

  window.addEventListener("keydown", (e) => { 
    let key = e.key;
    if (key === "Backspace") {
      bento.removeItem();
      return;
    }
    
    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.add("hover");
    bento.addItem(item.id);
  });

  window.addEventListener("keyup", (e) => { 
    let key = e.key;
    let item = document.getElementById(`${KEY_MAPPING[key]}`);
    if (!item) return;
    item.classList.remove("hover");
  });

  // test codes
  window.menu = menu;
  window.deleteBento = bento.deleteBento;
  // test codes

  // const canvasEl = document.getElementsByTagName("canvas")[0];
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  // const ctx = canvasEl.getContext("2d");
  // const game = new Game();
  // new GameView(game, ctx).start();
});
