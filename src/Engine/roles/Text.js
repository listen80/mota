export default class Text {
  constructor(
    game,
    {
      x,
      y,
      msg = "",
      style = {
        font: `16px '楷体'`, //设置字体
        fillStyle: "white",
        textBaseline: "middle",
        textAlign: "center",
      },
    }
  ) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.offsetY = 16;
    this.offsetX = 0;
    this.msg = msg;
    this.normal = true;
    this.style = style;

    const result = /\{([^}]+)\}/.exec(msg);
    if (result) {
      this.splitKeys = result[1].split(/\./);
      this.normal = false;
    }
    // this.rotate = { angle: Math.PI / 2, x: this.x + 16, y: this.y + 16 };
  }

  calc() {
    this.text = this.getText();
  }

  getText() {
    if (this.normal) {
      return this.msg;
    } else {
      try {
        let msg = this.game,
          arr = this.splitKeys;
        for (let i = 0; i < arr.length; i++) {
          msg = msg[arr[i]];
        }
        return msg;
      } catch (e) {
        this.normal = true;
        console.error("[Text]", this);
      }
    }
  }
}
