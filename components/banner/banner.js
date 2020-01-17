"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _user_actions_row = require("./user_actions_row/user_actions_row");

var _banner_styles = require("./banner_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_banner_styles.styles);

var BannerComponent = function BannerComponent() {
  var _theme$components, _theme$components$ban;

  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("img", {
    className: classes.image,
    src: theme === null || theme === void 0 ? void 0 : (_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : (_theme$components$ban = _theme$components.banner) === null || _theme$components$ban === void 0 ? void 0 : _theme$components$ban.imageSource,
    alt: "Banner"
  }), _react.default.createElement("div", {
    className: classes.overlay
  }), _react.default.createElement(_user_actions_row.UserActionsRow, null));
};

var Banner = BannerComponent;
exports.Banner = Banner;