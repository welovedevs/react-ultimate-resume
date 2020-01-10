"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _avatar_styles = require("./avatar_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_avatar_styles.styles);

var AvatarComponent = function AvatarComponent(_ref) {
  var _ref$imageSource = _ref.imageSource,
      imageSource = _ref$imageSource === void 0 ? 'https://i.pravatar.cc/1000' : _ref$imageSource,
      displayedName = _ref.displayedName;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("img", {
    className: classes.image,
    src: imageSource,
    alt: displayedName
  }));
};

var Avatar = AvatarComponent;
exports.Avatar = Avatar;