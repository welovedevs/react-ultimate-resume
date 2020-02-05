"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    currentCities: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    column: {
      flexDirection: 'column'
    },
    othersCheckbox: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

exports.styles = styles;