'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rgba = require('./rgba');

var _rgba2 = _interopRequireDefault(_rgba);

var _parseColorString = require('../internalHelpers/_parseColorString');

var _parseColorString2 = _interopRequireDefault(_parseColorString);

var _guard = require('../internalHelpers/_guard');

var _guard2 = _interopRequireDefault(_guard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, '#fff');
 *   background: opacify(0.2, 'hsl(0, 0%, 100%)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, '#fff')};
 *   background: ${opacify(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = (0, _parseColorString2.default)(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: (0, _guard2.default)(0, 1, alpha + amount)
  });
  return (0, _rgba2.default)(colorWithAlpha);
}

exports.default = opacify;
module.exports = exports['default'];