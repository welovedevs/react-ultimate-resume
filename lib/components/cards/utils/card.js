"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _card_styles = _interopRequireDefault(require("./card_styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_card_styles.default);

var Card = function Card(_ref) {
  var data = _ref.data,
      FrontComponent = _ref.FrontComponent,
      BackComponent = _ref.BackComponent,
      flipped = _ref.flipped,
      moreText = _ref.moreText,
      other = _objectWithoutProperties(_ref, ["data", "FrontComponent", "BackComponent", "flipped", "moreText"]);

  var classes = useStyles(other);
  return _react.default.createElement("div", {
    className: classes.card
  }, _react.default.createElement("div", null, !flipped && _react.default.createElement(FrontComponent, {
    data: data
  }), flipped && _react.default.createElement(BackComponent, {
    data: data
  })), moreText && _react.default.createElement("div", null, moreText));
};

exports.Card = Card;