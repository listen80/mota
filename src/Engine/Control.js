export default class Control {
  constructor() {
    this.DIR_KEY_MAP = {
      ArrowDown: "down",
      ArrowUp: "up",
      ArrowLeft: "left",
      ArrowRight: "right",
    };
    this.Confirm_KEY = "Space"
    this.Cancel_KEY = "ESC"
    this.restore();
    this.bind();
  }
  bind() {
    document.addEventListener("keydown", this.keydown);
  }
  keydown = (e) => {
    const { code } = e;
    const { DIR_KEY_MAP, Confirm_KEY, Cancel_KEY } = this;
    if (DIR_KEY_MAP[code]) {
      this.direction = DIR_KEY_MAP[e.code];
    } else if (code === Confirm_KEY) {
      this.confirm = true;
    } else if (code === Cancel_KEY) {
      this.cancel = true;
    }
  }
  restore() {
    this.direction = false;
    this.confirm = false;
    this.cancel = false;
    this.cheat = true;
  }
  destroy() {
    document.removeEventListener("keydown", this.keydown);
  }
}
