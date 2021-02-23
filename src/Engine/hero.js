import Box from "./box";

import { set } from "./utils";

class Hero extends Box {
  constructor(game, { x, y, img, offsetY = 0, offsetX = 0, height, width }) {
    super(game, { x, y, img, offsetY, offsetX, height, width });

    this.game = game;
    this.baseX = 0;
    this.baseY = -1;
    this.hero = true;
    this.battleInfo = {
      atk: 10,
      def: 10,
      hp: 1000,
    };
    this.keys = {
      yellowKey: 0,
      blueKey: 0,
      redKey: 0,
    };
  }

  calc({ tick4 }) {
    this.offsetX = tick4;
  }
  face({ offsetY, x, y }) {
    if (offsetY === undefined) {
      const Down = { x: 0, y: 1, offsetY: 0 },
        Left = { x: -1, y: 0, offsetY: 1 },
        Right = { x: 1, y: 0, offsetY: 2 },
        Up = { x: 0, y: -1, offsetY: 3 };
      const find = [Down, Left, Right, Up].find((direc) => {
        if (direc.x === x - this.x && direc.y === y - this.y) {
          return true;
        }
      });
      if (find) {
        this.offsetY = find.offsetY;
      }
    } else {
      this.offsetY = offsetY;
    }
  }
  set({ x, y }) {
    set("hero", { x, y });

    return Box.prototype.set.apply(this, arguments);
  }
  getAttackResult(enemyInfo) {
    enemyInfo = Object.assign({}, enemyInfo);
    const battleInfo = this.battleInfo;
    if (battleInfo.atk - enemyInfo.def <= 0) {
      return 0;
    }
    const heroNeedNum =
      Math.ceil(enemyInfo.hp / (battleInfo.atk - enemyInfo.def)) - 1;
    return battleInfo.hp - heroNeedNum * (enemyInfo.atk - battleInfo.def);
  }
  attack(enemy) {
    const enemyInfo = this.game.enemys[enemy.info.id];
    const lessHp = this.getAttackResult(enemyInfo);
    return lessHp;
  }
}
export default Hero;
