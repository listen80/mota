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
  drawRect(x, y, width, height = 20, style) {
    this.context.fillStyle = style || "rgba(22, 155, 169, .7)";
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
    const { x, y } = box;
    context.beginPath();
    context.save()
    context.font = `16px '楷体'`; //设置字体
    context.fillStyle = "white";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillText(box.getText(), x * side + side / 2, y * side + side / 2);
    context.restore();
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
    const { context, canvas } = this;
    if (this.globalMessage) {
      context.save();
      const size = 40;
      context.font = `${size}px '楷体'`; //设置字体
      const width = context.measureText(this.globalMessage).width;
      const offsetHeight = 10;
      const offsetWidth = 10;
      this.drawRect(
        canvas.width / 2 - width / 2 - offsetWidth,
        50 - size / 2 - offsetHeight,
        width + offsetWidth * 2,
        size + 2 * offsetHeight,
        "rgba(155, 144, 255, .8)"
      );
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillStyle = "red";
      const msgs = Array.isArray(this.globalMessage) ? this.globalMessage : [this.globalMessage]
      // console.log(msgs)
      msgs.forEach((msg, i) => {
        // console.log(msg)
        context.fillText(msg + "", canvas.width / 2, i * 42 + 32);
      })
      this.tick++;
      if (this.tick > 3000) {
        this.tick = 0;
        this.globalMessage = "";
      }
      context.restore();
    }
  }
  alert(msg) {
    this.globalMessage = msg;
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
