"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    locationField: {
      marginBottom: spacing * 3
    },
    places: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    place: {
      transformOrigin: 'center left'
    },
    deleteIcon: {
      fill: '#fff',
      width: 24,
      height: 24,
      marginRight: spacing,
      cursor: 'pointer'
    }
  };
};

exports.styles = styles;