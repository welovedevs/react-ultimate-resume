"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var palette = theme.palette;
  return {
    paper: {
      width: ['100%', '!important'],
      maxWidth: ['unset', '!important'],
      backgroundColor: [palette.light[800], '!important']
    }
  };
};

exports.styles = styles;