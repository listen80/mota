export const loadImage = (src, callback) => {
  try {
    var name = src;
    if (name.indexOf(".") < 0) name = name + ".png";
    var image = new Image();
    image.onload = function() {
      callback(image);
    };
    image.src = src;
  } catch (e) {
    main.log(e);
  }
};

export const loadImages = (list, callback) => {
  let i = 0;
  const imageList = list.slice();
  list.forEach((src, index) => {
    loadImage(src, img => {
      i++;
      imageList[index] = img;
      if (i === list.length) {
        callback(imageList);
      }
    });
  });
};
