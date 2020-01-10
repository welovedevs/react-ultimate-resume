"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(_ref) {
  var palette = _ref.palette;
  return {
    container: {
      height: 110,
      width: 110,
      borderRadius: '50%',
      backgroundColor: palette.dark[50],
      overflow: 'hidden'
    },
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }
  };
};

exports.styles = styles;