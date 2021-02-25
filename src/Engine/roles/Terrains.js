// 我方
import Block from "../base/block";

export default class Terrains extends Block {
  constructor({ resource }, { id, ...others }) {
    const img = resource.images.terrains;
    const offsetY = resource.terrainsMapping[id];
    super({ img, offsetY, maxAniFrame: 0, ...others });
  }
}
