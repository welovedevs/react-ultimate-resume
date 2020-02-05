"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    textField: {
      margin: [spacing * 2, 0, 0, spacing]
    },
    checkboxGroup: {
      marginLeft: -spacing
    },
    checkboxField: {
      margin: spacing
    }
  };
};

exports.styles = styles;