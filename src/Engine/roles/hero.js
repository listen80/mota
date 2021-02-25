// 我方
import { get, set } from "../../utils";

import Block from "../base/block";

export default class Hero extends Block {
  constructor({ resource }, info) {
    const img = resource.images.hero;
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
      maxAniFrame = 4,
    } = {...resource.data.hero, ...info};

    super({ img, ...{ maxAniFrame }, ...resource.data.hero });

    this.name = name;
    this.x = x;
    this.y = y;
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
  }

  face({ direction, x, y }) {
    if (direction === undefined) {
      const down = { x: 0, y: 1, direction: "down" },
        left = { x: -1, y: 0, direction: "left" },
        right = { x: 1, y: 0, direction: "right" },
        up = { x: 0, y: -1, direction: "up" };
      const find = [down, left, right, up].find((direc) => {
        if (direc.x === x - this.x && direc.y === y - this.y) {
          return true;
        }
      });
      if (find) {
        this.offsetY = this.facesOffseY[find.direction];
        this.direction = find.direction;
      }
    } else {
      this.offsetY = this.facesOffseY[direction];
      this.direction = direction;
    }
  }

  getAttackResult(battleInfo, enemyInfo) {
    if (battleInfo.atk - enemyInfo.def <= 0) {
      return 0;
    }
    const heroNeedNum =
      Math.ceil(enemyInfo.hp / (battleInfo.atk - enemyInfo.def)) - 1;
    return battleInfo.hp - heroNeedNum * (enemyInfo.atk - battleInfo.def);
  }

  attack({ detailInfo }) {
    return this.getAttackResult(this, detailInfo);
  }
  kill({ detailInfo }) {
    const { experience, money } = detailInfo;
    this.exp += experience;
    this.money += money;
  }
}
