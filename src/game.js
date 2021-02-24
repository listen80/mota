// 模仿三国志曹操传 运气 敏捷 带兵
// 物品 使用 放背包
import Map from "./Engine/map";
import UI from "./Engine/ui";
import Hero from "./Engine/roles/hero";
import Animate from "./Engine/roles/animate";
import loadResource from "./loadResource";
import { get, set, deepFreeze } from "./utils";
import { leftMenu } from "./leftMenu";
export default class Game {
  constructor(config = {}) {
    config = {
      el: document.body,
      side: 32,
      space: 4,
      width: 17,
      height: 13,
      ...config,
    };

    this.config = config; // 配置
    this.resource = {}; // 加载好的数据图片等
    this.tick = 0; // 时钟
    this.map = null; // 通过new Map 生成的 对象

    if (config.keepPosition) {
      this.floorsIndex = get("floorsIndex");
    }

    loadResource(this.resource).then(() => {
      deepFreeze(this.resource);
      console.log(this);
      this.init();
    });
  }

  init() {
    this.gameData = {
      mapsIndex: 0,
    };

    this.ui = new UI(this);
    this.hero = new Hero(this);

    this.changeFloor();
    this.bindControl();
    this.gameStart();
  }

  changeFloor(i = 0) {
    const { gameData, resource } = this;
    gameData.mapsIndex += i;
    gameData.mapsIndex = gameData.mapsIndex % resource.maps.length;
    if (gameData.mapsIndex < 0) {
      gameData.mapsIndex += resource.maps.length;
    }
    const map = resource.maps[gameData.mapsIndex];
    // 配置文件
    this.createMap(map);
    // 兼容魔塔的字段
    if (i < 0 && map.upFloor) {
      const [x, y] = map.upFloor;
      this.hero.set({ x, y });
    } else if (i > 0 && map.downFloor) {
      const [x, y] = map.downFloor;
      this.hero.set({ x, y });
    }
  }

  createMap(map) {
    this.menuMap = new Map(this, leftMenu);
    this.map = new Map(this, { ...map, ...{ offsetX: 4 } });
    this.map.add(this.hero);
  }

  gameStop() {
    clearInterval(this.ident);
    this.ident = -1;
  }

  gameStart() {
    this.ident = setInterval(() => {
      this.nextFrame();
    }, 111);
  }

  nextFrame() {
    const { ui } = this;
    this.tick++;
    this.menuMap.nextFrame(ui);
    this.map.nextFrame(ui);
  }

  move({ x, y }) {
    const { map, resource } = this;
    const { mainLayer } = map;
    const block = mainLayer.find({ x, y });
    if (block) {
      const info = block.info;
      if (!info) {
        // 比如animate
        return;
      }

      if (info.id === "upFloor") {
        this.changeFloor(1);
      } else if (info.id === "downFloor") {
        this.changeFloor(-1);
      } else if (info.cls === "enemys") {
        const enemys = this.enemys;
        const item = this.items.items[info.id];
        const lessHp = this.hero.attack(block);
        if (lessHp > 0) {
          blocks.splice(blocks.indexOf(block), 1);
          this.hero.set({ x, y });
          this.hero.battleInfo.hp = lessHp;
          this.ui.setMsg("击败", enemys[info.id].name);
        } else {
          this.ui.setMsg("打不过", enemys[info.id].name);
        }
      } else if (info.cls === "items") {
        blocks.splice(blocks.indexOf(block), 1);
        this.hero.set({ x, y });
        this.ui.setMsg("获得", item.name);
        if (item.cls === "use") {
          if (item.effect) {
            const getString = (effect) => {
              effect = effect.split(":");
              const [lead, attribute, num] = effect;
              this[lead].battleInfo[attribute] += parseInt(num);
              console.log(effect);
            };
            getString(item.effect);
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
      } else if (info.trigger === "openDoor") {
        const key = info.id.replace("Door", "") + "Key";
        if (this.hero.keys[key] > 0) {
          // 开门
          mainLayer.remove(block);
          const { x, y } = block;
          mainLayer.add(
            new Animate({
              x,
              y,
              playCount: 1,
              offsetY: 4,
              interval: 2,
            })
          );
          debugger;
          this.hero.keys[key]--;
        } else if (this.hero.keys[key] === 0) {
          const item = this.items.items[key];
          this.ui.setMsg("没有", item.name);
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
    };

    const dblclick = () => {};
    document.addEventListener("keydown", keydown);
    document.addEventListener("dblclick", dblclick);
  }

  getText(str) {
    let obj = this;
    try {
      return str.replace(/\{([^}]+)\}/, (all, some) => {
        let arr = some.split(/\./);
        for (let i = 0; i < arr.length; i++) {
          const key = arr[i];
          obj = obj[key];
        }
        return obj;
      });
    } catch (e) {
      console.log(e);
      return str;
    }
  }
}

window.Game = Game;
