console.log("Webpack is working!")

import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  let game;

  let easyMode = document.getElementById("easy-content");
  let competitiveMode = document.getElementById("competitive-content");

  let startButton = document.getElementById("start-button");
  let playAgainButton = document.getElementById("play-again-button");
  let competitveModeButton = document.getElementById("competitive-mode-button");
  let easyModeButton = document.getElementById("easy-mode-button");


  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
    document.getElementById("game-mode").classList.remove("hidden");
  })

  easyModeButton.addEventListener("click", () => { 
    document.getElementById("game-mode").classList.add("hidden");
    
    if ( easyMode.classList.contains("hidden") ) easyMode.classList.remove("hidden");
    if (!competitiveMode.classList.contains("hidden")) competitiveMode.classList.add("hidden");

    if (!game) {
      game = new Game("easy");
      game.start();
    } else {
      game.restart("easy")
    }
  })

  competitveModeButton.addEventListener("click", () => { 
    document.getElementById("game-mode").classList.add("hidden");

    if (!easyMode.classList.contains("hidden")) easyMode.classList.add("hidden");
    if (competitiveMode.classList.contains("hidden")) competitiveMode.classList.remove("hidden");

    if (!game) {
      game = new Game("competitive");
      game.start();
    } else {
      game.restart("competitive")
    }
  })

  playAgainButton.addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("game-mode").classList.remove("hidden");
    if (!easyMode.classList.contains("hidden")) easyMode.classList.add("hidden");
    if (!competitiveMode.classList.contains("hidden")) competitiveMode.classList.add("hidden");
    // game.clear();
  })
});
