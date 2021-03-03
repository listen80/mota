import { loadImage, loadSound, loadJSON } from "./utils";

const baseURL = ".";
const loadResource = () =>
  loadJSON("data.json").then((data) =>
    Promise.all([loadImages(data), loadSounds(data)]).then(() => data)
  );

const loadImages = (data) => {
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
    Object.keys(KeyMap).forEach((key, index) => (KeyMap[key] = images[index]));
    Object.keys(data.blocksInfo).forEach((key, resIndex) => {
      const top = data.blocksInfo[key];
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

export default loadResource;
