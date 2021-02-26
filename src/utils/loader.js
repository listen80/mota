import { loadImage, loadJSON } from "./utils";
const baseURL = "static";
const loadResource = () => {
  return loadJSON(`${baseURL}/data.json`).then((data) => {
    return Promise.all(
      Object.keys(data.blocksInfo).map((key, resIndex) => {
        const image = data.blocksInfo[key].imgSrc;
        const src = `${baseURL}/images/${image}.png`;
        return loadImage(src);
      })
    ).then((images) => {
      Object.keys(data.blocksInfo).map((key, resIndex) => {
        const top = data.blocksInfo[key];
        const img = images[resIndex];
        for (let x in top.list) {
          const res = top.list[x];
          res.img = img;
          top.list[res.id] = res;
          const { maxAniFrame } = top;
          if (res.maxAniFrame === undefined) {
            res.maxAniFrame = maxAniFrame
          }
        }
      });
      return data;
    });
  });
};

export default loadResource;
