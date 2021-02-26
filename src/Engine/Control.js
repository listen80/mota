export default class Control {
  constructor() {
    this.KEY_MAP = {
      KeyS: "down",
      KeyW: "up",
      KeyA: "left",
      KeyD: "right",
    };
    this.restore();
    this.bind();
  }

  bind() {
    document.addEventListener("keydown", this.keydown);
  }
  keydown = (e) => {
    switch (e.code) {
      case "PageDown":
        // this.mapChange(-1);
        break;
      case "PageUp":
        // this.mapChange(+1);
        break;
      case "KeyS":
      case "KeyA":
      case "KeyW":
      case "KeyD":
        this.direction = this.KEY_MAP[e.code];
        break;
      case "Space":
        this.confirm = true;
        break;
      case "Esc":
        this.cancel = true;
        break;
      case "KeyF":
        this.cheat = true;
    }
  };
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
