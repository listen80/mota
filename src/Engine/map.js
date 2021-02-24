// 地图生成

import Block from "./base/block";
import Layer from "./Layer";

const cache = {};
export default class Map {
  constructor({ resource }, map) {
    const { map: mapArray, offsetX = 0, offsetY = 0, rotate = 0 } = map;
    // if (floorId) {
    //   if (cache[floorId]) {
    //     return cache[floorId];
    //   }
    //   cache[floorId] = this;
    // }
    this.backLayer = new Layer({ offsetX });
    this.mainLayer = new Layer({ offsetX });
    this.topLayer = new Layer({ offsetX });

    this.layers = [this.backLayer, this.mainLayer, this.topLayer];

    mapArray.forEach((line, y) => {
      line.forEach((value, x) => {
        if (value) {
          const info = resource.mapMapping[value];
          if (info) {
            const { cls, id } = info;
            // cls
            // terrains 墙 不可达到之类
            // items 物品
            // npcs npc 有动画 2帧
            // enemys 敌人 有动画 2帧
            // animates 动画类 当然有动画 4帧
            const keyFrames = {
              enemys: 2,
              npcs: 2,
              animates: 4,
              items: 0,
              terrains: 0,
            };
            this.mainLayer.add(
              new Block({
                x,
                y,
                info,
                img: resource.images[cls],
                offsetY: resource.iconMapping[cls][id],
                maxAniFrame: keyFrames[cls],
              })
            );
          } else {
            console.error("未知的地图元素");
          }
        } else {
          // 空地，显示背景
        }
        this.backLayer.add(
          new Block({
            img: resource.images.terrains, // 用的是地形最上面一个
            y,
            x,
          })
        );
      });
    });

    this.offsetX = offsetX * 32;
    this.offsetY = offsetY * 32;
    this.rotate = (rotate * Math.PI) / 2;
  }
  nextFrame(ui) {
    const { offsetX, offsetY, rotate } = this;
    ui.rotate(rotate, () => {
      ui.translate({ offsetX, offsetY }, () => {
        this.layers.map((layer) => layer.nextFrame(ui));
      });
    });
  }
  add(block) {
    this.mainLayer.add(block);
  }
}
