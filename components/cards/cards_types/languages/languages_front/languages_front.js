"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _languages_front_styles = require("./languages_front_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_languages_front_styles.styles);

var LanguagesFrontComponent = function LanguagesFrontComponent(_ref) {
  var _data$languages, _data$languages$, _data$languages2, _data$languages2$, _data$languages3, _data$languages3$;

  var data = _ref.data;
  var classes = useStyles();

  var languagesNode = _react.default.createElement(_react.default.Fragment, null, (_data$languages = data.languages) === null || _data$languages === void 0 ? void 0 : (_data$languages$ = _data$languages[0]) === null || _data$languages$ === void 0 ? void 0 : _data$languages$.language, _react.default.createElement("br", null), (_data$languages2 = data.languages) === null || _data$languages2 === void 0 ? void 0 : (_data$languages2$ = _data$languages2[1]) === null || _data$languages2$ === void 0 ? void 0 : _data$languages2$.language, _react.default.createElement("br", null), (_data$languages3 = data.languages) === null || _data$languages3 === void 0 ? void 0 : (_data$languages3$ = _data$languages3[2]) === null || _data$languages3$ === void 0 ? void 0 : _data$languages3$.language);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    customClasses: {
      container: classes.typography
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Languages.front.content",
    defaultMessage: "I speak {languagesNode}",
    values: {
      languagesNode: languagesNode
    }
  }))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, 'Languages level')));
};

var LanguagesFront = LanguagesFrontComponent;
exports.LanguagesFront = LanguagesFront;