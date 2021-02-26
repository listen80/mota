import Block from "../Base/block";

export default class Animate extends Block {
  constructor({ resource }, { id, ...others }) {
    const img = resource.images.animates;
    const offsetY = resource.animateMapping[id];
    super({ img, offsetY, maxAniFrame: 4, ...others });
  }
}
