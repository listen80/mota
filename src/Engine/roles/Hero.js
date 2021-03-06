import { getStorage, setStorage } from "../../utils/utils";
import { getBlockInfo } from "../../utils/loader";
import Block from "../base/Block";

export default class Hero extends Block {
  constructor(game, config, control) {
    if (true) {
      config = Object.assign(config, getStorage("hero"));
    }
    const {
      direction = "up",
      vx = 32,
      vy = 32,
      items = {},
      equip = {},
      lv = 1,
      money = 0,
      atk = 10,
      def = 10,
      hp = 1e3,
      hpmax = 1e5,
      exp = 0,
      follower = null,
    } = config;
    super(config);
    this.vx = vx;
    this.vy = vy;

    this.lv = lv;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.hpmax = hpmax;
    this.money = money;
    this.exp = exp;
    this.equip = equip;

    this.directionsOffseY = { down: 0, left: 1, right: 2, up: 3 };
    this.direction = direction;
    this.changeDir(direction);
    this.items = {
      yellowKey: 0,
      blueKey: 0,
      redKey: 0,
      ...items,
    };
    this.follower = follower;
    this.game = game;
    this.control = control;
    this.interval = 5;
    this.isMoving = false;
    this.step = 4;
  }

  changeDir(direction) {
    this.direction = direction;
    this.imageOffsetY = this.directionsOffseY[direction];
  }

  judgechangeDir({ x, y }) {
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
  setDist(dist) {
    this.dist = dist;
    this.isMoving = true;
    this.maxAniFrame = 4;
    this._x = (dist.x - this.x) / 8;
    this._y = (dist.y - this.y) / 8;
  }

  calc() {
    const { control, vx, vy } = this;
    if (control) {
      // console.log(control.direction);
    }
    if (this.isMoving) {
      const { x, y } = this.dist;
      // console.log(x,y )
      // debugger
      if (this.x === x && this.y === y) {
        this.isMoving = false;
        this.maxAniFrame = 0
      } else {
        this.x += this._x;
        this.y += this._y;
        // this.game.map.translate.x -= this._x;
        // this.game.map.translate.y -= this._y
      }
    }
    if (!this.isMoving && control && control.isFocus(this)) {
      const DirToArr = {
        down: { x: 0, y: vy },
        left: { x: -vx, y: 0 },
        right: { x: vx, y: 0 },
        up: { x: 0, y: -vy },
      };
      const { direction } = control;

      // console.log(direction);
      if (direction) {
        this.changeDir(direction);
        // debugger;
        const dist = this.getDist(DirToArr[direction]);
        if (this.move(dist)) {
          this.setFollower();
          this.setDist(dist);
          // 新的状态
          const { x, y, atk, def, hp, items, money, exp } = this;
          setStorage("hero", {
            x,
            y,
            direction,
            atk,
            def,
            hp,
            items,
            money,
            exp,
          });
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
    const { map, hero } = this.game;
    const { mainLayer } = map;
    const { info, x, y } = block;
    const { id, cls, trigger, need } = info;

    if (trigger === "openDoor") {
      if (hero.removeItem(need)) {
        // 开门
        block.destroy();
        this.game.sounds["door.mp3"].play();

        mainLayer.add(
          new Block({
            x,
            y,
            ...getBlockInfo({ cls: "animates", id }),
            playCount: 1,
            interval: 4,
          })
        );
      } else {
        const item = getBlockInfo({ cls: "items", id: need })
        this.game.alert([hero.name, "没有", item.name].join(""));
      }
    }
  }
  handleTerrains(block) {
    return false;
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
    const hero = this;
    const { info } = block;
    const { id } = info;
    const enemyInfo = getBlockInfo({cls: "enemys", id});
    const lessHp = hero.attack(enemyInfo);
    if (lessHp > 0) {
      block.destroy();
      hero.kill(enemyInfo);
      this.game.sounds["attack.mp3"].play();
      hero.hp = lessHp;

      this.game.alert(
        [
          "击败",
          enemyInfo.name,
          "，获得",
          enemyInfo.money,
          "金币",
          enemyInfo.experience,
          "经验",
        ].join("")
      );
      return true;
    } else {
      this.game.alert(["打不过", enemyInfo.name]);
      return false;
    }
  }

  handleItem(block) {
    const { hero } = this.game;
    const { info, x, y } = block;
    const { id } = info;

    block.destroy();
    this.game.sounds["item.mp3"].play();
    const item = getBlockInfo(info);

    this.game.alert(["获得", item.name]);
    if (item.cls === "use") {
      if (item.effect) {
        const getString = (effect) => {
          effect.split(",").forEach((effect) => {
            effect = effect.split(":");
            const [lead, attribute, num] = effect;
            game[lead][attribute] += parseInt(num);
            const fanyi = {
              atk: "攻击",
              def: "防御",
              hp: "生命",
              lv: "等级",
              exp: "经验",
              money: "金币",
            };
            console.log(
              fanyi[attribute],
              (num > 0 ? "增加" : "减少") + num
            );
          });
        };
        getString(item.effect);
        return true;
      } else if (item.equip) {
        debugger;
      } else {
        debugger;
      }
    } else if (item.cls === "store") {
      hero.items[id] = hero.items[id] || 0;
      hero.items[id]++;
      return true;
    }
  }
  setFollower() {
    const { follower, x, y, direction } = this;
    if (follower) {
      this.follower.setFollower();
      follower.setDist({ x, y });
      follower.changeDir(direction);
    }
  }
  move({ x, y }) {
    const game = this.game;
    const { map, hero, mapsInfo } = game;
    const { mainLayer, config } = map;
    const block = mainLayer.find({ x, y });
    // 如果是碰撞的，这里需要加强
    const events = config.events[[x, y]];
    const portal = config.portal[[x, y]];
    if (portal) {
      let [id, x, y] = portal;
      if (id === ":before") {
        id = mapsInfo.list.findIndex((m) => m.id === map.config.id) - 1;
      } else if (id === ":next") {
        id = mapsInfo.list.findIndex((m) => m.id === map.config.id) + 1;
      }
      game.mapChange(id);
      game.heros.forEach((hero) => hero.set({ x, y }));
    }
    if (events) {
      console.log(events);
      return false;
      const run = (event, dev) => {
        const { type, who, act } = event;
        if (dev) {
          debugger;
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
      };
      events.forEach((event) => {
        try {
          run(event);
        } catch (e) {
          console.error(e);
          console.log(event, events);
          try {
            // run(event, true);
          } catch (e) { }
        }
      });
    }
    if (block) {
      const info = block.info;
      if (info) {
        return this.moveInfoBlock(block);
      } else if (block.hero) {
        return true;
      } else {
        // 没有info, 比如animate, 门打开的动作等, 一个动画，播放一次
        // 没有其他钩子了，不需要
        return true;
      }
    } else {
      return true;
    }
  }
}
