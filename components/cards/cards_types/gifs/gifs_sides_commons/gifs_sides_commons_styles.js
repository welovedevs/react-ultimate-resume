"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var palette = theme.palette;
  return {
    container: {
      '& > *:not($underLayerContainer)': {
        zIndex: 2
      }
    },
    underLayerContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    title: {
      position: 'relative',
      backgroundColor: 'transparent'
    },
    darkenLayer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: "rgba(".concat(palette.dark.rgbShades[900].join(', '), ", .4)"),
      zIndex: 1
    }
  };
};

exports.styles = styles;