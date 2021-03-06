import Block from "../base/Block";
import Text from "./Text";
export default class Dialog {
  constructor(game, { x, y, msg = "", width, height, life = 50 }, control) {
    this.game = game;

    this.x = x;
    this.y = y;

    this.msg = msg + "";

    this.life = life;
    this.control = control;
    this.tick = 0;
    this.life = life;

    function calcLength(str) {
      let len = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127) {
          len += 2
        } else {
          len += 1
        }
      }
      return len
    }
    const len = calcLength(this.msg)
    this.children = [
      new Block({
        x: -len * 5 - 10,
        y: 0,
        width: len * 10 + 20,
        height: height,
        radius: 20,
      }),
      new Text(game, {
        x: -len * 5,
        y: 0,
        msg: msg,
        style: {
          font: `20px '楷体'`, //设置字体
          fillStyle: "white",
          textBaseline: "middle",
          textAlign: "start",
        },
      }),
      // new Text(game, {
      //   x: 0,
      //   y: 32,
      //   msg: msg,
      //   style: {
      //     font: `20px '楷体'`, //设置字体
      //     fillStyle: "white",
      //     textBaseline: "middle",
      //     textAlign: "start",
      //   },
      // }),
      // new Text(game, {
      //   x: 0,
      //   y: 64,
      //   msg: msg,
      //   style: {
      //     font: `20px '楷体'`, //设置字体
      //     fillStyle: "white",
      //     textBaseline: "middle",
      //     textAlign: "start",
      //   },
      // }),
    ];
    this.scale = {
      x: 0,
      y: 0,
      scaleX: .3,
      scaleY: 1,
    };

    this.translate = { x: (game.map.config.width * 32) / 2, y: ((game.map.config.height - 3) * 32) / 2 };
    // this.rotate = { angle: Math.PI / 2 * .01 };
  }

  calc() {
    this.tick++;
    if (this.life) {
      if (!--this.life) {
        this.died = true;
      }
    }
    if (this.scale.scaleX < 1) {
      this.scale.scaleX *= 1.3;
      if (this.scale.scaleX > 1) {
        this.scale.scaleX = 1
      }
    }
    
  }
}
