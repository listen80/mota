// 地图生成

import Block from "./roles/block";

const cache = {};
class Map {
  constructor(game, floor) {
    const { floorId } = floor;

    if (cache[floorId]) {
      return cache[floorId];
    }
    cache[floorId] = this;

    this.mainLayer = [];
    this.backLayer = [];

    floor.map.forEach((line, y) => {
      line.forEach((value, x) => {
        if (value) {
          const info = game.maps[value];
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
            this.mainLayer.push(
              new Block({
                x,
                y,
                info,
                img: game.images[cls],
                offsetY: game.icons[cls][id],
                maxAniFrame: keyFrames[cls],
              })
            );
          } else {
            console.error("未知的地图元素");
          }
        } else {
          // 空地，只有背景
        }
        this.backLayer.push(
          new Block({
            img: game.images.terrains,
            y,
            x,
          })
        );
      });
    });
  }
}
export default Map;
