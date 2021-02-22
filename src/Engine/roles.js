// const context = require.context("Project/roles", false, /\.js$/);

// const roles = {};
// context.keys().forEach((key) => {
//   const role = context(key).default;
//   const png = context(key).png;
//   const _key = key.replace("./", "").replace(/\.js$/, "");
//   roles[_key] = { role, png };
// });

// export { roles };


// const contextimage = require.context("Project/roles", false, /\.png$/);

// const images = {};
// contextimage.keys().forEach((key) => {
//   const _key = key.replace("./", "").replace(/\.js$/, "");
//   console.log(key, contextimage[key])
//   images[_key] = null;
// });
// export { images };

window.main = window.main || {};
window.main.floors = window.main.floors || {};
const floorscontext = require.context("Project/floors", false, /\.js$/);

const floors = window.main.floors || {};

floorscontext.keys().forEach((key) => {
  floorscontext(key);
});

Object.keys(floors).forEach((floor,index) => floors[index] = floor)
console.log(floorscontext.keys().join());

export { floors };
