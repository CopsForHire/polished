'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hslToRgb = require('./_hslToRgb');

var _hslToRgb2 = _interopRequireDefault(_hslToRgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexRegex = /^#[a-fA-F0-9]{6}$/;

var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/;
var rgbaRegex = /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?([-+]?[0-9]*[.]?[0-9]+)\)$/;
var hslRegex = /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/;
var hslaRegex = /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?([-+]?[0-9]*[.]?[0-9]+)\)$/;

function parseColorString(value) {
  if (value.match(hexRegex)) {
    return {
      red: parseInt('' + value[1] + value[2], 16),
      green: parseInt('' + value[3] + value[4], 16),
      blue: parseInt('' + value[5] + value[6], 16)
    };
  }
  if (value.match(reducedHexRegex)) {
    return {
      red: parseInt('' + value[1] + value[1], 16),
      green: parseInt('' + value[2] + value[2], 16),
      blue: parseInt('' + value[3] + value[3], 16)
    };
  }
  var rgbMatched = rgbRegex.exec(value);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10)
    };
  }
  var rgbaMatched = rgbaRegex.exec(value);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4], 10)
    };
  }
  var hslMatched = hslRegex.exec(value);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + (0, _hslToRgb2.default)(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10)
    };
  }
  var hslaMatched = hslaRegex.exec(value);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString = 'rgb(' + (0, _hslToRgb2.default)(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4], 10)
    };
  }
  throw new Error('Couldn\'t parse the color string. Please provide the color in hex, rgb, rgba, hsl or hsla notation as a string.');
}

exports.default = parseColorString;
module.exports = exports['default'];