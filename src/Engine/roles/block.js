// 各种块

export default class Block {
  constructor({
    x,
    y,
    img,
    offsetY = 0,
    offsetX = 0,
    info,
    width = 32,
    height = 32,
    maxAniFrame = 0,
    palyCount = 0,
    callback,
    interval = 25,
    frame = 0,
  }) {
    this.img = img;

    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.info = info;

    this.maxAniFrame = maxAniFrame;
    this.interval = interval;
    this.tick = 0;
    this.frame = frame;
    this.palyCount = palyCount;
    this.callback = callback;
  }
  getDist({ x, y }) {
    return {
      x: this.x + x,
      y: this.y + y,
    };
  }
  rotate(origin) {
    return {
      x: -this.y + origin.y + origin.x,
      y: this.x - origin.x + origin.y,
    };
  }
  set({ x, y }) {
    this.x = x;
    this.y = y;
  }
  calc() {
    if (this.interval === 2) {
      // debugger;
    }
    if (this.maxAniFrame) {
      // if (this.tick === this.interval) {
      this.tick = 0;

      if (this.frame === this.maxAniFrame) {
        this.frame = 0;
        this.died = true;
        // if (this.palyCount) {
        //   this.palyCount--;
        //   if (this.palyCount === 0) {
        //     this.died = true;
        //   }
        // }
      }

      this.frame += 1;
      // if (this.frame === this.maxAniFrame - 1) {
      //   if (this.palyCount) {
      //     this.palyCount--;
      //     if (this.palyCount === 0) {
      //       this.died = true;
      //     }
      //   }
      // }

      this.offsetX = this.frame;
      // }
      // this.tick++;
    }
    if (this.interval === 2) {
      console.log(this.frame);
    }
  }
}
