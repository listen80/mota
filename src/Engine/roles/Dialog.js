import Block from "../base/Block";
import Text from "./Text";
export default class Dialog {
  constructor(game, { x, y, msg = "", life, width, height }, control) {
    this.game = game;

    this.x = x;
    this.y = y;

    this.msg = msg;

    this.life = life;
    this.control = control;
    this.tick = 0;
    this.children = [
      new Block({
        x: 0,
        y: 0,
        width: width,
        height: height,
        radius: 20,
      }),
      new Text(game, {
        x: 0,
        y: 0,
        msg: msg,
        style: {
          font: `20px '楷体'`, //设置字体
          fillStyle: "white",
          textBaseline: "middle",
          textAlign: "start",
        },
      }),
      new Text(game, {
        x: 0,
        y: 32,
        msg: msg,
        style: {
          font: `20px '楷体'`, //设置字体
          fillStyle: "white",
          textBaseline: "middle",
          textAlign: "start",
        },
      }),
      new Text(game, {
        x: 0,
        y: 64,
        msg: msg,
        style: {
          font: `20px '楷体'`, //设置字体
          fillStyle: "white",
          textBaseline: "middle",
          textAlign: "start",
        },
      }),
    ];
    // this.scale = {
    //   x: 0.5,
    //   y: 0.5,
    // };

    this.translate = { x: (game.map.config.width * 32 - x) / 2, y: 0 };
    // this.rotate = { angle: Math.PI / 2 * .01 };
  }

  calc() {
    this.tick++;
    if (this.life) {
      if (!--this.life) {
        this.died = true;
      }
    }
    // this.rotate.angle += 0.01;
    // this.scale.x *= 1.01;
    // this.scale.y *= 1.01;
  }
}
