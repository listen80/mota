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
    this.globalMessage = "";
  }
  clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawRect(x, y, width, height = 20) {
    this.context.fillStyle = "rgba(22, 155, 169, .7)";
    this.context.fillRect(x, y, width, height);
  }
  drawColorBox(box) {
    const { side } = this.config;
    this.context.fillStyle = "rgba(255, 211, 222, .4)";
    this.context.fillRect(box.x * side, box.y * side, side, side);
  }
  drawText(box) {
    const { context } = this;
    const side = this.config.side;
    const { img, offsetX, offsetY, x, y, height, width } = box;
    this.context.beginPath();
    context.strokeStyle = "#000";
    context.stroke();
    context.font = `16px '楷体'`; //设置字体
    context.fillStyle = "white";
    context.textBaseline = "top";
    context.textAlign = "center";
    context.fillText(box.getText(), x * side + side / 2, y * side + 5);
    context.closePath();
  }

  translate({ offsetX = 0, offsetY = 0 }, next) {
    const { context } = this;
    context.save();
    context.translate(offsetX, offsetY);
    next();
    context.restore();
  }
  rotate(angle, next) {
    const { context } = this;
    context.save();
    context.rotate(angle);
    next();
    context.restore();
  }
  drawGlobalMessage() {
    const { context } = this;
    context.save();
    if (this.globalMessage) {
      context.save();
      const size = 40;
      this.context.font = `${size}px '微软雅黑'`; //设置字体
      this.context.fillStyle = "rgba(244, 144, 123, .1)";
      const offsetWidth = 30;
      const offsetHeight = 10;
      const width = context.measureText(this.globalMessage).width;
      this.drawRect(
        288  - width / 2 - offsetWidth,
        50 - offsetHeight,
        width + offsetWidth * 2,
        size + 2 * offsetHeight
      );
      this.context.textAlign = "center";
      this.context.textBaseline = "top";
      this.context.fillStyle = "red";
      this.context.fillText(this.globalMessage, 288, 50);
      this.tick++;
      if (this.tick > 30) {
        this.tick = 0;
        this.globalMessage = "";
      }
      context.restore();
    }
  }
  alert(...msg) {
    this.globalMessage = msg.join(" ");
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
