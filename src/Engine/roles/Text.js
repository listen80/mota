export default class Text {
  constructor(game, { x, y, msg = "" }) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.offsetY = 16;
    this.offsetX = 0;
    this.msg = msg;
    this.normal = true;

    const result = /\{([^}]+)\}/.exec(msg);
    if (result) {
      this.splitKeys = result[1].split(/\./);
      this.normal = false;
    }
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
  draw(ui) {
    ui.drawBlock(this);
  }
}
