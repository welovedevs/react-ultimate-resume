"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.miscellaneous.spacing
    },
    skillLabel: {
      width: 200,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: 15
    },
    progressBarCustomContainer: {
      height: 8,
      backgroundColor: 'transparent'
    },
    progressBarCustomBar: function progressBarCustomBar(_ref) {
      var color = _ref.color;
      return {
        color: [(0, _styles_utils.getHexFromPaletteColor)(theme, color), '!important']
      };
    }
  };
};

exports.styles = styles;