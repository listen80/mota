// 界面渲染
export default class UI {
  constructor({ config }) {
    this.config = config;

    const { el, side, width, height } = this.config;
    this.layers = {};
    const canvas = document.createElement("canvas");
    canvas.width = side * width;
    canvas.height = side * height;
    el.appendChild(canvas);
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.tick = 0;
    this.msg = "";
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
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawColorBox(box) {
    const side = this.config.side;
    this.context.fillStyle = "#abc";
    this.context.clearRect(box.x * side, box.y * side, side, side);
  }
  drawText(box) {
    const side = this.config.side;
    const { img, offsetX, offsetY, x, y, height, width } = box;
    this.context.beginPath();
    // this.context.strokeStyle = '#0cc';
    this.context.stroke();
    this.context.font = `16px '楷体'`; //设置字体
    this.context.fillStyle = "white";
    this.context.textBaseline = "top";
    this.context.textAlign = "center";
    this.context.fillText(box.getText(), x * side + side / 2, y * side + 5);
    this.context.closePath();
  }

  translate({ offsetX = 0, offsetY = 0 }, next) {
    const context = this.context;
    context.save();
    context.translate(offsetX, offsetY);
    next();
    context.restore();
  }
  rotate(angle, next) {
    const context = this.context;
    context.save();
    context.rotate(angle);
    next();
    context.restore();
  }
  drawMsg() {
    context.save();
    if (this.msg) {
      context.save();
      this.context.font = `40px '微软雅黑'`; //设置字体
      this.context.fillStyle = "rgba(244, 144, 123, .9)";
      this.context.textBaseline = "top";
      this.context.textAlign = "center";
      this.context.fillText(this.msg, 288, 50);
      this.tick++;
      if (this.tick > 30) {
        this.tick = 0;
        this.msg = "";
      }
      context.restore();
    }
  }
  setMsg(...msg) {
    this.msg = msg.join("");
    this.tick = 0;
  }
  drawImage(box) {
    const side = this.config.side;
    const { img, offsetX, offsetY, x, y, height, width } = box;
    this.context.drawImage(
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

  drawBlock(block) {
    this.context.beginPath();
    if (block.img) {
      this.drawImage(block);
    } else if (block.msg) {
      this.drawText(block);
    } else {
      this.drawColorBox(block);
    }
    this.context.closePath();
  }
}
