class Timer {
  constructor(numSeconds) {
    this.interval = undefined;
    this.countFrom = numSeconds;
    this.count = this.countFrom;
  }

  start() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.count = this.countFrom;
    this.interval = setInterval((this.tick).bind(this), 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  tick() {
    this.count -= 1;
    if (this.count <= 0) {
      this.count = 0;
      clearInterval(this.interval);
      setTimeout(() => alert("you lose"), 1000 );
      // game.flow.gameOver();
    }
    let timer = document.getElementById("timer");
    timer.innerHTML = this.count;
    // update the view
    // var progress = this.count / this.countFrom * 100;
    // this.progressView.style.width = progress + "%";
  }
};

export default Timer;


// (function () {
//   var game = this.colorQuestGame = this.colorQuestGame || {};

//   game.timer = {
//     interval: undefined,
//     countFrom: 60, // second
//     count: this.countFrom,
//     // progressView: document.getElementById('timer'),

//     restart: function () {
//       if (this.interval) {
//         clearInterval(this.interval);
//       }
//       this.count = this.countFrom;
//       this.interval = setInterval((this.tick).bind(this), 1000);
//     },

//     stop: function () {
//       clearInterval(this.interval);
//     },

//     tick: () => {
//       this.count -= 1;
//       if (this.count <= 0) {
//         this.count = 0;
//         clearInterval(this.interval);
//         game.flow.gameOver();
//       }
//       // update the view
//       var progress = this.count / this.countFrom * 100;
//       this.progressView.style.width = progress + "%";
//     }
//   }
// })();