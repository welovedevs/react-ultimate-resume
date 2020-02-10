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
      width: ['100%', '!important'],
      maxWidth: ['unset', '!important'],
      backgroundColor: [palette.light[800], '!important']
    },
    content: {
      padding: [[spacing, spacing * 3, 0], '!important']
    },
    actions: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  };
};

exports.styles = styles;