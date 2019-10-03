console.log("Webpack is working!")

import Game  from './game';

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let startButton = document.getElementById("start-button");
  let playAgainButton = document.getElementById("play-again-button");

  startButton.addEventListener("click", () => { 
    document.getElementById("introduction").classList.add("hidden");
    game.start();
  })

  playAgainButton.addEventListener("click", () => { 
    game.restart();
  })
});
