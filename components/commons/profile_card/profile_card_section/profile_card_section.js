"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardSection = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _use_card_variant = require("../profile_card_hooks/use_card_variant");

var _profile_card_section_styles = require("./profile_card_section_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_section_styles.styles);

var ProfileCardSectionComponent = function ProfileCardSectionComponent(_ref) {
  var children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, customClasses.container)
  }, children);
};

var ProfileCardSection = ProfileCardSectionComponent;
exports.ProfileCardSection = ProfileCardSection;