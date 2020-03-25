"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterestedByFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _interested_by_front_styles = require("./interested_by_front_styles");

var _use_card_side = require("../../../../hooks/profile_card_hooks/use_card_side");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var useStyles = (0, _reactJss.createUseStyles)(_interested_by_front_styles.styles);

var InterestedByFrontComponent = function InterestedByFrontComponent(_ref) {
  var interestedBy = _ref.data.interestedBy,
      dismissButton = _ref.dismissButton,
      handleAddButtonClick = _ref.handleAddButtonClick,
      overrideColor = _ref.overrideColor,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles({
    overrideColor: overrideColor
  });

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTypographyTruncated = _useState2[0],
      setIsTypographyTruncated = _useState2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, {
    customClasses: {
      container: (0, _classnames.default)(classes.container, customClasses.container)
    }
  }, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(Content, {
    interestedBy: interestedBy,
    setIsTypographyTruncated: setIsTypographyTruncated,
    handleAddButtonClick: handleAddButtonClick,
    overrideColor: overrideColor,
    classes: classes,
    customClasses: customClasses
  }))), isTypographyTruncated && !dismissButton && interestedBy && _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "InterestedBy.front.action",
    defaultMessage: "See all"
  }))));
};

var Content = function Content(_ref2) {
  var interestedBy = _ref2.interestedBy,
      setIsTypographyTruncated = _ref2.setIsTypographyTruncated,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      overrideColor = _ref2.overrideColor,
      classes = _ref2.classes,
      customClasses = _ref2.customClasses;
  var typographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = typographyReference.current;

    if ((element === null || element === void 0 ? void 0 : element.offsetHeight) > (element === null || element === void 0 ? void 0 : element.scrollHeight) - 1) {
      setIsTypographyTruncated(false);
    }
  }, [typographyReference.current]);

  if (!interestedBy) {
    return _react.default.createElement("div", {
      className: classes.noInterested
    }, _react.default.createElement(_ui.Typography, {
      variant: "h3",
      component: "h3",
      customClasses: {
        container: classes.noInterestedTypography
      }
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "InterestedBy.front.noInterested",
      defaultMessage: "Vous n'avez pas encore ajout\xE9 de techno qui vous int\xE9resse !"
    })), _react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.addButton
      }
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "InterestedBy.noInterested.buttonLabel",
      defaultMessage: "Ajouter"
    })));
  }

  return _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    ref: typographyReference,
    classes: {
      container: (0, _classnames.default)(classes.typography, customClasses.typography)
    },
    overrideColor: overrideColor
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "InterestedBy.front.content",
    defaultMessage: "Interested by:"
  }), _react.default.createElement("div", {
    className: classes.interestedByValue
  }, interestedBy));
};

var InterestedByFront = (0, _react.memo)(InterestedByFrontComponent);
exports.InterestedByFront = InterestedByFront;