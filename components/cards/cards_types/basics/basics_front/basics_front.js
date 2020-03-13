"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _basics_front_styles = require("./basics_front_styles");

var LocationIcon = function LocationIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M24 0C15.168.01 8.01 7.168 8 16c0 7.02 10 24.05 14.296 31.048A2 2 0 0 0 24 48a1.98 1.98 0 0 0 1.704-.954C30 40.052 40 23.028 40 16 39.99 7.168 32.832.01 24 0zm0 23a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
  }));
};

LocationIcon.defaultProps = {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_basics_front_styles.styles);

var BasicsFrontComponent = function BasicsFrontComponent(_ref) {
  var _data$currentCity, _data$currentCity2;

  var data = _ref.data;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  console.log({
    variant: variant
  });
  var classes = useStyles({
    variant: variant
  });

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isMainTypographyTruncated = _useState2[0],
      setIsMainTypographyTruncated = _useState2[1];

  var mainTypographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = mainTypographyReference.current;

    if (element.offsetHeight > element.scrollHeight - 1) {
      setIsMainTypographyTruncated(false);
    }
  }, []);
  var currentCityName = data === null || data === void 0 ? void 0 : (_data$currentCity = data.currentCity) === null || _data$currentCity === void 0 ? void 0 : _data$currentCity.name;
  return _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement("div", {
    className: classes.texts
  }, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    component: "div",
    ref: mainTypographyReference,
    classes: {
      container: (0, _classnames.default)(classes.mainTypography, isMainTypographyTruncated && classes.truncatedMainTypography)
    }
  }, data.summary), currentCityName && _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    variant: "h4",
    component: "h3",
    classes: {
      container: classes.location
    }
  }, _react.default.createElement(LocationIcon, {
    className: classes.locationIcon
  }), data === null || data === void 0 ? void 0 : (_data$currentCity2 = data.currentCity) === null || _data$currentCity2 === void 0 ? void 0 : _data$currentCity2.name))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.front.action",
    defaultMessage: "More about me"
  }))));
};

var BasicsFront = BasicsFrontComponent;
exports.BasicsFront = BasicsFront;