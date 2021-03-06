import { loadImage, loadSound, loadJSON } from "./utils";

const baseURL = ".";
const loadResource = () =>
  loadJSON("data.json").then((data) =>
    Promise.all([loadImages(data), loadSounds(data)]).then(() => {
      __data = data;
      return data
    })
  );

const loadImages = (data) => {
  const KeyMap = {};
  Object.keys(data.childrenInfo).forEach((key) => {
    const imgSrc = data.childrenInfo[key].imgSrc;
    KeyMap[imgSrc] = null;
    data.childrenInfo[key].list.forEach((item) => {
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
    Object.keys(KeyMap).forEach((key, index) => (KeyMap[key] = images[index]));
    Object.keys(data.childrenInfo).forEach((key, resIndex) => {
      const top = data.childrenInfo[key];
      for (let x in top.list) {
        let res = top.list[x];
        top.list[res.id] = res;
        res.img = KeyMap[res.imgSrc || top.imgSrc];
        if (res.imageOffsetY === undefined) {
          res.imageOffsetY = top.imageOffsetY;
        }
        if (res.maxAniFrame === undefined) {
          res.maxAniFrame = top.maxAniFrame;
        }
      }
    });
    return data;
  });
};

const loadSounds = (data) => {
  const sounds = data.sounds.bgms.concat(data.sounds.sounds);
  return Promise.all(
    sounds.map((sound) => loadSound(`${baseURL}/sounds/${sound}`))
  ).then((audioes) => {
    audioes.forEach((audio, i) => (data.sounds[sounds[i]] = audio));
    return data;
  });
};

let __data = null;

export const getBlockInfo = (info) => {
  const { cls, id } = info;
  const clses = __data.childrenInfo[cls];
  return clses.list[id];
}

export default loadResource;
