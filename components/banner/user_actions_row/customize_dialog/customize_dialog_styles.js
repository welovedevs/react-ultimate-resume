"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    paper: {
      backgroundColor: [palette.dark[50], '!important']
    },
    content: {
      display: 'flex',
      padding: [[spacing * 2, spacing * 3, 0], '!important']
    },
    actions: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    dividerContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    divider: {
      height: 0,
      width: 0,
      backgroundColor: palette.dark[100],
      margin: [0, spacing * 6]
    },
    cardsOrderer: {
      flex: 1
    }
  };
};

exports.styles = styles;