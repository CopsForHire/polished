'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _directionalProperty = require('../helpers/directionalProperty');

var _directionalProperty2 = _interopRequireDefault(_directionalProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The padding shorthand accepts up to four values, including null to skip a value, and uses the directional-property mixin to map them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'padding-top': '12px',
 *   'padding-right': '24px',
 *   'padding-bottom': '36px',
 *   'padding-left': '48px'
 * }
 */

function padding() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return _directionalProperty2.default.apply(undefined, ['padding'].concat(values));
}
exports.default = padding;
module.exports = exports['default'];