export default class Dialog {
  constructor(game, { x, y, msg = "" }, control) {
    this.game = game;

    this.x = x;
    this.y = y;

    this.msg = msg;

    this.control = control;
  }
}
