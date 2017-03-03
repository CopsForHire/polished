'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _parseColorString = require('../internalHelpers/_parseColorString');

var _parseColorString2 = _interopRequireDefault(_parseColorString);

var _rgb = require('./rgb');

var _rgb2 = _interopRequireDefault(_rgb);

var _rgba = require('./rgba');

var _rgba2 = _interopRequireDefault(_rgba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert(0.2, '#CCCD64'),
 *   background: invert(0.2, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert(0.2, '#CCCD64')};
 *   background: ${invert(0.2, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */
function invert(color) {
  // parse color string to hsl
  var value = (0, _parseColorString2.default)(color);
  var invertedColor = _extends({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  });
  return invertedColor.alpha === undefined || invertedColor.alpha >= 1 ? (0, _rgb2.default)(invertedColor) : (0, _rgba2.default)(invertedColor);
}

exports.default = invert;
module.exports = exports['default'];