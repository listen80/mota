// 各种块

export default class Text {
  constructor({ x, y, img, offsetY = 0, offsetX = 0, msg = "" }) {
    this.img = img;

    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.msg = msg;
  }
  calc() {
    if (this.maxAniFrame) {
    }
  }
  getText() {
    let r = window.__game__;
    try {
      return this.msg.replace(/\{([^}]+)\}/, (all, some) => {
        let arr = some.split(/\./);
        for (let i = 0; i < arr.length; i++) {
          r = r[arr[i]];
        }
        return r;
      });
    } catch (e) {
      console.log(e);
      return this.msg;
    }
  }
}
