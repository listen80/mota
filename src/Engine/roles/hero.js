import { get, set } from "../../utils/utils";

import Block from "../Base/Block";

export default class Hero extends Block {
  constructor(game, config) {
    if (true) {
      config = Object.assign(
        config,
        get("hero", { x, y, direction, atk, def, hp, items })
      );
    }
    const {
      direction = "up",
      x = 6,
      y = 10,
      name = "勇士",
      items = {},
      lv = 1,
      money = 0,
      atk = 10,
      def = 10,
      hp = 1000,
      hpmax = 999999,
      exp = 0,
    } = config;
    super(config);
    this.name = name;

    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.hpmax = hpmax;
    this.money = money;
    this.exp = exp;
    this.facesOffseY = { down: 0, left: 1, right: 2, up: 3 };
    this.lv = lv;
    this.direction = direction;
    this.offsetY = this.facesOffseY[direction];
    this.items = {
      yellowKey: 0,
      blueKey: 0,
      redKey: 0,
      ...items,
    };
    this.game = game;
  }

  face(direction) {
    this.direction = direction;
    this.offsetY = this.facesOffseY[direction];
  }

  judgeFace({ x, y }) {
    const down = { x: 0, y: 1, direction: "down" },
      left = { x: -1, y: 0, direction: "left" },
      right = { x: 1, y: 0, direction: "right" },
      up = { x: 0, y: -1, direction: "up" };
    const find = [down, left, right, up].find((direc) => {
      if (direc.x === x - this.x && direc.y === y - this.y) {
        return true;
      }
    });
    return find;
  }

  getAttackResult(battleInfo, enemyInfo) {
    if (battleInfo.atk - enemyInfo.def <= 0) {
      return 0;
    }
    const heroNeedNum =
      Math.ceil(enemyInfo.hp / (battleInfo.atk - enemyInfo.def)) - 1;
    return battleInfo.hp - heroNeedNum * (enemyInfo.atk - battleInfo.def);
  }

  attack(detailInfo) {
    return this.getAttackResult(this, detailInfo);
  }
  kill(detailInfo) {
    const { experience, money } = detailInfo;
    this.exp += experience;
    this.money += money;
  }
  getItem(some, num) {
    Object.keys(some).forEach((v) => {
      if (!this.items[v]) {
        this.items[v] = 0;
      }
      this.items[v] += some[v];
    });
  }
  removeItem(id, cost = 1) {
    if (this.items[id] >= cost) {
      this.items[id] -= cost;
      return true;
    } else {
      return false;
    }
  }
  calc() {
    const { control } = this.game;
    const { direction } = control;

    const DirToArr = {
      down: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
      up: { x: 0, y: -1 },
    };
    if (direction) {
      this.face(direction);
      const dist = this.getDist(DirToArr[direction]);
      this.move(dist);
      const { x, y, atk, def, hp, items } = this;
      set("hero", { x, y, direction, atk, def, hp, items });
    }
    Block.prototype.calc.apply(this, arguments);
  }
  move() {
    const { game } = this;
    const { map, hero } = game;
    const { mainLayer, config } = map;
    const block = mainLayer.find({ x, y });
    const events = config.events[[x, y]];
    if (events) {
      events.forEach((event) => {
        const { type, who, act } = event;
        if (type === "eval") {
          act.reduce((who, s) => {
            const { opt, arg } = s;
            return who[opt](arg);
          }, this[who]);
        }
        delete this.map.e[[x, y]];
      });
    } else if (block) {
      const info = block.info;
      if (info) {
        // 没有info, 比如animate, 门打开的动作等, 一个动画，播放一次
        // 没有其他钩子了，不需要
        return this.moveInfoBlock(block);
      }
    } else {
      hero.set({ x, y });
    }
  }

  moveInfoBlock(block, info) {
    const { cls, trigger } = block.info;
    if (trigger) {
      this.handleTrigger(block);
    } else {
      if (cls === "enemys") {
        this.handleEnemys(block);
      }
      if (cls === "items") {
        this.handleItem(block);
      }
      if (cls === "npcs") {
        this.handleNpcs(block);
      }
      if (cls === "animate") {
        this.handleAnimates(block);
      }
      if (cls === "terrains") {
        this.handleTerrains(block);
      }
    }
  }
  handleTrigger(block) {
    // 1. 移除静态地形 门
    // 2. 创建动画地kaimen形 开门
    // 3. 对应钥匙减1
    const { map, blocksInfo, ui, hero } = this.game;
    const { mainLayer } = map;
    const { info, x, y } = block;
    const { id, cls, trigger, need } = info;

    if (trigger === "openDoor") {
      if (hero.removeItem(need)) {
        // 开门
        block.destroy();
        const { img, maxAniFrame, offsetY } = blocksInfo.animates.list[id];
        mainLayer.add(
          new Block({
            x,
            y,
            img,
            maxAniFrame,
            offsetY,
            playCount: 1,
            interval: 4,
          })
        );
      } else {
        const item = blocksInfo.items.list[need];
        ui.alert(hero.name, "没有", item.name);
      }
    }

    if (trigger === "upFloor") {
      const config = map.config;
      console.log(config.changeFloor);
      hero.set({ x, y });
      game.mapChange(12);
    }
    if (trigger === "downFloor") {
      game.mapChange(22);
    }
  }
  handleTerrains(block) {
    // console.log("handleTerrains");
    // 地形，除了不能移动上去，没有可以处理的
  }
  handleAnimates(block) {
    // console.log("handleAnimates");
    // 有动画的地形，除了不能移动上去，没有可以处理的，地形加强版，播放星星动来动去的，水流，火焰等
  }
  handleNpcs(block) {
    // console.log("handleNpcs");
  }
  handleEnemys(block) {
    const { map, blocksInfo, ui, hero } = this.game;
    const { mainLayer } = map;
    const { x, y, info } = block;
    const { id } = info;
    const enemyInfo = blocksInfo.enemys.list[id];
    const lessHp = hero.attack(enemyInfo);
    if (lessHp > 0) {
      mainLayer.remove(block);
      hero.set({ x, y });
      hero.kill(enemyInfo);
      hero.hp = lessHp;
      ui.alert(hero.name, "击败", enemyInfo.name);
    } else {
      ui.alert(hero.name, "打不过", enemyInfo.name);
    }
  }

  handleItem(block) {
    const { blocksInfo, ui, hero } = this.game;
    const { info, x, y } = block;
    const { id } = info;

    block.destroy();
    hero.set({ x, y });
    const item = blocksInfo.items.list[id];
    ui.alert(hero.name, "获得", item.name);
    if (item.cls === "use") {
      if (item.effect) {
        const getString = (effect) => {
          effect = effect.split(":");
          const [lead, attribute, num] = effect;
          game[lead][attribute] += parseInt(num);
          const fanyi = { atk: "攻击", def: "防御", hp: "生命" };
          console.log(
            game[lead].name,
            fanyi[attribute],
            (num > 0 ? "增加" : "减少") + num
          );
        };
        getString(item.effect);
      } else if (item.equip) {
        debugger;
      } else {
        debugger;
      }
    } else if (item.cls === "store") {
      hero.items[id] = hero.items[id] || 0;
      hero.items[id]++;
    }
  }

  move({ x, y }) {
    const game = this.game;
    const { map, hero, mapsInfo } = game;
    const { mainLayer, config } = map;
    const block = mainLayer.find({ x, y });
    const events = config.events[[x, y]];
    const portal = config.portal[[x, y]];
    // debugger
    if (portal) {
      const [id, x, y] = portal;
      if (id === ":before") {
        const find = mapsInfo.list.findIndex((m) => m.id === map.config.id);
        game.mapChange(find - 1);
      } else if (id === ":next") {
        const find = mapsInfo.list.findIndex((m) => m.id === map.config.id);
        game.mapChange(find + 1);
      } else {
        game.mapChange(id);
        hero.set({ x, y });
      }
    }
    if (events) {
      events.forEach((event) => {
        const { type, who, act } = event;
        if (type === "eval") {
          debugger;
          act.reduce((who, s) => {
            const { opt, arg } = s;
            console.log(s, who);
            console.log(who[opt]);
            return who[opt](arg);
          }, this[who]);
        }
        console.log(delete this.map.e[[x, y]]);
      });
    } else if (block) {
      const info = block.info;
      if (info) {
        // 没有info, 比如animate, 门打开的动作等, 一个动画，播放一次
        // 没有其他钩子了，不需要
        return this.moveInfoBlock(block);
      }
    } else {
      hero.set({ x, y });
    }
  }
}
