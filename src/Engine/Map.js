// 地图生成

import Block from "./base/Block";
import Text from "./roles/Text";
import Layer from "./Layer";
import { getBlockInfo } from "../utils/loader";

const cache = {};
export default class Map {
  constructor(game, map) {
    const { map: mapArray, offsetX = 0, offsetY = 0, rotate = 0, id, height, width } = map;
    if (id) {
      if (cache[id]) {
        return cache[id];
      }
      cache[id] = this;
    }
    this.backLayer = new Layer();
    this.mainLayer = new Layer();
    this.herosLayer = new Layer();
    this.topLayer = new Layer();
    this.config = map;
    this.children = [
      this.backLayer,
      this.mainLayer,
      this.herosLayer,
      this.topLayer,
    ];
    this.tick = 1;
    const { mapsInfo, childrenInfo } = game;
    mapArray.forEach((line, y) => {
      line.forEach((value, x) => {
        if (value) {
          const info = mapsInfo.mapMapping[value];
          if (info) {
            this.createBlock(info, { x, y });
          } else {
            console.error("未知的地图元素", "映射ID为", value);
          }
        } else {
          // 空地，显示背景
        }
        this.backLayer.add(
          new Block({
            ...getBlockInfo({cls: "terrains", id: 0}),
            y: y * 32,
            x: x * 32,
          })
        );
      });
    });
    this.offsetX = offsetX * 32;
    this.offsetY = offsetY * 32;
    this.translate = { x: 0, y: 0 };
    // this.rotate = (rotate * Math.PI) / 2;
    // this.scale = { scaleX: 0.5, scaleY: 0.5, x: 272, y: 208 };
    // this.rotate = { angle: Math.PI * 0, x: 272, y: 208 };
    // this.rotate = Math.PI * .1
  }
  calc() {
    this.tick++;
    // this.translate.x++
    // this.rotate.angle += 0.01;
    // this.scale.scaleX = 1 * Math.sin(this.tick / 50) + 1;
    // this.scale.scaleY = 1 * Math.sin(this.tick / 50) + 1;
  }
  createBlock(info, { x, y }) {
    const { cls, id } = info;
    if (cls === "text") {
      this.mainLayer.add(
        new Text(game, {
          y: y * 32,
          x: x * 32,
          info,
          msg: id,
        })
      );
    } else {
      const blockInfo = getBlockInfo(info);
      const { img, imageOffsetY = 0, maxAniFrame = 0 } = blockInfo;
      this.mainLayer.add(
        new Block({
          img, // 动画
          imageOffsetY, // 动画
          maxAniFrame, // 动画
          x: x * 32, // 坐标
          y: y * 32, // 坐标
          info, // 游戏相关
        })
      );
    }
  }
  restoreHeroLayer() {
    this.herosLayer.removeAll();
  }
  add(block) {
    this.herosLayer.add(block);
  }
  get(...some) {
    return this.mainLayer.find(...some);
  }
}
