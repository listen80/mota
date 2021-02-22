import Map from "./Engine/map";

import UI from "./Engine/ui";

import { floors } from "./Project/collect";
import { loadImages } from "./Engine/utils";
import Box from "./Engine/box";

const images = {
  enemys: null,
  hero: null,
  items: null,
  npcs: null,
  terrains: null,
  animates: null,
};

const __floors = [
  "MT0",
  "MT1",
  "MT2",
  "MT3",
  "MT4",
  "MT5",
  "MT6",
  "MT7",
  "MT8",
  "MT9",
  "MT10",
  "MT11",
  "MT12",
  "MT13",
  "MT14",
  "MT15",
  "MT16",
  "MT17",
  "MT18",
  "MT19",
  "MT20",
  "MT21",
  "MT22",
  "MT23w",
  "MT23e",
  "MT23s",
  "MT_1",
];

export default class Game {
  constructor(config = {}) {
    config = Object.assign(
      {
        el: document.body,
        side: 32,
        space: 4,
        width: 13,
        height: 13,
        speed: 300,
      },
      config
    );

    this.tick = 0;
    this.config = config;
    const list = Object.keys(images).map(
      (url) => "static/images/" + url + ".png"
    );
    loadImages(list, (arr) => {
      arr.forEach((img, i) => {
        images[Object.keys(images)[i]] = img;
      });
      config.images = images;
      this.ui = new UI(config);
      this.createMap(floors.MT0);
      this.hero = new Box(config, { x: 0, y: 0 });
      this.gameStart();
      this.bindControl();
    });
  }

  createMap(map) {
    this.map = new Map(this.config, map);
    this.ui.layers[-1] = this.map.background;
    this.ui.layers[0] = this.map.boxes;
  }
  gameStop() {
    clearInterval(this.ident);
    this.ident = -1;
    this.over = true;
    // this.draw();
  }
  // 游戏开始
  gameStart() {
    // this.calcBoxes();
    this.ident = setInterval(() => {
      this.tick++;
      this.map.calc(this.tick % 2);
      this.ui.draw(this.tick % 2);
    }, 333);
  }

  bindControl() {
    const keydown = (e) => {
      switch (e.code) {
        case "KeyS": // 方向为下
          console.log();
          this.createMap(floors[floors[(Math.random() * 26) | 0]]);
          break;
        case 32: // 空格换方向
          if (this.downBox.downBoxType === 4) {
            break;
          }
          this.calcBoxes((box) => box.rotate(this.downBox[0]));
          break;
        case 37: // 方向为左
          this.calcBoxes([-1, 0]);
          break;
        case 39: // 方向为右
          this.calcBoxes([1, 0]);
          break;
      }
    };

    const dblclick = () => {
      if (this.over) {
        this.over = false;
        this.initData();
        this.gameStart();
      } else {
        if (this.ident === -1) {
          this.gameStart();
        } else {
          this.gameStop();
        }
      }
    };
    document.addEventListener("keydown", keydown);
    document.addEventListener("dblclick", dblclick);
  }
}
