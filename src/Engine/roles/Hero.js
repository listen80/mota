import { getStorage, setStorage } from "../../utils/utils";

import Block from "../base/Block";

export default class Hero extends Block {
  constructor(game, config, control) {
    if (true) {
      config = Object.assign(
        config,
        getStorage("hero")
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
      follower = null,
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
    this.follower = follower;
    this.game = game;
    this.control = control;
    this.hero = true;
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
    const { control } = this;

    if (control && control.isFocus(this)) {
      const DirToArr = {
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
        up: { x: 0, y: -1 },
      };
      const { direction } = control;
      if (direction) {
        this.face(direction);
        // debugger;
        const dist = this.getDist(DirToArr[direction]);
        if (this.move(dist)) {
          this.setFollower();
          this.set(dist);
          // 新的状态
          const { x, y, atk, def, hp, items, money, exp } = this;
          setStorage("hero", { x, y, direction, atk, def, hp, items, money, exp });
        }
      }
    }

    Block.prototype.calc.apply(this, arguments);
  }

  moveInfoBlock(block, info) {
    const { cls, trigger } = block.info;
    if (trigger) {
      this.handleTrigger(block);
    } else {
      if (cls === "enemys") {
        return this.handleEnemys(block);
      }
      if (cls === "items") {
        return this.handleItem(block);
      }
      if (cls === "npcs") {
        return this.handleNpcs(block);
      }
      if (cls === "animate") {
        return this.handleAnimates(block);
      }
      if (cls === "terrains") {
        return this.handleTerrains(block);
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
  }
  handleTerrains(block) {
    return false
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
    const { blocksInfo, ui } = this.game;
    const hero = this;
    const { info } = block;
    const { id } = info;
    const enemyInfo = blocksInfo.enemys.list[id];
    const lessHp = hero.attack(enemyInfo);
    if (lessHp > 0) {
      block.destroy();
      hero.kill(enemyInfo);
      hero.hp = lessHp;
      const msgs = [
        [hero.name, "击败", enemyInfo.name],
        ["获得", enemyInfo.money, "金币"],
        [enemyInfo.experience, "经验"]
      ]
      ui.alert(msgs);
      // ui.alert(hero.name,);
      // ui.alert(hero.name, "获得", enemyInfo.experience, "经验");
      return true;
    } else {
      ui.alert(hero.name, "打不过", enemyInfo.name);
      return false
    }
  }

  handleItem(block) {
    const { blocksInfo, ui, hero } = this.game;
    const { info, x, y } = block;
    const { id } = info;

    block.destroy();
    const item = blocksInfo.items.list[id];
    ui.alert(hero.name, "获得", item.name);
    if (item.cls === "use") {
      if (item.effect) {
        const getString = (effect) => {
          effect.split(',').forEach((effect) => {
            effect = effect.split(":");
            const [lead, attribute, num] = effect;
            game[lead][attribute] += parseInt(num);
            const fanyi = { atk: "攻击", def: "防御", hp: "生命", lv: "等级", exp: "经验", money: "金币" };
            console.log(
              game[lead].name,
              fanyi[attribute],
              (num > 0 ? "增加" : "减少") + num
            );
          })
        };
        getString(item.effect);
        return true
      } else if (item.equip) {
        debugger;
      } else {
        debugger;
      }
    } else if (item.cls === "store") {
      hero.items[id] = hero.items[id] || 0;
      hero.items[id]++;
      return true
    }
  }
  setFollower() {
    const { follower, x, y, direction } = this;
    if (follower) {
      this.follower.setFollower()
      follower.set({ x, y });
      follower.face(direction);
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
      let [id, x, y] = portal;
      if (id === ":before") {
        id = mapsInfo.list.findIndex((m) => m.id === map.config.id) - 1;
      } else if (id === ":next") {
        id = mapsInfo.list.findIndex((m) => m.id === map.config.id) + 1;
      }
      game.mapChange(id);
      game.heros.forEach(hero => hero.set({ x, y }))
    }
    if (events) {
      const run = (event, dev) => {
        const { type, who, act } = event;
        if (dev) {
          debugger
        }
        if (type === "eval") {
          act.reduce((who, s) => {
            const { opt, arg } = s;
            console.log(s, who);
            console.log(who[opt]);
            return who[opt](arg);
          }, this[who]);
        }
        delete this.map.e[[x, y]];
      }
      events.forEach((event) => {
        try {
          run(event);
        } catch (e) {
          console.error(e)
          console.log(event, events)
          try {
            // run(event, true);
          } catch (e) { }
        }
      });
    } else if (block) {
      const info = block.info;
      if (info) {
        return this.moveInfoBlock(block);
      } else if (block.hero) {
        return true
      } else {
        // 没有info, 比如animate, 门打开的动作等, 一个动画，播放一次
        // 没有其他钩子了，不需要
        return true
      }
    } else {
      return true;
    }
  }
}
