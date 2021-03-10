// 模仿三国志曹操传 运气 敏捷 带兵
// 物品 使用 放背包
import Map from "./Map";
import UI from "./UI";
import Control from "./Control";
import Hero from "./Roles/Hero";
import loder, { getBlockInfo } from "../utils/loader";
import { setStorage, getStorage, deepFreeze } from "../utils/utils";

import Dialog from "./roles/Dialog";
export default class Game {
  constructor() {
    const config = {
      screen: {
        el: document.body,
        width: 17 * 32,
        height: 13 * 32,
      },
    };

    this.config = config; // 配置
    this.tick = 0; // 时钟
    this.map = null; // 通过new Map 生成的 对象
    this.heros = [];
    loder().then((data) => {
      deepFreeze(data)
      Object.assign(this, data);
      this.init();
      this.alert(data.main.firstData.init)
    });
  }

  init() {
    const { main } = this;
    document.title = main.firstData.title;
    this.ui = new UI(this.config.screen);
    this.control = new Control();
    this.hero = main.firstData.heros.reduceRight((pre, id, i) => {
      const heroConfig = { ...getBlockInfo({ cls: "heros", id }) };
      // hack
      heroConfig.x = heroConfig.x * 32;
      heroConfig.y = heroConfig.y * 32;
      const hero = new Hero(this, heroConfig);
      this.heros.push(hero);
      hero.follower = pre;
      return hero;
    }, null);
    this.hero.control = this.control;
    this.control.push(this.hero);
    let mapId = main.firstData.mapId;
    if (true) {
      mapId = getStorage("mapId") || mapId;
    }
    this.mapChange(mapId);
    this.gameStart();
  }

  mapChange(id) {
    const { mapsInfo } = this;
    const map = mapsInfo.list[id];
    if (map) {
      if (true) {
        setStorage("mapId", id);
      }
      this.createMap(map);
    }
  }

  createMap(map) {
    if (this.map) {
      this.map.restoreHeroLayer();
      this.sounds[this.map.config.bgm].pause();
    }
    this.map = new Map(this, map);
    this.sounds["floor.mp3"].play();
    const bgm = this.sounds[map.bgm];
    bgm.loop = true;
    // bgm.play();
    this.heros.forEach((hero) => {
      this.map.add(hero);
    });
  }

  gameStop() {
    clearInterval(this.ident);
    this.ident = -1;
  }

  gameStart() {
    this.ident = setInterval(() => {
      this.keyFrame();
    }, 16);
  }

  keyFrame() {
    this.tick++;
    this.ui.clearRect();
    this.ui.render(this.map);
    this.control.restore();
  }

  alert(msg) {
    this.map.topLayer.removeAll();
    this.map.topLayer.add(
      new Dialog(this, { x: 0, y: 0, width: 32 * 6, height: 32 * 1, msg }, this.control)
    );
  }
}

window.Game = Game;
