import Block from "../base/block";

export default class Npc extends Block {
  constructor({ resource }, { id, ...others }) {
    const img = resource.images.npcs;
    const offsetY = resource.npcMapping[id];
    super({ img, offsetY, maxAniFrame: 2, ...others });
  }
}
