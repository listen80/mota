// 界面渲染
export default class Layer {
  constructor({ translate = null, offsetX = 0 } = {}) {
    this.translate = translate;
    this.offsetX = offsetX;

    this.blocks = [];
  }

  remove(block) {
    this.blocks.splice(this.blocks.indexOf(block), 1);
  }

  add(block) {
    this.blocks.push(block);
  }

  find({ x, y }) {
    return this.blocks.find((block) => block.y === y && block.x === x);
  }

  nextFrame(ui) {
    const { blocks } = this;
    let len = blocks.length;
    while (len--) {
      const block = blocks[len];
      if (block.calc) {
        block.calc();
        if (block.died) {
          blocks.splice(len, 1);
          continue;
        }
        block.draw(ui);
      }
    }
  }
}
