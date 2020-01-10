"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCustomHorizontalScrollbar = exports.flex = void 0;
var flex = Object.freeze({
  center: Object.freeze({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
});
exports.flex = flex;

var withCustomHorizontalScrollbar = function withCustomHorizontalScrollbar() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#c1c1c1';
  return {
    '&::-webkit-scrollbar-track': {
      border: 0
    },
    '&::-webkit-scrollbar': {
      height: 5
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: color
    }
  };
};

exports.withCustomHorizontalScrollbar = withCustomHorizontalScrollbar;