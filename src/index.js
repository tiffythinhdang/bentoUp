console.log("Webpack is working!")

// const Game = require("./game");
// const GameView = require("./game_view");

import Game  from './game';

document.addEventListener("DOMContentLoaded", () => {
  let gameCanvas = document.getElementById("game-canvas");
  let game = new Game();

  // test codes
  window.menu = menu;
  window.deleteBento = bento.deleteBento;
  window.game = game;
  window.removeListenerOnWindow = game.removeListenerOnWindow;
  // test codes
});
