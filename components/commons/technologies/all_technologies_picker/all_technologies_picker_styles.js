"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    textField: {
      minHeight: 'fit-content',
      minWidth: 400,
      marginBottom: spacing * 3
    },
    technologiesList: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -(spacing * 2)
    },
    technologyItem: {
      width: 80,
      maxWidth: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: [spacing, spacing * 2],
      padding: spacing
    },
    technologyImageContainer: {
      position: 'relative',
      width: '100%',
      minWidth: 80,
      height: 80,
      padding: spacing * 1.5,
      marginBottom: spacing * 2,
      overflow: 'hidden'
    },
    technologyImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    typography: {
      width: '100%',
      maxWidth: 80,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    },
    selectedTechnologyLayer: _objectSpread({
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary'),
      color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getContrastDefaultColorFromPaletteColor)(theme, 'primary')),
      textAlign: 'center'
    }, center)
  };
};

exports.styles = styles;