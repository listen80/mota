// 地图生成

import Block from "./Base/Block";
import Text from "./Roles/Text";
import Layer from "./Layer";

const cache = {};
export default class Map {
  constructor(game, map) {
    const { map: mapArray, offsetX = 0, offsetY = 0, rotate = 0, id } = map;
    if (id) {
      if (cache[id]) {
        return cache[id];
      }
      cache[id] = this;
    }
    this.backLayer = new Layer({ offsetX });
    this.mainLayer = new Layer({ offsetX });
    this.topLayer = new Layer({ offsetX });
    this.config = map;
    this.layers = [this.backLayer, this.mainLayer, this.topLayer];
    const { mapsInfo, blocksInfo } = game;
    mapArray.forEach((line, y) => {
      line.forEach((value, x) => {
        if (value) {
          const info = mapsInfo.mapMapping[value];
          if (info) {
            const { cls, id } = info;
            if (cls === "text") {
              this.mainLayer.add(
                new Text(game, {
                  y,
                  x,
                  info,
                  msg: id,
                })
              );
            } else {
              const { img, offsetY = 0, maxAniFrame = 0 } = blocksInfo[
                cls
              ].list[id];
              this.mainLayer.add(
                new Block({
                  img, // 动画
                  offsetY, // 动画
                  maxAniFrame, // 动画
                  x, // 坐标
                  y, // 坐标
                  info, // 游戏相关
                })
              );
            }
          } else {
            console.error("未知的地图元素", "映射ID为", value);
          }
        } else {
          // 空地，显示背景
        }
        this.backLayer.add(
          new Block({
            img: blocksInfo.terrains.list.ground.img, // 图片用的是地形最上面一个
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
  get(...some) {
    return this.mainLayer.find(...some);
  }
}
