import { loadImage, loadSound, loadJSON } from "./utils";
const baseURL = ".";
const loadResource = () => loadJSON("data.json").then((data) => Promise.all(loadImages(data), loadSounds(data)))

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

  Promise.all(
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
}

const loadSounds = (data) => {
  const sounds = data.sounds.bgms.concat(data.sounds.sounds)
  Promise.all(
    sounds.map((sound) =>
      loadSound(`${baseURL}/images/${sounds}.mp3`)
    )
  ).then((sounds) => {
    console.log(sounds)
    return data;
  });
}

export default loadResource;
