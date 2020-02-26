"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    divider: {
      height: 1,
      width: '100%',
      margin: [0, 0, spacing * 5, 0],
      backgroundColor: palette.dark[50]
    },
    iframeContainer: function iframeContainer(_ref) {
      var fullScreen = _ref.fullScreen,
          isMobile = _ref.isMobile;
      return _objectSpread({
        flex: 1,
        width: '100%',
        backgroundColor: palette.dark[50],
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative'
      }, center, {}, !fullScreen && !isMobile && {
        minHeight: 375
      });
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
    },
    field: {}
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    divider: {
      margin: [0, 0, spacing * 2, 0]
    },
    field: {
      margin: [0, 0, spacing * 2, 0]
    }
  });
};

exports.styles = styles;