"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    currentCities: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    deleteIcon: {
      fill: theme.palette.danger[500],
      width: 24,
      height: 24,
      marginRight: theme.miscellaneous.spacing,
      cursor: 'pointer'
    },
    flexColumn: {
      flexDirection: 'column'
    },
    othersCheckbox: {
      display: 'flex',
      alignItems: 'center'
    }
  };
};

exports.styles = styles;