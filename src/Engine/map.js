// 地图生成

import Block from "./base/block";
import Enemy from "./roles/Enemy";
import Terrains from "./roles/Terrains";
import AnimateTerrains from "./roles/AnimateTerrains";
import Text from "./roles/Text";
import Item from "./roles/Item";
import Npc from "./roles/Npc";
import Layer from "./Layer";

const cache = {};
export default class Map {
  constructor(game, map, textMap) {
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
    if (textMap) {
      this.textLayer = new Layer({ offsetY });
      this.layers.push(this.textLayer);
    }
    const { resource } = game;
    mapArray.forEach((line, y) => {
      line.forEach((value, x) => {
        if (value) {
          const info = resource.mapMapping[value];
          if (info) {
            const { cls, id } = info;
            let Role = null;
            if (cls === "animates-terrains") {
              Role = AnimateTerrains;
            } else if (cls === "terrains") {
              Role = Terrains;
            } else if (cls === "npcs") {
              Role = Npc;
            } else if (cls === "enemys") {
              Role = Enemy;
            } else if (cls === "items") {
              Role = Item;
            } else {
              console.error("未知的地图cls");
            }
            this.mainLayer.add(
              new Role(game, {
                x,
                y,
                id,
                info,
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
            img: resource.images.terrains, // 图片用的是地形最上面一个
            y,
            x,
          })
        );
        if (textMap && typeof textMap[y][x] === "string") {
          this.textLayer.add(
            new Text(game, {
              msg: textMap[y][x],
              x,
              y,
            })
          );
        }
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
