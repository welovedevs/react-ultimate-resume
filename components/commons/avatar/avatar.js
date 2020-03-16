"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _avatar_styles = require("./avatar_styles");

var _use_additional_nodes = require("../../hooks/use_additional_nodes");

var useStyles = (0, _reactJss.createUseStyles)(_avatar_styles.styles);

var AvatarComponent = function AvatarComponent(_ref) {
  var _ref$src = _ref.src,
      src = _ref$src === void 0 ? 'https://i.pravatar.cc/1000' : _ref$src,
      displayedName = _ref.displayedName;
  var classes = useStyles();

  var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('banner.avatar', null),
      _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
      nodes = _useAdditionalNodes2[0];

  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("img", {
    className: classes.image,
    src: src,
    alt: displayedName
  }), nodes);
};

var Avatar = AvatarComponent;
exports.Avatar = Avatar;