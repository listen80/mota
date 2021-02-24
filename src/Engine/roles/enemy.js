// 我方
import Block from "./block";

export default class Enemy extends Block {
  constructor({ ...others }) {
    super({ maxAniFrame: 2, ...others });
    this.game = game;
  }
}
