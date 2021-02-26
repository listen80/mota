// 模仿三国志曹操传 运气 敏捷 带兵
// 物品 使用 放背包
import Map from "./Engine/Map";
import UI from "./Engine/UI";
import Control from "./Engine/Control";
import Hero from "./Engine/Roles/Hero";
import loder from "./utils/loader";
import Block from "./Engine/Base/Block";
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
    loder().then((data) => {
      Object.assign(this, data);
      // blocksInfo mapsInfo main sounds
      // deepFreeze(this.resource);
      this.init();
    });
  }

  init() {
    const { main } = this;
    document.title = main.firstData.title;
    this.ui = new UI(this);
    this.control = new Control();
    this.hero = new Hero(this, this.blocksInfo.heros.list.ab, this.control);
    this.mapChange(main.firstData.mapId);
    this.gameStart();
  }

  mapChange(id) {
    const { mapsInfo } = this;
    const map = mapsInfo.list[id];
    if (map) {
      this.createMap(map);
    }
  }

  createMap(map) {
    this.map = new Map(this, { ...map });
    this.map.add(this.hero);
  }

  gameStop() {
    clearInterval(this.ident);
    this.ident = -1;
  }

  gameStart() {
    this.ident = setInterval(() => {
      this.nextFrame();
    }, 166);
  }

  nextFrame() {
    const { ui } = this;
    this.tick++;
    this.map.nextFrame(ui);
    this.ui.drawGlobalMessage(); // 全局提示
    this.control.restore();
  }
}

window.Game = Game;
