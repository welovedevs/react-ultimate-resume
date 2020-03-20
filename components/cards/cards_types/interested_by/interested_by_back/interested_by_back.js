"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByBack = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _interested_by_front = require("../interested_by_front/interested_by_front");

var _interested_by_back_styles = require("./interested_by_back_styles");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var useStyles = (0, _reactJss.createUseStyles)(_interested_by_back_styles.styles);

var InterestedByBackComponent = function InterestedByBackComponent(props) {
  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var theme = (0, _reactJss.useTheme)();
  var overrideColor = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor;
  }, [theme, variant]);
  return _react.default.createElement(_interested_by_front.InterestedByFront, (0, _extends2.default)({
    customClasses: {
      container: classes.container,
      typography: classes.typography
    },
    overrideColor: overrideColor,
    dismissButton: true
  }, props));
};

var InterestedByBack = (0, _react.memo)(InterestedByBackComponent);
exports.InterestedByBack = InterestedByBack;