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
  calc(ticks) {
    if (this.maxAniFrame) {
      this.offsetX = ticks["tick" + this.maxAniFrame];
    }
  }
}
