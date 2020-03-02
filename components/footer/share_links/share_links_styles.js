"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      palette = theme.palette;
  return {
    container: {
      padding: [0, spacing * 10],
      position: 'relative'
    },
    smallLayoutContainer: {
      '&, & > $icons': {
        padding: 0
      }
    },
    backgroundLine: {
      height: 1,
      width: '100%',
      backgroundColor: palette.light[900],
      position: 'absolute',
      top: 'calc(50% - 1px / 2)',
      left: 0,
      opacity: 0.4
    },
    icons: {
      padding: [0, spacing * 2],
      zIndex: 2,
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary')
    },
    icon: {
      height: 26,
      width: 'unset',
      margin: [0, spacing * 2],
      fill: palette.light[900]
    },
    link: {
      display: 'flex'
    },
    button: {
      display: 'flex'
    }
  };
};

exports.styles = styles;