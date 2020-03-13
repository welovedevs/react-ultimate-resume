"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByFront = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _interested_by_front_styles = require("./interested_by_front_styles");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var useStyles = (0, _reactJss.createUseStyles)(_interested_by_front_styles.styles);

var InterestedByFrontComponent = function InterestedByFrontComponent(_ref) {
  var interestedBy = _ref.data.interestedBy,
      profileCardFrontTypographyProps = _ref.profileCardFrontTypographyProps,
      dismissButton = _ref.dismissButton,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTypographyTruncated = _useState2[0],
      setIsTypographyTruncated = _useState2[1];

  var typographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = typographyReference.current;

    if (element.offsetHeight > element.scrollHeight - 1) {
      setIsTypographyTruncated(false);
    }
  }, [typographyReference.current]);
  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, {
    customClasses: {
      container: (0, _classnames.default)(classes.container, customClasses.container)
    }
  }, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, (0, _extends2.default)({
    ref: typographyReference,
    classes: {
      container: (0, _classnames.default)(classes.typography, customClasses.typography)
    }
  }, profileCardFrontTypographyProps), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "InterestedBy.front.content",
    defaultMessage: "I'm interested by {interestedBy}",
    values: {
      interestedBy: interestedBy
    }
  })))), isTypographyTruncated && !dismissButton && _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "InterestedBy.front.action",
    defaultMessage: "See all"
  }))));
};

var InterestedByFront = InterestedByFrontComponent;
exports.InterestedByFront = InterestedByFront;