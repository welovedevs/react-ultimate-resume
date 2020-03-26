"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _theme$palette$light$, _theme$palette, _theme$palette$light, _theme$palette$light$2, _theme$palette2, _theme$palette2$light;

  return (0, _defineProperty2.default)({
    icon: {
      marginRight: theme.miscellaneous.spacing,
      width: 14
    },
    penIcon: {
      extend: 'icon',
      fill: (_theme$palette$light$ = theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$light = _theme$palette.light) === null || _theme$palette$light === void 0 ? void 0 : _theme$palette$light[500]) !== null && _theme$palette$light$ !== void 0 ? _theme$palette$light$ : '#fff'
    },
    checkIcon: {
      extend: 'icon',
      '& g': {
        stroke: (_theme$palette$light$2 = theme === null || theme === void 0 ? void 0 : (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 ? void 0 : (_theme$palette2$light = _theme$palette2.light) === null || _theme$palette2$light === void 0 ? void 0 : _theme$palette2$light[500]) !== null && _theme$palette$light$2 !== void 0 ? _theme$palette$light$2 : '#fff'
      }
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    penIcon: {
      marginRight: 'unset'
    },
    checkIcon: {
      marginRight: 'unset'
    }
  });
};

exports.styles = styles;