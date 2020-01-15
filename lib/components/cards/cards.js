"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _basics = require("./cards_types/basics/basics");

var _cards_styles = require("./cards_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_cards_styles.styles);

var CardsComponent = function CardsComponent() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_basics.BasicsCard, {
    variant: 4
  }), _react.default.createElement(_basics.BasicsCard, {
    variant: 3
  }));
};

var Cards = CardsComponent;
exports.Cards = Cards;