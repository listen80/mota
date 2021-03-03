// 界面渲染
export default class UI {
  constructor({ config }) {
    this.config = config;
    const { el, side, width, height } = this.config;
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
    const { context, canvas } = this;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawRect(box) {
    const { context } = this;
    const { x, y } = box;
    context.fillStyle = "rgba(255, 211, 222, .4)";
    context.fillRect(x, y, 50, 50);
  }
  drawText(box) {
    const { context } = this;
    const { x, y } = box;

    context.font = `16px '楷体'`; //设置字体
    context.fillStyle = "white";
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.fillText(box.getText(), x, y + 16);
    context.restore();
    context.closePath();
  }

  translate({ offsetX = 0, offsetY = 0 }) {
    context.translate(offsetX, offsetY);
  }
  rotate(angle) {
    context.rotate(angle);
  }
  drawGlobalMessage() {
    const { context, canvas } = this;
    if (this.globalMessage) {
      context.save();
      const size = 24;
      context.font = `${size}px '楷体'`; //设置字体
      const msg = this.globalMessage + "";
      const textWidth = context.measureText(msg).width;
      const offsetHeight = 10;
      const offsetWidth = 10;
      context.save();
      const width = textWidth + 20;
      context.translate(this.canvas.width / 2, 32 * 2);
      const maxTick = 40;
      const aniMax = maxTick / 7;
      if (this.tick < aniMax) {
        context.scale(this.tick / aniMax, 1);
      }
      const lineHeight = 28;
      this.drawRoundRectPath(
        context,
        width / 2,
        this.globalMessage.length * lineHeight,
        10
      );
      context.fillStyle = "rgba(155, 144, 255, .8)"; //若是给定了值就用给定的值否则给予默认值
      context.fill();
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillStyle = "red";
      context.fillText(msg, 0, 0 * lineHeight + lineHeight / 2);
      context.restore();
      this.tick++;
      if (this.tick > maxTick) {
        this.tick = 0;
        this.globalMessage = "";
      }
      context.restore();
    }
  }
  drawRoundRectPath(cxt, width, height, radius) {
    cxt.beginPath(0);
    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
    cxt.lineTo(radius, height);
    cxt.arc(radius - width, height - radius, radius, Math.PI / 2, Math.PI);
    cxt.lineTo(-width, radius);
    cxt.arc(radius - width, radius, radius, Math.PI, (Math.PI * 3) / 2);
    cxt.lineTo(width - radius, 0);
    cxt.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2);
    cxt.lineTo(width, height - radius);
    cxt.closePath();
  }
  alert(...msg) {
    this.globalMessage = msg;
    this.tick = 0;
  }
  drawImage(box) {
    const { img, offsetX, imageOffsetY, x, y, height, width } = box;
    this.context.drawImage(
      img,
      offsetX * width,
      imageOffsetY * height,
      width,
      height,
      // x * 1 - (width - 1) / 2, // 中间对齐
      x,
      // y * 1 - (height - 1), // 脚着地,
      y,
      width,
      height
    );
  }

  drawBlock(block) {
    const { context } = this;
    context.beginPath();
    context.save();
    if (block.img) {
      this.drawImage(block);
    } else if (block.msg) {
      this.drawText(block);
    } else {
      this.drawRect(block);
    }
    context.restore();
    context.closePath();
  }
}
