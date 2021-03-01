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
      const size = 24;
      context.font = `${size}px '楷体'`; //设置字体
      const msg = this.globalMessage + ''
      const textWidth = context.measureText(msg).width;
      const offsetHeight = 10;
      const offsetWidth = 10;
      context.save();
      const width = textWidth + 20;
      context.translate((this.canvas.width) / 2, 32 * 2);
      const maxTick = 40;
      const aniMax = maxTick / 7
      if (this.tick < aniMax) {
        context.scale(this.tick / aniMax, 1)
        // context.rotate(this.tick / aniMax * Math.PI * 2)
      }
      //绘制圆角矩形的各个边  
      // console.log(this.globalMessage.length * 32)
      const lineHeight = 28;
      this.drawRoundRectPath(context, width / 2, this.globalMessage.length * lineHeight, 10);
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
    //从右下角顺时针绘制，弧度从0到1/2PI  
    cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2);

    //矩形下边线  
    cxt.lineTo(radius, height);

    //左下角圆弧，弧度从1/2PI到PI  
    cxt.arc(radius - width, height - radius, radius, Math.PI / 2, Math.PI);

    //矩形左边线  
    cxt.lineTo(- width, radius);

    //左上角圆弧，弧度从PI到3/2PI  
    cxt.arc(radius - width, radius, radius, Math.PI, Math.PI * 3 / 2);

    //上边线  
    cxt.lineTo(width - radius, 0);

    //右上角圆弧  
    cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2);

    //右边线  
    cxt.lineTo(width, height - radius);
    cxt.closePath();
  }
  alert(...msg) {
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
