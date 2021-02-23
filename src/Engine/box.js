export default class Box {
  constructor(
    game,
    { x, y, img, offsetY, offsetX, info, width = 32, height = 32 }
  ) {
    this.img = img;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.x = x;
    this.y = y;
    this.info = info;
    this.height = height;
    this.width = width;
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
}
