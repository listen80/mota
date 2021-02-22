import Map from "./Engine/map";
import UI from "./Engine/ui";
import Box from "./Engine/box";

import { loadImage, loadAll, loadJSON } from "./Engine/utils";

const images = {
  enemys: null,
  hero: null,
  items: null,
  npcs: null,
  terrains: null,
  animates: null,
};
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

    loadAll(
      loadJSON,
      ["static/maps.js", "static/icons.js"],
      ([mapsInfo, icons]) => {
        config.mapsInfo = mapsInfo;
        config.icons = icons;
        this.init();
      }
    );
  }

  init() {
    loadJSON("static/data.js", (data) => {
      this.data = data;
      console.log(data.main.floorIds);

      loadAll(
        loadJSON,
        data.main.floorIds.map((v) => `static/floors/${v}.js`),
        (floors) => {
          console.log(floors);
          this.floors = floors;
          this.floorsIndex = 0;
          const list = Object.keys(images).map(
            (url) => "static/images/" + url + ".png"
          );

          loadAll(loadImage, list, (arr) => {
            arr.forEach((img, i) => {
              images[Object.keys(images)[i]] = img;
            });
            this.config.images = images;
            this.ui = new UI(this.config);
            this.createMap(floors[0]);
            // this.hero = new Box(this.config, { x: 0, y: 0 });
            this.gameStart();
            this.bindControl();
          });
        }
      );
    });
  }

  createMap(map) {
    this.map = new Map(this.config, map);
    console.log(map);
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
    }, 255);
  }

  bindControl() {
    const floors = this.floors;
    const keydown = (e) => {
      switch (e.code) {
        case "KeyS": // 方向为下
          this.floorsIndex++;
          this.createMap(floors[this.floorsIndex % floors.length]);
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
