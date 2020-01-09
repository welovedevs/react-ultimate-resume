"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    grid: {
      display: 'flex',
      '&, & *': {
        fontFamily: [theme.font, 'Roboto', 'open sans', 'Arial']
      }
    }
  };
};

exports.default = _default;