// 界面渲染
export default class Layer {
  constructor({ offsetX = 0 } = {}) {
    this.offsetX = offsetX;
    this.children = [];
  }

  remove(block) {
    this.children.splice(this.children.indexOf(block), 1);
  }
  removeAll() {
    this.children.splice(0, this.children.length);
  }
  add(block) {
    this.children.push(block);
  }
  find({ x, y }) {
    return this.children.find((block) => !block.died && block.y === y && block.x === x);
  }
}

const arr = new Array(100).fill(0).map((v,i) => i)