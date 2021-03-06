// 界面渲染
export default class UI {
  constructor(screen) {
    const { el, width, height } = screen;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    el.appendChild(canvas);
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.tick = 0;
    this.globalMessage = "";
  }
  mergeStyle = (style) => {
    if (style) {
      Object.assign(this.context, style);
    }
  };
  clearRect() {
    const { context, canvas } = this;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  drawRect(block) {
    if (block.radius) {
      this.drawRoundRectPath(block);
    } else {
      const { context, mergeStyle } = this;
      const { style, x, y, width, height } = block;
      context.fillStyle = "white";
      mergeStyle(style);
      context.fillRect(x, y, width, height);
    }
  }
  drawText(block) {
    const { context, mergeStyle } = this;
    const { x, y, offsetY, offsetX, style } = block;
    mergeStyle(style);
    context.fillText(block.getText(), x + offsetX, y + offsetY);
  }
  drawRoundRectPath(block) {
    const { x, y, width, height, radius, style } = block;
    const { context, mergeStyle } = this;
    context.fillStyle = "rgba(155, 144, 255, .8)"; //若是给定了值就用给定的值否则给予默认值
    mergeStyle(style);
    context.translate(x, y);
    context.beginPath();
    context.arc(width - radius, height - radius, radius, 0, Math.PI / 2);
    context.lineTo(radius, height);
    context.arc(radius, height - radius, radius, Math.PI / 2, Math.PI);
    context.lineTo(0, radius);
    context.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2);
    context.lineTo(width - radius, 0);
    context.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2);
    context.lineTo(width, height - radius);
    context.fill();
    context.closePath();
  }
  drawImage(block) {
    const { img, imageOffsetX, imageOffsetY, x, y, height, width } = block;
    this.context.drawImage(
      img,
      imageOffsetX * width,
      imageOffsetY * height,
      width,
      height,
      x,
      y,
      width,
      height
    );
  }
  render(block) {
    const { context } = this;
    context.beginPath();
    context.save();
    if (block.died) {
      return;
    }
    if (block.calc) {
      block.calc();
    }
    if (block.died) {
      return;
    }
    if (block.translate) {
      const { x = 0, y = 0 } = block.translate;
      context.translate(x, y);
    }
    if (block.rotate) {
      const { angle, x = 0, y = 0 } = block.rotate;
      context.translate(x, y);
      context.rotate(angle);
      context.translate(-x, -y);
    }
    if (block.scale) {
      const { x = 0, y = 0, scaleX, scaleY } = block.scale;
      context.translate(x, y);
      context.scale(scaleX, scaleY);
      context.translate(-x, -y);
    }
    if (block.children) {
      block.children.forEach((child) => {
        this.render(child);
      });
    } else if (block.img) {
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
