// 我方
import Block from "../base/block";

export default class Animate extends Block {
  constructor({ ...others }) {
    const img = game.resource.images.animates;
    super({ img, maxAniFrame: 4, ...others });
  }
}
