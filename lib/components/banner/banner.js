"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _banner_styles = require("./banner_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_banner_styles.styles);

var BannerComponent = function BannerComponent() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  });
};

var Banner = BannerComponent;
exports.Banner = Banner;