console.log("Webpack is working!")

import Game  from './game';

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

    game = new Game("easy");
    game.start();
  })

  competitveModeButton.addEventListener("click", () => { 
    document.getElementById("game-mode").classList.add("hidden");

    if (!easyMode.classList.contains("hidden")) easyMode.classList.add("hidden");
    if (competitiveMode.classList.contains("hidden")) competitiveMode.classList.remove("hidden");
    // document.getElementById("easy-content").classList.add("hidden");
    // document.getElementById("competitive-content").classList.remove("hidden");
    game = new Game("competitive");
    game.start();
  })

  playAgainButton.addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("game-mode").classList.remove("hidden");
    game.clear();
    // game.restart("competitive");
  })
});
