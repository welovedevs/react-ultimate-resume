"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCardFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _front_content_styles = _interopRequireDefault(require("./front_content_styles"));

var _reactJss = require("react-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_front_content_styles.default);

var BasicCardFront = function BasicCardFront(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  var currentPosition = data.currentPosition,
      currentCity = data.currentCity;
  return _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Front.MainPhrase",
    defaultMessage: '{currentPosition} based in {currentCity}',
    values: {
      currentCity: currentCity,
      currentPosition: currentPosition
    }
  }));
};

exports.BasicCardFront = BasicCardFront;