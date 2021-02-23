// 模仿三国志曹操传 运气 敏姐 带兵
// 物品 使用 放背包
import Map from "./Engine/map";
import UI from "./Engine/ui";
import Hero from "./Engine/roles/hero";

import { loadImage, loadAll, loadJSON, get, set } from "./Engine/utils";
export default class Game {
  constructor(config = {}) {
    config = Object.assign(
      {
        el: document.body,
        side: 32,
        space: 4,
        width: 13,
        height: 13,
      },
      config
    );

    this.tick = 0;
    this.config = config;
    this.floorsIndex = 0;
    if (config.keepPosition) {
      this.floorsIndex = get("floorsIndex");
    }
    window.__game__ = this;

    const dataList = ["data", "maps", "icons", "enemys", "events", "items"];
    Promise.all(dataList.map((file) => loadJSON(`static/${file}.js`))).then(
      (dataArr) => {
        dataList.forEach((key, i) => (this[key] = dataArr[i]));
        this.loadFloorsDataAndImages(this.data);
      }
    );
  }

  loadFloorsDataAndImages(data) {
    const imageList = [
      "enemys",
      "hero",
      "items",
      "npcs",
      "terrains",
      "animates",
    ];

    const P1 = Promise.all(
      imageList.map((image) => loadImage(`static/images/${image}.png`))
    ).then((images) => {
      this.images = images;
      imageList.forEach((key, i) => (images[key] = images[i]));
    });

    const P2 = Promise.all(
      data.main.floorIds.map((floor) => loadJSON(`static/floors/${floor}.js`))
    ).then((floors) => {
      this.floors = floors;
      data.main.floorIds.forEach((key, i) => (floors[key] = floors[i]));
    });

    Promise.all([P1, P2]).then(() => {
      this.ui = new UI(this.config);
      let heroStoreInfo = {};
      if (this.config.keepPosition) {
        heroStoreInfo = get("hero");
        console.log(heroStoreInfo);
      }
      this.hero = new Hero({
        x: 6,
        y: 2,
        height: 33,
        width: 32,
        img: this.images.hero,
        ...heroStoreInfo,
        game: this,
      });
      this.ui.setHerolayer(this.hero);

      this.changeFloor();
      this.bindControl();
      this.gameStart();
    });
  }

  changeFloor(i = 0) {
    this.floorsIndex += i;
    this.floorsIndex = this.floorsIndex % this.floors.length;
    if (this.floorsIndex < 0) {
      this.floorsIndex += this.floors.length;
    }
    this.createMap(i);
    if (i < 0) {
      const [x, y] = this.floor.upFloor;
      this.hero.set({ x, y });
    } else if (i > 0) {
      const [x, y] = this.floor.downFloor;
      this.hero.set({ x, y });
    }
    console.log(this.floor.name);
  }

  createMap(i) {
    set("floorsIndex", this.floorsIndex);
    const floor = this.floors[this.floorsIndex];
    this.floor = floor;
    this.map = new Map(this, floor);
    this.ui.setBacklayer(this.map.backLayer);
    this.ui.setBlocklayer(this.map.mainLayer);
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
    this.tick++;
    const tick2 = this.tick % 2,
      tick3 = this.tick % 3,
      tick4 = this.tick % 4;
    this.ui.nextFrame({ tick2, tick3, tick4 });
  }

  move({ x, y }) {
    const boxIndex = this.map.mainLayer.findIndex(
      (box) => box.y === y && box.x === x
    );
    const events = this.floor.events;
    const event = events[[x, y]];
    if (event) {
      console.log(event);
    }
    if (boxIndex !== -1) {
      const box = this.map.mainLayer[boxIndex];
      const info = box.info;
      const item = this.items.items[info.id];
      // console.log(info);
      if (info.id === "upFloor") {
        this.changeFloor(1);
      } else if (info.id === "downFloor") {
        this.changeFloor(-1);
      } else if (info.cls === "enemys") {
        const enemys = this.enemys;
        const lessHp = this.hero.attack(box);
        if (lessHp > 0) {
          this.map.mainLayer.splice(this.map.mainLayer.indexOf(box), 1);
          this.hero.set({ x, y });
          this.hero.battleInfo.hp = lessHp;
          console.log("击败", enemys[info.id].name, lessHp);
        } else {
          console.log("打不过", enemys[info.id].name);
        }
      } else if (["items"].includes(info.cls)) {
        this.map.mainLayer.splice(this.map.mainLayer.indexOf(box), 1);
        this.hero.set({ x, y });
        console.log("获得", item.name);
        if (item.cls === "use") {
          if (item.effect) {
            const effect = item.effect.split(":");
            const [lead, attribute, num] = effect;
            this[lead].battleInfo[attribute] += parseInt(num);
            console.log(this[lead].battleInfo);
          } else if (item.equip) {
            if (item.equip.type === 0) {
              this.hero.battleInfo.atk += item.equip.atk;
            } else if (item.equip.type === 1) {
              this.hero.battleInfo.def += item.equip.def;
            }
          } else {
            debugger;
          }
        } else if (item.cls === "keys") {
          this.hero.keys[info.id]++;
          console.log(this.hero.keys);
        }
      } else if ((info.trigger = "openDoor")) {
        const key = info.id.replace("Door", "") + "Key";
        if (this.hero.keys[key] > 0) {
          this.map.mainLayer.splice(this.map.mainLayer.indexOf(box), 1);
          this.hero.set({ x, y });
          this.hero.keys[info.id]--;
        } else if (this.hero.keys[key] === 0) {
          const item = this.items.items[key];
          console.log("没有", item.name);
        } else {
          // console.log(info, "非红蓝黄门");
        }
      }
    } else {
      this.hero.set({ x, y });
    }
  }

  bindControl() {
    const Down = { x: 0, y: 1, offsetY: 0 },
      Left = { x: -1, y: 0, offsetY: 1 },
      Right = { x: 1, y: 0, offsetY: 2 },
      Up = { x: 0, y: -1, offsetY: 3 };

    const KEY_MAP = {
      KeyS: Down,
      KeyW: Up,
      KeyA: Left,
      KeyD: Right,
    };

    const keydown = (e) => {
      switch (e.code) {
        case "PageDown":
          this.changeFloor(-1);
          break;
        case "PageUp":
          this.changeFloor(+1);
          break;
        case "KeyS":
        case "KeyA":
        case "KeyW":
        case "KeyD":
          const { x, y, offsetY } = KEY_MAP[e.code];
          const dist = this.hero.getDist({ x, y });
          this.hero.face({ x: dist.x, y: dist.y });
          this.move({ x: dist.x, y: dist.y });
          break;
      }

      const { x, y, offsetY, battleInfo, keys } = this.hero;

      set("hero", { x, y, offsetY, battleInfo, keys });
      // this.map.mainLayer.map(block => {
      //   console.log(block)
      // })
    };

    const dblclick = () => {};
    document.addEventListener("keydown", keydown);
    document.addEventListener("dblclick", dblclick);
  }
}

window.Game = Game;
