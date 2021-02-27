import { loadImage, loadJSON } from "./utils";
const baseURL = "static";
const loadResource = () => {
  return loadJSON(`${baseURL}/data.json`).then((data) => {
    // data.mapsInfo.list.forEach((r, index, arr) => {
    //   const map = r.map;
    //   map.reduceRight((map, lineArr, lineNo) => {
    //     if (lineNo === 1) {
    //       lineArr[14] = 1000
    //     }

    //     return map
    //   }, map)
    // });

    // console.log(JSON.stringify(data))
    const images = [];
    const KeyMap = {};
    Object.keys(data.blocksInfo).forEach((key) => {
      const imgSrc = data.blocksInfo[key].imgSrc;
      KeyMap[imgSrc] = null;
      data.blocksInfo[key].list.forEach((item) => {
        if (item.imgSrc) {
          KeyMap[item.imgSrc] = null;
        }
      });
    });

    return Promise.all(
      Object.keys(KeyMap).map((imgSrc) =>
        loadImage(`${baseURL}/images/${imgSrc}.png`)
      )
    ).then((images) => {
      Object.keys(KeyMap).forEach(
        (key, index) => (KeyMap[key] = images[index])
      );
      Object.keys(data.blocksInfo).forEach((key, resIndex) => {
        const top = data.blocksInfo[key];

        for (let x in top.list) {
          let res = top.list[x];
          top.list[res.id] = res;
          res.img = KeyMap[res.imgSrc || top.imgSrc];
          const { offsetY, maxAniFrame } = top;
          if (res.offsetY === undefined) {
            res.offsetY = top.offsetY
          }
          if (res.maxAniFrame === undefined) {
            res.maxAniFrame = top.maxAniFrame
          }
        }
      });
      return data;
    });
  });
};

export default loadResource;
