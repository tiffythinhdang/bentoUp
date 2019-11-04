console.log("Webpack is working!")

import Game  from './game';

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let startButton = document.getElementById("start-button");
  let playAgainButton = document.getElementById("play-again-button");
  let competitveModeButton = document.getElementById("competitive-mode-button");
  let easyModeButton = document.getElementById("easy-mode-button");


  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
    document.getElementById("game-mode").classList.remove("hidden");
    // game.start();
  })

  easyModeButton.addEventListener("click", () => { 
    document.getElementById("game-mode").classList.add("hidden");
    game.start();
  })

  competitveModeButton.addEventListener("click", () => { 
    document.getElementById("game-mode").classList.add("hidden");
    document.getElementById("game-canvas").classList.add("hidden");
    document.getElementById("game-canvas-competitive").classList.remove("hidden");
    game.start();
  })

  playAgainButton.addEventListener("click", () => {
    document.getElementById("game-mode").classList.remove("hidden");
    game.restart();
  })
});
