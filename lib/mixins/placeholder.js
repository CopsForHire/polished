'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * CSS to style the selection psuedo-element.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...placeholder(styles)
 * }
 *
 * // styled-components usage
 * const div = styled.input`
 *    ${placeholder(css`styles`)}
 * `
 *
 * // CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

function placeholder(styles) {
  var _ref;

  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';

  return _ref = {}, _defineProperty(_ref, parent + '::-webkit-input-placeholder', _extends({}, styles)), _defineProperty(_ref, parent + ':-moz-placeholder', _extends({}, styles)), _defineProperty(_ref, parent + '::-moz-placeholder', _extends({}, styles)), _defineProperty(_ref, parent + ':-ms-input-placeholder', _extends({}, styles)), _ref;
}

exports.default = placeholder;
module.exports = exports['default'];