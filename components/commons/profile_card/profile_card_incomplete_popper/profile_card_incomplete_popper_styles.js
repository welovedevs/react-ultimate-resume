"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    container: {
      minWidth: 200,
      margin: [0, 0, -10, spacing * 3],
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'danger'),
      display: 'flex',
      alignItems: 'center'
    },
    arrowContainer: {
      left: [spacing * 5, '!important'],
      '& > svg': {
        '& path': {
          fill: [(0, _styles_utils.getHexFromPaletteColor)(theme, 'danger'), '!important']
        }
      }
    },
    icon: {
      height: 22,
      fill: palette.light[900],
      marginRight: spacing * 2
    }
  };
};

exports.styles = styles;