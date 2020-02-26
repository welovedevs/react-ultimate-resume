"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    imagesContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: theme.miscellaneous.spacing * 2
    },
    imageWrapper: {
      width: 150,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: theme.miscellaneous.spacing,
      overflow: 'hidden',
      cursor: 'pointer'
    },
    image: {
      borderRadius: 5,
      width: 130,
      height: 130,
      objectFit: 'cover',
      padding: theme.miscellaneous.spacing
    }
  };
};

exports.styles = styles;