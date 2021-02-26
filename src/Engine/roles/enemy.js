import Block from "../Base/block";

export default class Enemy extends Block {
  constructor({ hero, resource }, { id, ...others }) {
    const img = resource.images.enemys;
    const offsetY = resource.enemyMapping[id].offsetY;
    super({ img, offsetY, maxAniFrame: 2, ...others });

    this.detailInfo = resource.enemyMapping[id];
    this.hero = hero;
  }
  calc() {
    const lessHp = this.hero.attack(this);
    Block.prototype.calc.apply(this, arguments);
  }
}
