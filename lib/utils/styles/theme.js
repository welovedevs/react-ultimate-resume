"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildTheme = void 0;

var buildTheme = function buildTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    palette: []
  };
  return {
    spacing: 8,
    rounding: 10,
    defaultCard: {
      backgroundColor: '#efefef',
      color: 'black'
    },
    cards: [{
      backgroundColor: userTheme.palette[0] || '#F7F05C',
      color: userTheme.palette[1] || '#1F0A9F'
    }]
  };
};

exports.buildTheme = buildTheme;