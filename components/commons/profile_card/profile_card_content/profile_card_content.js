"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _use_card_variant = require("../../../hooks/profile_card_hooks/use_card_variant");

var _profile_card_content_styles = require("./profile_card_content_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_content_styles.styles);

var ProfileCardContentComponent = function ProfileCardContentComponent(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      style = _ref.style,
      children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  return (/*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(classes.container, customClasses.container)
    }, {
      style: style
    }), children)
  );
};

var ProfileCardContent = ProfileCardContentComponent;
exports.ProfileCardContent = ProfileCardContent;