"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _ui = require("@wld/ui");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _use_technologies = require("../../../../hooks/technologies/use_technologies");

var _use_card_side = require("../../../../hooks/profile_card_hooks/use_card_side");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _skills_front_styles = require("./skills_front_styles");

var _use_card_variant = require("../../../../hooks/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var _icons = require("../../../../../utils/icons");

var useStyles = (0, _reactJss.createUseStyles)(_skills_front_styles.styles);

var SkillsFrontComponent = function SkillsFrontComponent(_ref) {
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

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var techno = (0, _react.useMemo)(function () {
    var _data$skills;

    var firstTechno = data === null || data === void 0 ? void 0 : (_data$skills = data.skills) === null || _data$skills === void 0 ? void 0 : _data$skills[0];

    if (!technologies || !firstTechno) {
      return {
        name: firstTechno === null || firstTechno === void 0 ? void 0 : firstTechno.name
      };
    }

    return technologies[firstTechno === null || firstTechno === void 0 ? void 0 : firstTechno.name] || {
      name: firstTechno === null || firstTechno === void 0 ? void 0 : firstTechno.name
    };
  }, [technologies, data]);
  var hasSkill = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.skills);
  }, [data]);
  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, /*#__PURE__*/_react.default.createElement(_center_content_container.CenterContentContainer, {
      customClasses: {
        container: classes.container
      }
    }, /*#__PURE__*/_react.default.createElement(Content, {
      hasSkill: hasSkill,
      techno: techno,
      handleAddButtonClick: handleAddButtonClick,
      classes: classes
    }))), hasSkill && /*#__PURE__*/_react.default.createElement(_profile_card_actions.ProfileCardActions, null, /*#__PURE__*/_react.default.createElement(_profile_card_button.ProfileCardButton, {
      onClick: handleButtonClick
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.front.action",
      defaultMessage: "More skills"
    }))))
  );
};

var Content = function Content(_ref2) {
  var hasSkill = _ref2.hasSkill,
      techno = _ref2.techno,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;

  if (hasSkill) {
    return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Picture, {
        techno: techno,
        classes: classes
      }), /*#__PURE__*/_react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
        classes: {
          container: classes.typography
        }
      }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Skills.front.title",
        defaultMessage: "I mainly write {techno} stuff",
        values: {
          techno: techno === null || techno === void 0 ? void 0 : techno.name
        }
      })))
    );
  }

  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.noSkill
    }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      variant: "h3",
      component: "h3",
      customClasses: {
        container: classes.noSkillTypography
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.front.noSkill",
      defaultMessage: "Vous n'avez pas encore ajout\xE9 de comp\xE9tences !"
    })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.addButton
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.noSkill.buttonLabel",
      defaultMessage: "Ajouter une comp\xE9tence"
    })))
  );
};

var Picture = function Picture(_ref3) {
  var techno = _ref3.techno,
      classes = _ref3.classes;
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
      backgroundColor = _getColorsFromCardVar.backgroundColor;

  var src = (0, _react.useMemo)(function () {
    var hex = (0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor);
    var luminance = (0, _chromaJs.default)(hex).luminance();

    if (luminance < 0.98) {
      return "https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/".concat((techno === null || techno === void 0 ? void 0 : techno.handle) || _icons.DEFAULT_TECHNO_HANDLE);
    }

    return "https://process.filestackapi.com/output=format:png/".concat((techno === null || techno === void 0 ? void 0 : techno.handle) || _icons.DEFAULT_TECHNO_HANDLE);
  }, [techno, theme, backgroundColor]);

  if (!src || !techno) {
    return null;
  }

  return (/*#__PURE__*/_react.default.createElement("img", {
      src: src,
      alt: techno === null || techno === void 0 ? void 0 : techno.name,
      className: classes.logo
    })
  );
};

var SkillsFront = (0, _react.memo)(SkillsFrontComponent);
exports.SkillsFront = SkillsFront;