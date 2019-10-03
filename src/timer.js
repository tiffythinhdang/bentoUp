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
    }
    let timer = document.getElementById("timer");
    timer.innerHTML = this.count;
  }

  deleteTimer() {
    document.getElementById("timer").remove();
  }
};

export default Timer;
