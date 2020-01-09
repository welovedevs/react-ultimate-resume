"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    card: function card(_ref) {
      var variant = _ref.variant;
      var cardStyles = theme.cards[variant] || theme.defaultCard;
      return {
        padding: theme.spacing,
        margin: theme.spacing * 2,
        borderRadius: theme.rounding,
        width: 500,
        height: 500,
        backgroundColor: cardStyles.backgroundColor,
        color: cardStyles.color,
        boxShadow: '8px 8px 22px rgba(0,0,0,0.2)'
      };
    }
  };
};

exports.default = _default;