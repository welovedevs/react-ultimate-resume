"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    container: _objectSpread({
      paddingRight: spacing * 6,
      height: '100%',
      overflowY: 'auto'
    }, (0, _styles_utils.withCustomVerticalScrollbar)()),
    listItem: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: 0,
      margin: [spacing * 4, 0],
      position: 'relative',
      zIndex: 1400
    },
    logo: {
      width: 50,
      height: 50,
      padding: spacing * 1,
      margin: [0, spacing * 3, 0, spacing]
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    dragHandleButton: {
      display: 'flex'
    },
    dragHandle: {
      width: 32,
      height: 32
    },
    button: {
      marginLeft: spacing,
      padding: 8
    },
    divider: {
      margin: [0, spacing * 2],
      height: 50,
      width: 1,
      backgroundColor: palette.dark[50]
    },
    removeButton: {
      display: 'flex'
    },
    removeIcon: {
      fill: palette.danger[500]
    },
    textWrapper: {
      flex: 1
    },
    trash: {
      fill: theme.palette.danger[500],
      width: 24,
      height: 24
    },
    sliderValueContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: spacing
    },
    sliderValue: {
      marginRight: spacing * 2,
      width: spacing * 5,
      marginBottom: 0
    },
    slider: {
      zIndex: 1
    },
    popper: {
      zIndex: 130200
    },
    bolden: {
      fontWeight: 500
    },
    sortableHelper: {
      zIndex: [1301, '!important']
    }
  };
};

exports.styles = styles;