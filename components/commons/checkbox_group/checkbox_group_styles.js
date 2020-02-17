"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -spacing
    },
    checkboxField: function checkboxField(_ref) {
      var _ref$rows = _ref.rows,
          rows = _ref$rows === void 0 ? 2 : _ref$rows;
      return {
        width: "calc(".concat(100 / rows, "% - ").concat(rows * 2 * spacing, "px)"),
        margin: spacing
      };
    },
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  };
};

exports.styles = styles;