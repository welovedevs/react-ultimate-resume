"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguagesFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _languages_front_styles = require("./languages_front_styles");

var _use_card_side = require("../../../../hooks/profile_card_hooks/use_card_side");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_languages_front_styles.styles);

var LanguagesFrontComponent = function LanguagesFrontComponent(_ref) {
  var _data$languages, _data$languages$, _data$languages2, _data$languages2$, _data$languages3, _data$languages3$;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);

  var languagesNode = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_data$languages = data.languages) === null || _data$languages === void 0 ? void 0 : (_data$languages$ = _data$languages[0]) === null || _data$languages$ === void 0 ? void 0 : _data$languages$.language, /*#__PURE__*/_react.default.createElement("br", null), (_data$languages2 = data.languages) === null || _data$languages2 === void 0 ? void 0 : (_data$languages2$ = _data$languages2[1]) === null || _data$languages2$ === void 0 ? void 0 : _data$languages2$.language, /*#__PURE__*/_react.default.createElement("br", null), (_data$languages3 = data.languages) === null || _data$languages3 === void 0 ? void 0 : (_data$languages3$ = _data$languages3[2]) === null || _data$languages3$ === void 0 ? void 0 : _data$languages3$.language);

  var hasLanguage = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.languages);
  }, [data]);
  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_center_content_container.CenterContentContainer, null, /*#__PURE__*/_react.default.createElement(Content, {
      hasLanguage: hasLanguage,
      languagesNode: languagesNode,
      handleAddButtonClick: handleAddButtonClick,
      classes: classes
    })), hasLanguage && /*#__PURE__*/_react.default.createElement(_profile_card_actions.ProfileCardActions, null, /*#__PURE__*/_react.default.createElement(_profile_card_button.ProfileCardButton, {
      onClick: handleButtonClick
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Languages.front.action",
      defaultMessage: "Languages level"
    }))))
  );
};

var Content = function Content(_ref2) {
  var hasLanguage = _ref2.hasLanguage,
      languagesNode = _ref2.languagesNode,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;

  if (hasLanguage) {
    return (/*#__PURE__*/_react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
        classes: {
          container: classes.typography
        }
      }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Languages.front.content",
        defaultMessage: "I speak {languagesNode}",
        values: {
          languagesNode: languagesNode
        }
      }))
    );
  }

  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.noLanguage
    }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      variant: "h3",
      component: "h3",
      customClasses: {
        container: classes.noLanguageTypography
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Languages.front.noLanguage",
      defaultMessage: "Vous n'avez pas encore ajout\xE9 de langues !"
    })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.addButton
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Languages.noLanguage.buttonLabel",
      defaultMessage: "Ajouter une langue"
    })))
  );
};

var LanguagesFront = (0, _react.memo)(LanguagesFrontComponent);
exports.LanguagesFront = LanguagesFront;