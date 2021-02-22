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

  setLayers(zIndex, boxes) {
    this.layers[zIndex] = this.layers[zIndex] || [];
    this.layers[zIndex].push(boxes);
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
  drawImage(box, tick) {
    const side = this.config.side;
    const { img, offsetX, offsetY, x, y } = box;
    this.paints.drawImage(
      img,
      offsetX * side,
      offsetY * side,
      side,
      side,
      x * side,
      y * side,
      side,
      side
    );
  }
  drawType() {}
  draw(tick) {
    this.clearRect();
    this.paints.beginPath();
    Object.keys(this.layers)
      .sort((next, pre) => next - pre)
      .forEach((key) => {
        this.layers[key].forEach((rows, y) => {
          rows.forEach((box, i) => {
            if (box) {
              if (box.img) {
                this.drawImage(box, tick);
              } else {
                this.drawBox(box);
              }
            }
          });
        });
      });
    this.paints.closePath();
  }
}

export default UI;
