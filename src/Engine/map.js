// 地图生成

import Box from "./box";

class Map {
  constructor(config, map) {
    this.map = map;

    const mapArray = this.map.map;
    this.boxes = mapArray.map((line, y) => {
      return line.map((item, x) => {
        return item ? new Box(item, { x, y }, config) : null;
      });
    });

    this.background = mapArray.map((line, y) => {
      return line.map((item, x) => {
        return {
          img: config.images.terrains,
          offsetX: 0,
          offsetY: 0,
          y,
          x,
        };
      });
    });
  }
  calc(tick) {
    this.boxes.map((line, y) => {
      return line.map((box, x) => {
        if (box) {
          if (["enemys", "animates"].includes(box.info.cls)) {
            box.offsetX = tick;
          }
        }
      });
    });
  }
}
export default Map;
