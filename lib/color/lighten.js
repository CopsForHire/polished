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

var _guard = require('../internalHelpers/_guard');

var _guard2 = _interopRequireDefault(_guard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  // parse color string to hsl
  var hslColor = (0, _rgbToHsl2.default)((0, _parseColorString2.default)(color));
  var value = _extends({}, hslColor, {
    lightness: (0, _guard2.default)(0, 1, hslColor.lightness + amount)
  });
  return value.alpha >= 1 || value.alpha === undefined ? (0, _hslToHex2.default)(value.hue, value.saturation, value.lightness) : 'rgba(' + (0, _hslToRgb2.default)(value.hue, value.saturation, value.lightness) + ',' + value.alpha + ')';
}

exports.default = lighten;
module.exports = exports['default'];