"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_styles = require("./profile_card_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_styles.styles);

var ProfileCardComponent = function ProfileCardComponent(_ref) {
  var data = _ref.data,
      FrontComponent = _ref.front,
      BackComponent = _ref.back,
      flipped = _ref.flipped,
      moreText = _ref.moreText,
      variant = _ref.variant;
  var classes = useStyles({
    variant: variant
  });
  return _react.default.createElement(_ui.Card, {
    customClasses: {
      container: classes.container
    },
    elevation: 1
  }, !flipped && _react.default.createElement(FrontComponent, {
    data: data,
    variant: variant
  }), flipped && _react.default.createElement(BackComponent, {
    data: data
  }), moreText);
};

var ProfileCard = ProfileCardComponent;
exports.ProfileCard = ProfileCard;