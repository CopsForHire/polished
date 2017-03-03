'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseColorString = require('../internalHelpers/_parseColorString');

var _parseColorString2 = _interopRequireDefault(_parseColorString);

var _rgbToHsl = require('../internalHelpers/_rgbToHsl');

var _rgbToHsl2 = _interopRequireDefault(_rgbToHsl);

var _hslToHex = require('../internalHelpers/_hslToHex');

var _hslToHex2 = _interopRequireDefault(_hslToHex);

var _hslToRgb = require('../internalHelpers/_hslToRgb');

var _hslToRgb2 = _interopRequireDefault(_hslToRgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue('#448'),
 *   background: adjustHue('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue('#448')};
 *   background: ${adjustHue('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#5b4488";
 *   background: "rgba(136,100,205,0.7)";
 * }
 */
function adjustHue(degree, color) {
  // parse color string to hsl
  var hslColor = (0, _rgbToHsl2.default)((0, _parseColorString2.default)(color));
  var value = _extends({}, hslColor, {
    hue: (hslColor.hue + degree) % 360
  });
  return value.alpha >= 1 || value.alpha === undefined ? (0, _hslToHex2.default)(value.hue, value.saturation, value.lightness) : 'rgba(' + (0, _hslToRgb2.default)(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
}

exports.default = adjustHue;
module.exports = exports['default'];