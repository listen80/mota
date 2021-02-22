class Box {
  constructor(value, { x, y }, config) {
    this.value = value;
    this.info = config.mapsInfo[value];
    if (config && this.info && this.info.cls) {
      this.img = config.images[this.info.cls];
      this.backGroundImage = config.images.terrains;
      this.offsetY = config.icons[this.info.cls][this.info.id];
      this.offsetX = 0;
    } else {
      // debugger;
    }
    this.x = x;
    this.y = y;
  }
  move(x, y) {
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
  face() {}
}
export default Box;
