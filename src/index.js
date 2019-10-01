console.log("Webpack is working!")

// const Game = require("./game");
// const GameView = require("./game_view");

import Menu from './menu';

document.addEventListener("DOMContentLoaded", () => {
  let menu = new Menu();
  // const canvasEl = document.getElementsByTagName("canvas")[0];
  // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  // const ctx = canvasEl.getContext("2d");
  // const game = new Game();
  // new GameView(game, ctx).start();
});
