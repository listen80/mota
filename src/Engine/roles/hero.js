// 我方
import { get, set } from "../../utils";

import Block from "../base/block";

export default class Hero extends Block {
  constructor({
    config,
    resource,
    battleInfo,
    keys,
    x = 6,
    y = 2,
    ...others
  } = {}) {
    const position = {
      x,
      y,
      height: 33,
      img: resource.images.hero,
    };
    super({ maxAniFrame: 4, ...others, ...position });

    this.battleInfo = {
      atk: 10,
      def: 10,
      hp: 1000,
      ...battleInfo,
    };
    this.keys = {
      yellowKey: 110,
      blueKey: 111,
      redKey: 110,
      ...keys,
    };
    this.coin = 1e3;
    this.exp = 88;
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
