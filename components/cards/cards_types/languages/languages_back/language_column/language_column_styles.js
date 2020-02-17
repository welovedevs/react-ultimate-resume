"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MIN = 30;
var MAX = 100;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return _defineProperty({
    // Offset value = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    container: function container(_ref) {
      var value = _ref.value,
          color = _ref.color,
          itemsSize = _ref.itemsSize;
      return {
        height: "".concat((value - 0) * (MAX - MIN) / (MAX - 0) + MIN, "%"),
        width: "".concat(100 / itemsSize, "%"),
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
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    columnsContainer: {
      paddingTop: theme.miscellaneous.spacing * 2
    }
  });
};

exports.styles = styles;