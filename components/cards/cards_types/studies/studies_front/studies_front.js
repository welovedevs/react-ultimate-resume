"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _studies_front_styles = require("./studies_front_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SchoolLogo = function SchoolLogo(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M144 41l42-41h-42v41z",
    fill: "#FCFCFC"
  }), _react.default.createElement("path", {
    d: "M185.437 41.408L144 82.718V124h41.437V82.717L227 41.408V0h-41.563v41.408z",
    fill: "#FCFCFC"
  }), _react.default.createElement("path", {
    d: "M227 83l-42 41h42V83zM0 116.459h83.392V158H125V82.93H41.76L125 0H83.392L0 82.93v33.529z",
    fill: "#FCFCFC"
  }));
};

SchoolLogo.defaultProps = {
  width: "227",
  height: "158",
  viewBox: "0 0 227 158",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_studies_front_styles.styles);

var StudiesFrontComponent = function StudiesFrontComponent(_ref) {
  var _data$;

  var data = _ref.data.education;
  var classes = useStyles();
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
    customClasses: {
      container: classes.typography
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Studies.title",
    defaultMessage: "I gratuated from {schoolName}",
    values: {
      schoolName: data === null || data === void 0 ? void 0 : (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.institution
    }
  })))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, "All my studies")));
};

var StudiesFront = StudiesFrontComponent;
exports.StudiesFront = StudiesFront;