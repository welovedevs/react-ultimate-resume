"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var MIN = 30;
var MAX = 100;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    // Offset value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    container: function container(_ref) {
      var value = _ref.value,
          color = _ref.color,
          itemsSize = _ref.itemsSize;
      return {
        height: "".concat((value - 0) * (MAX - MIN) / (MAX - 0) + MIN, "%"),
        width: Math.min(90, theme.components.cards.width * 0.7 / itemsSize),
        backgroundColor: color,
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: [spacing * 3, spacing * 2]
      };
    },
    typography: {
      transform: 'rotate(-90deg)'
    }
  };
};

exports.styles = styles;