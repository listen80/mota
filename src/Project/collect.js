

window.main = window.main || {};
window.main.floors = window.main.floors || {};
const floorscontext = require.context("Project/floors", false, /\.js$/);

const floors = window.main.floors || {};

floorscontext.keys().forEach((key) => {
  floorscontext(key);
});

Object.keys(floors).forEach((floor,index) => floors[index] = floor)
// console.log(floorscontext.keys().join());

export { floors };
