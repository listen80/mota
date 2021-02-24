// 模仿三国志曹操传 运气 敏姐 带兵
// 物品 使用 放背包

import { loadImage, loadJSON, get, set } from "./utils";

const dataList = [
  "data", // 地图
  "mapMapping",
  "enemyMapping",
  "itemMapping",
  "npcMapping",
  "animateMapping",
  "iconMapping",
];

const getAll = (context) => {
  return Promise.all(dataList.map((file) => loadJSON(`static/${file}.json`)))
    .then((dataArr) => {
      dataList.forEach((key, i) => (context[key] = dataArr[i]));
      return context;
    })
    .then((context) => {
      const imageList = [
        "enemys",
        "hero",
        "items",
        "npcs",
        "terrains",
        "animates",
      ];

      const P1 = Promise.all(
        imageList.map((image) => loadImage(`static/images/${image}.png`))
      ).then((images) => {
        context.images = images;
        imageList.forEach((key, i) => (images[key] = images[i]));
      });

      const P2 = Promise.all(
        context.data.main.floorIds.map((floor) =>
          loadJSON(`static/maps/${floor}.js`)
        )
      ).then((maps) => {
        context.maps = maps;
        context.data.maps.forEach((key, i) => (maps[key] = maps[i]));
      });
      return Promise.all([P1, P2]);
    });
};

export default getAll;
