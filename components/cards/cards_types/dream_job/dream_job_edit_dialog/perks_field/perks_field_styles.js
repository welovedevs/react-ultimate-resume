"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    textField: {
      marginLeft: spacing
    },
    checkboxGroup: {
      marginLeft: -spacing
    },
    checkboxField: {
      margin: spacing
    },
    othersCheckbox: {
      display: 'flex'
    }
  };
};

exports.styles = styles;