"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperiencesFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _experiences_front_styles = require("./experiences_front_styles");

var useStyles = (0, _reactJss.createUseStyles)(_experiences_front_styles.styles);

var ExperiencesFrontComponent = function ExperiencesFrontComponent(_ref) {
  var data = _ref.data;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var title = (0, _react.useMemo)(function () {
    var _data$work;

    if (!((_data$work = data.work) === null || _data$work === void 0 ? void 0 : _data$work[0])) {
      return null;
    }

    return "".concat(data.work[0].position, " @").concat(data.work[0].name);
  }, [data.work]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement("div", {
    className: classes.textsContainer
  }, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    classes: {
      container: classes.mainTypography
    }
  }, title)))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.front.action",
    defaultMessage: "See all experiences"
  }))));
};

var ExperiencesFront = ExperiencesFrontComponent;
exports.ExperiencesFront = ExperiencesFront;