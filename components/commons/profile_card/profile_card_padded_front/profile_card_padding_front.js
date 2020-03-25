"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardPaddedFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _profile_card_padded_front_styles = require("./profile_card_padded_front_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_padded_front_styles.styles);

var ProfileCardPaddedFrontComponent = function ProfileCardPaddedFrontComponent(_ref) {
  var children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, customClasses.container)
  }, children);
};

var ProfileCardPaddedFront = ProfileCardPaddedFrontComponent;
exports.ProfileCardPaddedFront = ProfileCardPaddedFront;