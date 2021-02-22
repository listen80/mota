export const loadAll = (fn, list, callback) => {
  let i = 0;
  const imageList = list.slice();
  list.forEach((src, index) => {
    fn(src, (img) => {
      i++;
      imageList[index] = img;
      if (i === list.length) {
        callback(imageList);
      }
    });
  });
};

export const loadImage = (src, callback) => {
  try {
    var name = src;
    if (name.indexOf(".") < 0) name = name + ".png";
    var image = new Image();
    image.onload = function () {
      callback(image);
    };
    image.src = src;
  } catch (e) {
    main.log(e);
  }
};

export function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName_r("head")[0].appendChild(script);
}

export const http = function (
  url,
  success,
  type,
  formData,
  error,
  mimeType,
  responseType
) {
  var xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  if (mimeType) xhr.overrideMimeType(mimeType);
  if (responseType) xhr.responseType = responseType;
  xhr.onload = function (e) {
    if (xhr.status == 200) {
      if (success) success(xhr.response);
    } else {
      if (error) error("HTTP " + xhr.status);
    }
  };
  xhr.onabort = function () {
    if (error) error("Abort");
  };
  xhr.ontimeout = function () {
    if (error) error("Timeout");
  };
  xhr.onerror = function () {
    if (error) error("Error on Connection");
  };
  if (formData) xhr.send(formData);
  else xhr.send();
};

export const loadJSON = function (url, success, type) {
  http(
    url,
    (res) => {
      try {
        success(JSON.parse(res.replace(/.+=/, "")));
      } catch (e) {
        console.info(res.replace(/.+=/, ""));
      }
    },
    "get"
  );
};
export function loadText(url, callback) {}
