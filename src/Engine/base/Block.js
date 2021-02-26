// 各种块

export default class Block {
  constructor({
    x = 0,
    y = 0,
    img,
    offsetY = 0,
    offsetX = 0,
    info = null,
    width = 32,
    height = 32,

    maxAniFrame = 0,
    playCount = 0,
    interval = 23,
    frame = -1,
    tick = -1
  }) {
    this.img = img;

    this.offsetX = offsetX;
    this.offsetY = offsetY;
    // debugger
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.info = info;

    this.maxAniFrame = maxAniFrame;
    this.interval = interval;
    this.tick = 0;
    this.frame = frame;
    this.playCount = playCount;

    this.tick = tick;
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
  set(setValue) {
    Object.assign(this, setValue);
  }
  calc() {
    if (this.maxAniFrame) {
      this.tick++
      
      if (this.tick % this.interval === 0) {
        
        this.frame += 1;

        if (this.frame === this.maxAniFrame) {
          this.frame = 0;
          if (this.playCount) {
            this.died = true;
          }
        }
  
        this.offsetX = this.frame;
      }
    }
  }
  destroy() {
    this.died = true;
  }
  draw(ui) {
    ui.drawBlock(this);
  }
}
