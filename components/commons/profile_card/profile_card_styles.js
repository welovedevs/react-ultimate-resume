"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: function container(_ref) {
      var variant = _ref.variant;

      var _ref2 = theme.components.cards.variants[variant] || theme.components.cards.default,
          backgroundColor = _ref2.backgroundColor,
          color = _ref2.color;

      var palette = theme.palette;
      return {
        position: 'relative',
        margin: spacing * 2,
        borderRadius: theme.components.cards.borderRadius,
        width: 450,
        height: 450,
        backgroundColor: palette[backgroundColor][500],
        color: palette[color][500],
        overflow: 'hidden'
      };
    }
  };
};

exports.styles = styles;