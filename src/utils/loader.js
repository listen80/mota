import { loadImage, loadJSON } from "./utils";
const baseURL = "static";
const loadResource = () => {
  return loadJSON(`${baseURL}/data.json`).then((data) => {
    // data.mapsInfo.list.forEach((r, index, arr) => {
    //   const changeFloor = r.changeFloor;
    //   Object.entries(changeFloor).forEach(([key, values]) => {
    //     const { floorId: id } = values;

    //     if (id === ":next") {
    //       // changeFloor[key] = [arr[index+1].id, ...r["upFloor"]];
    //       const before = arr[index + 1];
    //       console.log(before.id, before.upFloor);
    //       changeFloor[key] = [before.id, ...before.downFloor];
    //     } else if (id === ":before") {
    //       // debugger
    //       const before = arr[index - 1];
    //       console.log(before.id, before.upFloor);
    //       changeFloor[key] = [before.id, ...before.upFloor];
    //     } else {
    //       changeFloor[key] = [id, 0, 0];
    //     }
    //   });
    //   delete r.changeFloor;
    //   r.portal = changeFloor;
    // });

    // console.log(JSON.stringify(data))
    return Promise.all(
      Object.keys(data.blocksInfo).map((key) => {
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
            res.maxAniFrame = maxAniFrame;
          }
        }
      });
      return data;
    });
  });
};

export default loadResource;
