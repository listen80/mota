// 地图生成

import Box from "./box";
import Block from "./Block";
const cache = {};
class Map {
  constructor(game, floor) {
    const { floorId } = floor;

    if (cache[floorId]) {
      return cache[floorId];
    }
    cache[floorId] = this;
    this.floor = floor;

    const mapArray = floor.map;

    this.boxes = mapArray.map((line, y) => {
      return line.map((value, x) => {
        if (value) {
          const info = game.maps[value];
          if (info) {
            const img = game.images[info.cls];
            const offsetY = game.icons[info.cls][info.id];
            const offsetX = 0;
            return new Block(game, {
              value,
              x,
              y,
              img,
              offsetY,
              offsetX,
              info,
            });
          } else {
            debugger;
            return null;
          }
        } else {
          return null;
        }
      });
    });

    this.boxes = this.boxes.flat().filter((v) => v);

    this.background = mapArray.map((line, y) => {
      return line.map((item, x) => {
        return new Box(game, {
          img: game.images.terrains,
          offsetX: 0,
          offsetY: 0,
          y,
          x,
        });
      });
    });
    this.background = this.background.flat().filter((v) => v);
  }
  calc(tick) {
    this.boxes.map((box) => {
      // return line.map((box, x) => {
      if (box) {
        box.calc(tick);
      }
      // });
    });
  }
}
export default Map;
