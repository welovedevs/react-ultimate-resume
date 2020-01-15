"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _basics_front_styles = require("./basics_front_styles");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card_button/profile_card_button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_basics_front_styles.styles);

var BasicsFrontComponent = function BasicsFrontComponent(_ref) {
  var data = _ref.data,
      variant = _ref.variant;
  var classes = useStyles();
  var currentPosition = data.currentPosition,
      currentCity = data.currentCity;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(_ui.Typography, {
    variant: "h1",
    component: "h2",
    customClasses: {
      container: classes.title
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Front.MainPhrase",
    defaultMessage: '{currentPosition} based in {currentCity}',
    values: {
      currentCity: currentCity,
      currentPosition: currentPosition
    }
  }))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    cardVariant: variant
  }, "More about me")));
};

var BasicsFront = BasicsFrontComponent;
exports.BasicsFront = BasicsFront;