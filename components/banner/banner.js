"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _banner_styles = require("./banner_styles");

var _user_informations = require("./user_actions_row/user_informations/user_informations");

var _social_actions = require("./user_actions_row/social_actions/social_actions");

var _customize_button = require("./user_actions_row/customize_button/customize_button");

var useStyles = (0, _reactJss.createUseStyles)(_banner_styles.styles);

var BannerComponent = function BannerComponent(_ref) {
  var _theme$components, _theme$components$ban;

  var children = _ref.children,
      customizationOptions = _ref.customizationOptions;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.overlay
  }), _react.default.createElement("img", {
    className: classes.image,
    src: theme === null || theme === void 0 ? void 0 : (_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : (_theme$components$ban = _theme$components.banner) === null || _theme$components$ban === void 0 ? void 0 : _theme$components$ban.imageSource,
    alt: "Banner"
  }), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_user_informations.UserInformations, null), _react.default.createElement(_social_actions.SocialActions, null, children, _react.default.createElement(_customize_button.CustomizeButton, {
    customizationOptions: customizationOptions
  }))));
};

var Banner = BannerComponent;
exports.Banner = Banner;