'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rgba = require('./rgba');

var _rgba2 = _interopRequireDefault(_rgba);

var _parseColorString = require('../internalHelpers/_parseColorString');

var _parseColorString2 = _interopRequireDefault(_parseColorString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix('#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix('#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
// Correct type definition, but doesn't show up when we generate the docs.
// const mix: ((color: string, color2: string) => string) & (weight: number, color: string, color2: string) => string = (colorOrWeight, color, otherColor) => {
function mix(colorOrWeight, color, otherColor) {
  var weight = void 0;
  var colorString1 = void 0;
  var colorString2 = void 0;
  if (typeof colorOrWeight === 'number' && typeof otherColor === 'string') {
    weight = colorOrWeight;
    colorString1 = color;
    colorString2 = otherColor;
  } else if (typeof colorOrWeight === 'string') {
    weight = 0.5;
    colorString1 = colorOrWeight;
    colorString2 = color;
  } else {
    throw new Error('Passed invalid arguments to mix, please pass either two colors or the weight as a number and the two colors.');
  }

  var parsedColor1 = (0, _parseColorString2.default)(colorString1);
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = (0, _parseColorString2.default)(colorString2);
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  });

  // The formular is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  var alphaDelta = color1.alpha - color2.alpha;
  var x = weight * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;

  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0)
  };

  return (0, _rgba2.default)(mixedColor);
}

exports.default = mix;
module.exports = exports['default'];