// 各种块

export default class Block {
  constructor({
    info = null,
    tick = -1, // 时钟

    x = 0,
    y = 0,
    width = 32,
    height = 32,

    img = null, // 图
    imageOffsetX = 0, // x方向上偏移量
    imageOffsetY = 0,
    interval = 20, // 动画间隔
    maxAniFrame = 0, // imageOffsetX的最大偏移位置
    frame = -1, // imageOffsetX的偏移位置
    playCount = 0, // 播放次数

    radius
  }) {
    this.tick = tick;
    this.info = info;

    // debugger
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.img = img;
    this.imageOffsetX = imageOffsetX;
    this.imageOffsetY = imageOffsetY;
    this.maxAniFrame = maxAniFrame;
    this.interval = interval;
    this.tick = 0;
    this.frame = frame;
    this.playCount = playCount;

    this.radius = radius;
  }
  getDist({ x, y }) {
    return {
      x: this.x + x,
      y: this.y + y,
    };
  }
  rotateOrigin(origin) {
    return {
      x: -this.y + origin.y + origin.x,
      y: this.x - origin.x + origin.y,
    };
  }
  set(setValue) {
    Object.assign(this, setValue);
  }
  assign() {
    Object.assign(this, setValue);
    return this;
  }
  calc() {
    if (this.maxAniFrame) {
      this.tick++;
      if (this.tick % this.interval === 0) {
        this.frame += 1;
        if (this.frame === this.maxAniFrame) {
          this.frame = 0;
          if (this.playCount) {
            if (!--this.playCount) {
              this.destroy();
            }
          }
        }
        this.imageOffsetX = this.frame;
      }
    }
  }
  destroy() {
    this.died = true;
  }
  
}
