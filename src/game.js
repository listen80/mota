// 模仿三国志曹操传 运气 敏捷 带兵
// 物品 使用 放背包
import Map from "./Engine/Map";
import UI from "./Engine/UI";
import Hero from "./Engine/roles/Hero";
import Animate from "./Engine/roles/AnimateTerrains";
import loadResource from "./loadResource";
import { get, set, deepFreeze } from "./utils";
export default class Game {
  constructor() {
    const config = {
      el: document.body,
      side: 32,
      width: 17,
      height: 13,
    };

    this.config = config; // 配置
    this.resource = null; // 加载好的数据图片等
    this.tick = 0; // 时钟
    this.map = null; // 通过new Map 生成的 对象

    loadResource(this.resource).then((resource) => {
      this.resource = resource;
      deepFreeze(this.resource);
      this.init();
    });
  }

  init() {
    this.gameData = {
      mapsIndex: 0,
    };

    if (this.config.keepPosition) {
      this.gameData.mapsIndex = get("floorsIndex");
    }

    this.ui = new UI(this);
    if (this.config.keepPosition) {
      this.floorsIndex = get("floorsIndex");
    }
    this.hero = new Hero(this, get("hero"));
    this.menuMap = new Map(
      this,
      this.resource.data.leftMenu,
      this.resource.data.leftText
    );

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
    set("floorsIndex", gameData.mapsIndex);
    const map = resource.maps[gameData.mapsIndex];
    gameData.map = map;
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
    this.ui.drawGlobalMessage(); // 全局提示
  }

  moveInfoBlock(block, info) {
    const { id, cls, trigger } = block.info;
    if (trigger) {
      this.handleTrigger(block);
      return;
    }
    if (cls === "enemys") {
      this.handleEnemy(block);
    }
    if (cls === "items") {
      this.handleItem(block);
    }
    if (cls === "npcs") {
      this.handleNpc(block);
    }
    if (cls === "animate") {
      this.handleAnimate(block);
    }
    if (cls === "terrains") {
      this.handleTerrains(block);
    }
  }
  handleTrigger(block) {
    // 1. 移除静态地形 门
    // 2. 创建动画地kaimen形 开门
    // 3. 对应钥匙减1
    const { map, resource, ui, hero } = this;
    const { mainLayer } = map;
    const { info } = block;
    const { id, cls, trigger, need } = info;

    if (trigger === "openDoor") {
      if (hero.items[need]) {
        // 开门
        mainLayer.remove(block);
        const { x, y } = block;
        mainLayer.add(new Animate(this, { x, y, id, playCount: 1 }));
        hero.items[need]--;
      } else {
        const item = resource.itemMapping[need];
        ui.alert(hero.name, "没有", item.name);
      }
    }

    if (trigger === "upFloor") {
      this.changeFloor(1);
    }
    if (trigger === "downFloor") {
      this.changeFloor(-1);
    }
  }
  handleTerrains(block) {
    console.log("handleTerrains");
    // 地形，除了不能移动上去，没有可以处理的
  }
  handleAnimate(block) {
    console.log("handleAnimate");
    // 有动画的地形，除了不能移动上去，没有可以处理的，地形加强版，播放星星动来动去的，水流，火焰等
  }
  handleNpc(block) {
    console.log("handleNpc");
  }
  handleEnemy(block) {
    const { map, resource, ui, hero } = this;
    const { mainLayer } = map;
    const { x, y, info } = block;
    const lessHp = this.hero.attack(block);
    const { detailInfo } = block;
    if (lessHp > 0) {
      mainLayer.remove(block);
      hero.set({ x, y });
      hero.kill(block);
      hero.hp = lessHp;
      ui.alert(hero.name, "击败", detailInfo.name);
    } else {
      ui.alert(hero.name, "打不过", detailInfo.name);
    }
  }

  handleItem(block) {
    const { map, resource, ui, hero } = this;
    const { mainLayer } = map;
    const { info, x, y } = block;
    const { id, cls, trigger } = info;

    mainLayer.remove(block);
    hero.set({ x, y });
    const item = resource.itemMapping[id];
    ui.alert(hero.name, "获得", item.name);
    if (item.cls === "use") {
      if (item.effect) {
        const getString = (effect) => {
          effect = effect.split(":");
          const [lead, attribute, num] = effect;
          this[lead][attribute] += parseInt(num);
          const fanyi = { atk: "攻击", def: "防御", hp: "生命" };
          console.log(
            this[lead].name +
              fanyi[attribute] +
              (num > 0 ? "增加" : "减少") +
              num
          );
        };
        getString(item.effect);
      } else if (item.equip) {
        if (item.equip.type === 0) {
          hero.battleInfo.atk += item.equip.atk;
        } else if (item.equip.type === 1) {
          hero.battleInfo.def += item.equip.def;
        }
      } else {
        debugger;
      }
    } else if (item.cls === "store") {
      hero.items[id] = hero.items[id] || 0;
      hero.items[id]++;
    }
  }

  move({ x, y }) {
    const { map, hero } = this;
    const { mainLayer } = map;
    const block = mainLayer.find({ x, y });
    if (block) {
      const info = block.info;
      if (info) {
        // 没有info, 比如animate, 门打开的动作等
        return this.moveInfoBlock(block);
      }
    } else {
      hero.set({ x, y });
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
          const { x, y } = KEY_MAP[e.code];
          const dist = this.hero.getDist({ x, y });
          this.hero.face({ x: dist.x, y: dist.y });
          this.move({ x: dist.x, y: dist.y });
          break;
      }

      const { x, y, offsetY, battleInfo, direction } = this.hero;
      set("hero", { x, y, offsetY, battleInfo, direction });
    };

    const dblclick = () => {};
    document.addEventListener("keydown", keydown);
    document.addEventListener("dblclick", dblclick);
  }
}

window.Game = Game;
