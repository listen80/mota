// 模仿三国志曹操传 运气 敏捷 带兵
// 物品 使用 放背包
import Map from "./Map";
import UI from "./UI";
import Control from "./Control";
import Hero from "./Roles/Hero";
import loder from "../utils/loader";
import Block from "./base/Block";
import { setStorage, getStorage, deepFreeze } from "../utils/utils";
export default class Game {
  constructor() {
    const config = {
      el: document.body,
      side: 32,
      width: 17,
      height: 13,
    };

    this.config = config; // 配置
    this.tick = 0; // 时钟
    this.map = null; // 通过new Map 生成的 对象
    this.heros = [];
    loder().then((data) => {
      Object.assign(this, data);
      this.init();
    });
  }

  init() {
    const { main } = this;
    document.title = main.firstData.title;
    this.ui = new UI(this);
    this.control = new Control();
    this.hero = main.firstData.heros.reduceRight((pre, id, i) => {
      const heroConfig = this.getBlockInfo({ cls: "heros", id })
      let hero = new Hero(this, heroConfig);
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
      this.map.restoreHeroLayer()
      this.sounds[this.map.config.bgm].pause();
    }
    this.map = new Map(this, { ...map });
    this.sounds["floor.mp3"].play()
    const bgm = this.sounds[map.bgm];
    bgm.loop = true;
    bgm.play();
    this.heros.forEach((hero) => {
      this.map.add(hero)
    });
  }

  gameStop() {
    clearInterval(this.ident);
    this.ident = -1;
  }

  gameStart() {
    this.ident = setInterval(() => {
      this.nextFrame();
    }, 16);
  }

  nextFrame() {
    const { ui } = this;
    this.tick++;
    this.map.nextFrame(ui);
    this.ui.drawGlobalMessage(); // 全局提示
    this.control.restore();
  }

  getBlockInfo(info) {
    const { cls, id } = info
    const clses = this.blocksInfo[cls]
    return clses.list[id]
  }
}

window.Game = Game;
