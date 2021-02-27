export const loadImage = (src) => {
  return new Promise(function (resolve, reject) {
    try {
      var name = src;
      var image = new Image();
      image.onload = function () {
        resolve(image);
      };
      image.src = src;
    } catch (e) {
      reject(null);
    }
  });
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

export const loadJSON = function (url) {
  return new Promise((resolve, reject) => {
    http(
      url,
      (res) => {
        try {
          resolve(JSON.parse(res.replace(/^\s*[.\w]+=/, "")));
        } catch (e) {
          console.error(url);
          reject(null);
        }
      },
      "get"
    );
  });
};

export function setStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
}

export function deepFreeze(o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (
      o.hasOwnProperty(prop) &&
      o[prop] !== null &&
      (typeof o[prop] === "object" || typeof o[prop] === "function") &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });

  return o;
}
