// 界面渲染
class UI {
  constructor(config) {
    this.config = config;

    const { el, side, width, height } = this.config;
    this.layers = {};

    const canvas = document.createElement("canvas");
    canvas.width = side * width;
    canvas.height = side * height;
    el.appendChild(canvas);
    this.canvas = canvas;
    this.paints = canvas.getContext("2d");
  }
  setLayer(zIndex, layer) {
    this.layers[zIndex] = layer;
  }
  setBacklayer(layer) {
    this.setLayer(-1, layer);
  }
  setBlocklayer(layer) {
    this.setLayer(0, layer);
  }
  setHerolayer(layer) {
    this.setLayer(1, [layer]);
  }
  clearRect() {
    this.paints.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawBox(box) {
    const side = this.config.side;
    this.paints.fillStyle = box.color;
    this.paints.clearRect(box.x * side, box.y * side, side, side);
  }
  drawText(box) {}
  drawImage(box) {
    const side = this.config.side;
    const { img, offsetX, offsetY, x, y, height, width } = box;
    this.paints.drawImage(
      img,
      offsetX * width,
      offsetY * height,
      width,
      height,
      x * side - (width - side) / 2, // 中间对齐
      y * side - (height - side), // 脚着地
      width,
      height
    );
  }
  nextFrame() {
    this.clearRect();
    Object.keys(this.layers)
      .sort((next, pre) => next - pre)
      .forEach((key) => {
        const layer = this.layers[key];
        let len = layer.length;
        while (len--) {
          const box = layer[len];
          if (box.died) {
            console.log("remove")
            layer.splice(len, 1);
          }
          this.paints.beginPath();
          if (box.calc) {
            box.calc();
          }
          if (box.img) {
            this.drawImage(box);
          } else {
            debugger;
            this.drawBox(box);
          }
          this.paints.closePath();
        }
      });
  }
}

export default UI;
