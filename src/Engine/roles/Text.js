export default class Text {
  constructor(game, { x, y, msg = "" }) {
    this.game = game;

    this.x = x;
    this.y = y;

    this.msg = msg;
    this.norml = true;
    const result = /\{([^}]+)\}/.exec(msg);
    if (result) {
      this.splitKeys = result[1].split(/\./);
      this.norml = false;
    }
  }
  getText() {
    if (this.norml) {
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
        this.norml = true;
        debugger;
        console.error(this.msg, "错误");
      }
    }
  }
  draw(ui) {
    ui.drawBlock(this);
  }
}
