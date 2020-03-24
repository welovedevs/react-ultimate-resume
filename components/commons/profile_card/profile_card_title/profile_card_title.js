"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardTitle = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _use_card_variant = require("../../../hooks/profile_card_hooks/use_card_variant");

var _profile_card_title_styles = require("./profile_card_title_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_title_styles.styles);

var ProfileCardTitleComponent = function ProfileCardTitleComponent(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      style = _ref.style,
      beforeTypography = _ref.beforeTypography,
      overrideColor = _ref.overrideColor,
      children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant,
    overrideColor: overrideColor
  });
  return (/*#__PURE__*/_react.default.createElement(Component, {
      className: (0, _classnames.default)(classes.container, customClasses.container),
      style: style
    }, beforeTypography, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      variant: "h2",
      component: "h3",
      customClasses: {
        container: (0, _classnames.default)(classes.typography, customClasses.typography)
      }
    }, children))
  );
};

var ProfileCardTitle = ProfileCardTitleComponent;
exports.ProfileCardTitle = ProfileCardTitle;