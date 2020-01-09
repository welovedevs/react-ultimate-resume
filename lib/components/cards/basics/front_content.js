"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCardFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicCardFront = function BasicCardFront(_ref) {
  var data = _ref.data;
  var currentPosition = data.currentPosition,
      currentCity = data.currentCity;
  return _react.default.createElement("div", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Front.MainPhrase",
    defaultMessage: '{currentPosition} based in {currentCity}',
    values: {
      currentCity: currentCity,
      currentPosition: currentPosition
    }
  }));
};

exports.BasicCardFront = BasicCardFront;