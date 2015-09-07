/*eslint-disable*/
"use strict";

var compare, hexToRgb, componentToHex, rgbToHex;
compare = function (a, b) {

  if (parseFloat(a[0]) - parseFloat(b[0]) === 0) {
    return parseFloat(a[1]) - parseFloat(b[1]);
  } else {
    return parseFloat(a[0]) - parseFloat(b[0]);
  }
},
//used http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
hexToRgb = function (hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}, componentToHex = function (c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}, rgbToHex = function (r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};