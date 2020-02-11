"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    title: {
      padding: theme.miscellaneous.spacing
    },
    cardsContainer: {
      width: (150 + 2 * theme.miscellaneous.spacing) * 3,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    sortableHelper: {
      zIndex: 1400,
      width: 150,
      height: 150
    }
  };
};

exports.styles = styles;