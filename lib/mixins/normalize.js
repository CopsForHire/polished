'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _opinionatedRules, _unopinionatedRules;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var opinionatedRules = (_opinionatedRules = {
  'html': {
    'font-family': 'sans-serif'
  },

  'body': {
    'margin': '0'
  }

}, _defineProperty(_opinionatedRules, 'a:active,\n  a:hover', {
  'outline-width': '0'
}), _defineProperty(_opinionatedRules, 'button,\n  input,\n  optgroup,\n  select,\n  textarea', {
  'font-family': 'sans-serif',
  'font-size': '100%',
  'line-height': '1.15'
}), _opinionatedRules);

var unopinionatedRules = (_unopinionatedRules = {
  'html': {
    'line-height': '1.15',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%'
  }

}, _defineProperty(_unopinionatedRules, 'article,\n  aside,\n  footer,\n  header,\n  nav,\n  section', {
  'display': 'block'
}), _defineProperty(_unopinionatedRules, 'h1', {
  'font-size': '2em',
  'margin': '0.67em 0'
}), _defineProperty(_unopinionatedRules, 'figcaption,\n  figure,\n  main', {
  'display': 'block'
}), _defineProperty(_unopinionatedRules, 'figure', {
  'margin': '1em 40px'
}), _defineProperty(_unopinionatedRules, 'hr', {
  'box-sizing': 'content-box',
  'height': '0',
  'overflow': 'visible'
}), _defineProperty(_unopinionatedRules, 'pre', {
  'font-family': 'monospace, monospace',
  'font-size': '1em'
}), _defineProperty(_unopinionatedRules, 'a', {
  'background-color': 'transparent',
  '-webkit-text-decoration-skip': 'objects'
}), _defineProperty(_unopinionatedRules, 'abbr[title]', _defineProperty({
  'border-bottom': 'none',
  'text-decoration': 'underline'
}, 'text-decoration', 'underline dotted')), _defineProperty(_unopinionatedRules, 'b,\n  strong', {
  'font-weight': 'inherit'
}), _defineProperty(_unopinionatedRules, 'code,\n  kbd,\n  samp', {
  'font-family': 'monospace, monospace',
  'font-size': '1em'
}), _defineProperty(_unopinionatedRules, 'dfn', {
  'font-style': 'italic'
}), _defineProperty(_unopinionatedRules, 'mark', {
  'background-color': '#ff0',
  'color': '#000'
}), _defineProperty(_unopinionatedRules, 'small', {
  'font-size': '80%'
}), _defineProperty(_unopinionatedRules, 'sub,\n  sup', {
  'font-size': '75%',
  'line-height': '0',
  'position': 'relative',
  'vertical-align': 'baseline'
}), _defineProperty(_unopinionatedRules, 'sub', {
  'bottom': '-0.25em'
}), _defineProperty(_unopinionatedRules, 'sup', {
  'top': '-0.5em'
}), _defineProperty(_unopinionatedRules, 'audio,\n  video', {
  'display': 'inline-block'
}), _defineProperty(_unopinionatedRules, 'audio:not([controls])', {
  'display': 'none',
  'height': '0'
}), _defineProperty(_unopinionatedRules, 'img', {
  'border-style': 'none'
}), _defineProperty(_unopinionatedRules, 'svg:not(:root)', {
  'overflow': 'hidden'
}), _defineProperty(_unopinionatedRules, 'button,\n  input,\n  optgroup,\n  select,\n  textarea', {
  'margin': '0'
}), _defineProperty(_unopinionatedRules, 'button,\n  input', {
  'overflow': 'visible'
}), _defineProperty(_unopinionatedRules, 'button,\n  select', {
  'text-transform': 'none'
}), _defineProperty(_unopinionatedRules, 'button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]', {
  '-webkit-appearance': 'button'
}), _defineProperty(_unopinionatedRules, 'button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner', {
  'border-style': 'none',
  'padding': '0'
}), _defineProperty(_unopinionatedRules, 'button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring', {
  'outline': '1px dotted ButtonText'
}), _defineProperty(_unopinionatedRules, 'fieldset', {
  'border': '1px solid #c0c0c0',
  'margin': '0 2px',
  'padding': '0.35em 0.625em 0.75em'
}), _defineProperty(_unopinionatedRules, 'legend', {
  'box-sizing': 'border-box',
  'color': 'inherit',
  'display': 'table',
  'max-width': '100%',
  'padding': '0',
  'white-space': 'normal'
}), _defineProperty(_unopinionatedRules, 'progress', {
  'display': 'inline-block',
  'vertical-align': 'baseline'
}), _defineProperty(_unopinionatedRules, 'textarea', {
  'overflow': 'auto'
}), _defineProperty(_unopinionatedRules, '[type="checkbox"],\n  [type="radio"]', {
  'box-sizing': 'border-box',
  'padding': '0'
}), _defineProperty(_unopinionatedRules, '[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button', {
  'height': 'auto'
}), _defineProperty(_unopinionatedRules, '[type="search"]', {
  '-webkit-appearance': 'textfield',
  'outline-offset': '-2px'
}), _defineProperty(_unopinionatedRules, '[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration', {
  '-webkit-appearance': 'none'
}), _defineProperty(_unopinionatedRules, '::-webkit-file-upload-button', {
  '-webkit-appearance': 'button',
  'font': 'inherit'
}), _defineProperty(_unopinionatedRules, 'details,\n  menu', {
  'display': 'block'
}), _defineProperty(_unopinionatedRules, 'summary', {
  'display': 'list-item'
}), _defineProperty(_unopinionatedRules, 'canvas', {
  'display': 'inline-block'
}), _defineProperty(_unopinionatedRules, 'template', {
  'display': 'none'
}), _defineProperty(_unopinionatedRules, '[hidden]', {
  'display': 'none'
}), _unopinionatedRules);

function mergeRules(baseRules, additionalRules) {
  var mergedRules = _extends({}, baseRules);
  Object.keys(additionalRules).forEach(function (key) {
    if (mergedRules[key]) {
      mergedRules[key] = _extends({}, mergedRules[key], additionalRules[key]);
    } else {
      mergedRules[key] = _extends({}, additionalRules[key]);
    }
  });
  return mergedRules;
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * injectGlobals`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   font-family: sans-serif,
 *   line-height: 1.15,
 *   -ms-text-size-adjust: 100%,
 *   -webkit-text-size-adjust: 100%,
 * } ...
 */

function normalize(excludeOpinionated) {
  if (excludeOpinionated) return unopinionatedRules;
  return mergeRules(unopinionatedRules, opinionatedRules);
}

exports.default = normalize;
module.exports = exports['default'];