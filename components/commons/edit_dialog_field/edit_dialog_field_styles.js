"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      margin: [spacing * 5, 0],
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      }
    },
    title: {
      fontWeight: 500
    },
    subtitle: {
      margin: [spacing, 0, spacing * 2]
    },
    componentErrorContainer: {
      marginTop: spacing * 2
    },
    component: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

exports.styles = styles;