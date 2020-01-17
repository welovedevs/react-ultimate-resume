"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profie_card_title_styles = require("./profie_card_title_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profie_card_title_styles.styles);

var ProfileCardTitleComponent = function ProfileCardTitleComponent(_ref) {
  var children = _ref.children,
      cardVariant = _ref.cardVariant;
  var classes = useStyles({
    cardVariant: cardVariant
  });
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h3",
    customClasses: {
      container: classes.typography
    }
  }, children));
};

var ProfileCardTitle = ProfileCardTitleComponent;
exports.ProfileCardTitle = ProfileCardTitle;