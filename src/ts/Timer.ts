export class Timer {
  timer: number;
  fn: TimerHandler;
  timeout: number;

  constructor(fn: TimerHandler, timeout: number) {
    this.timer = setInterval(fn, timeout);

    this.fn = fn;
    this.timeout = timeout;
  }

  stop() {
    if (this.timer !== 0) {
      clearInterval(this.timer);

      this.timer = 0;
    }

    return this;
  }

  // Start timer using current settings (if it's not already running).
  start() {
    if (this.timer !== 0) {
      this.stop();
      this.timer = setInterval(this.fn, this.timeout);
    }

    return this;
  }

  // Start with new or original interval, stop current interval.
  reset(newTimeout = this.timeout) {
    this.timeout = newTimeout;

    return this.stop().start();
  }
}
