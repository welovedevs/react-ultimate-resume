"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    sectionText: {
      margin: [spacing * 3, 0]
    },
    details: {
      marginLeft: -(spacing * 1.5),
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    detail: {
      display: 'flex',
      alignItems: 'center',
      margin: spacing * 1.5
    },
    detailIcon: {
      height: 20,
      width: 'auto',
      marginRight: spacing * 1.5,
      '& > g': {
        stroke: 'currentColor'
      }
    },
    detailTypography: {
      fontWeight: 500
    }
  };
};

exports.styles = styles;