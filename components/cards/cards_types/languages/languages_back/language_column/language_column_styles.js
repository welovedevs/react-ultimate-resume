"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var MIN = 30;
var MAX = 100;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  return {
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
    },
    columnsContainer: (0, _defineProperty2.default)({}, QUERY_SMALL, {
      paddingTop: theme.miscellaneous.spacing * 2
    })
  };
};

exports.styles = styles;