"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _studies_front_styles = require("./studies_front_styles");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var SchoolLogo = function SchoolLogo(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    className: "to-stroke",
    d: "M14.167 39.167h-12.5a.834.834 0 0 1-.834-.834v-15c0-.46.374-.833.834-.833H12.5M27.5 22.5h10.833c.46 0 .834.373.834.833v15c0 .46-.374.834-.834.834h-12.5",
    stroke: "#fff",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.66667"
  }), _react.default.createElement("path", {
    className: "to-stroke",
    d: "M31.667 25.833H35c.46 0 .833.374.833.834v1.666c0 .46-.373.834-.833.834h-3.333a.834.834 0 0 1-.834-.834v-1.666c0-.46.374-.834.834-.834zM35.833 35.833h-5v-2.5c0-.46.374-.833.834-.833H35c.46 0 .833.373.833.833v2.5zM5 25.833h3.333c.46 0 .834.374.834.834v1.666c0 .46-.374.834-.834.834H5a.834.834 0 0 1-.833-.834v-1.666c0-.46.373-.834.833-.834zM5 32.5h3.333c.46 0 .834.373.834.833V35c0 .46-.374.833-.834.833H5A.834.834 0 0 1 4.167 35v-1.667c0-.46.373-.833.833-.833zM22.5 31.667a2.5 2.5 0 0 0-5 0v7.5h5v-7.5zM19.167 10.88V5.833M19.167.833h6.666c.46 0 .834.374.834.834V5c0 .46-.374.833-.834.833h-6.666v-5zM20 15.833a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z",
    stroke: "#fff",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.66667"
  }), _react.default.createElement("path", {
    className: "to-stroke",
    d: "M27.5 18.333a7.5 7.5 0 0 0-15 0v20.834h15V18.333z",
    stroke: "#fff",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.66667"
  }));
};

SchoolLogo.defaultProps = {
  viewBox: "0 0 40 40",
  width: "40",
  height: "40"
};
var useStyles = (0, _reactJss.createUseStyles)(_studies_front_styles.styles);

var StudiesFrontComponent = function StudiesFrontComponent(_ref) {
  var _data$;

  var data = _ref.data.education;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
    customClasses: {
      container: classes.logo
    },
    vector: SchoolLogo
  }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    classes: {
      container: classes.typography
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Studies.title",
    defaultMessage: "I graduated from {schoolName}",
    values: {
      schoolName: data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.institution
    }
  })))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Studies.front.action",
    defaultMessage: "All my studies"
  }))));
};

var StudiesFront = StudiesFrontComponent;
exports.StudiesFront = StudiesFront;