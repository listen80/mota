// 我方
import Block from "./block";

class Hero extends Block {
  constructor({ game, battleInfo, keys, ...others }) {
    super({ maxAniFrame: 4, ...others });
    this.battleInfo = {
      atk: 10,
      def: 10,
      hp: 1000,
      ...battleInfo,
    };
    this.keys = {
      yellowKey: 0,
      blueKey: 0,
      redKey: 0,
      ...keys,
    };
    this.game = game;
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
