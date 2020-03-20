"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _experiences_front_styles = require("./experiences_front_styles");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_experiences_front_styles.styles);

var ExperiencesFrontComponent = function ExperiencesFrontComponent(_ref) {
  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var classes = useStyles({
    variant: variant
  });
  var hasWork = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.work);
  }, [data]);
  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);
  var title = (0, _react.useMemo)(function () {
    var _data$work, _data$work$, _data$work3, _data$work3$, _data$work4;

    var builder = [];

    if ((_data$work = data.work) === null || _data$work === void 0 ? void 0 : (_data$work$ = _data$work[0]) === null || _data$work$ === void 0 ? void 0 : _data$work$.position) {
      var _data$work2;

      builder.push((_data$work2 = data.work) === null || _data$work2 === void 0 ? void 0 : _data$work2[0].position);
    }

    console.log({
      data: data
    });

    if ((_data$work3 = data.work) === null || _data$work3 === void 0 ? void 0 : (_data$work3$ = _data$work3[0]) === null || _data$work3$ === void 0 ? void 0 : _data$work3$.name) {
      builder.push("@".concat(data.work[0].name));
    } else if (data === null || data === void 0 ? void 0 : (_data$work4 = data.work) === null || _data$work4 === void 0 ? void 0 : _data$work4[0]) {
      builder.push('coucou');
    }

    return builder.join(' ');
  }, [data.work]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement(Content, {
    hasWork: hasWork,
    title: title,
    handleAddButtonClick: handleAddButtonClick,
    classes: classes
  }))), hasWork && _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.front.action",
    defaultMessage: "See all experiences"
  }))));
};

var Content = function Content(_ref2) {
  var hasWork = _ref2.hasWork,
      title = _ref2.title,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTypographyTruncated = _useState2[0],
      setIsTypographyTruncated = _useState2[1];

  var typographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = typographyReference.current;
    setIsTypographyTruncated(false);

    if ((element === null || element === void 0 ? void 0 : element.offsetHeight) > (element === null || element === void 0 ? void 0 : element.scrollHeight) - 1) {
      setIsTypographyTruncated(false);
    }
  }, []);

  if (hasWork) {
    return _react.default.createElement("div", {
      className: classes.textsContainer
    }, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
      ref: typographyReference,
      classes: {
        container: (0, _classnames.default)(classes.typography, isTypographyTruncated && classes.truncatedTypography)
      }
    }, title));
  }

  return _react.default.createElement("div", {
    className: classes.noWork
  }, _react.default.createElement(_ui.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: classes.noWorkTypography
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.front.noWork",
    defaultMessage: "Vous n'avez pas encore ajout\xE9 d'exp\xE9riences !"
  })), _react.default.createElement(_no_data_button.NoDataButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.addButton
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.noWork.buttonLabel",
    defaultMessage: "Ajouter une exp\xE9rience"
  })));
};

var ExperiencesFront = ExperiencesFrontComponent;
exports.ExperiencesFront = ExperiencesFront;