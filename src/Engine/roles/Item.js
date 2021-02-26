import Block from "../Base/block";

export default class Item extends Block {
  constructor({ resource }, { id, ...others }) {
    const img = resource.images.items;
    const offsetY = resource.itemMapping[id].offsetY;
    super({ img, offsetY, maxAniFrame: 0, ...others });
  }
}
