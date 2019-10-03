console.log("Webpack is working!")

import Game  from './game';

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let button = document.getElementById("play-again-button");

  button.addEventListener("click", () => { 
    game.restart();
  })

  // test codes
  window.menu = menu;
  window.deleteBento = bento.deleteBento;
  window.game = game;
  window.removeListenerOnWindow = game.removeListenerOnWindow;
  // test codes
});
