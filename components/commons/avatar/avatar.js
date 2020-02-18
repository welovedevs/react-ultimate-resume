"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _avatar_styles = require("./avatar_styles");

var useStyles = (0, _reactJss.createUseStyles)(_avatar_styles.styles);

var AvatarComponent = function AvatarComponent(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? 'https://i.pravatar.cc/1000' : _ref$src,
      displayedName = _ref.displayedName;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("img", {
    className: classes.image,
    src: src,
    alt: displayedName
  }));
};

var Avatar = AvatarComponent;
exports.Avatar = Avatar;