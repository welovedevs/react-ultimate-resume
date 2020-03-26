"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _typography = require("@wld/ui/typography/typography");

var _other_skill_progress = _interopRequireDefault(require("../other_skill_progress/other_skill_progress"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _use_card_variant = require("../../../../../hooks/profile_card_hooks/use_card_variant");

var _other_skills_styles = require("./other_skills_styles");

var useStyles = (0, _reactJss.createUseStyles)(_other_skills_styles.styles);

var OtherSkills = function OtherSkills(_ref) {
  var style = _ref.style,
      othersSkills = _ref.othersSkills,
      yt = _ref.springTranslationProps.yt;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var theme = (0, _reactJss.useTheme)();
  var color = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color;
  }, [theme, variant]);
  return /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
    className: classes.otherSkillsContainer,
    style: {
      opacity: style.opacity,
      transform: yt.to(function (value) {
        return "translate3d(0, ".concat(value, "px,0)");
      })
    }
  }, /*#__PURE__*/_react.default.createElement(_typography.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: classes.otherSkillsTitle
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Skills.otherskills.title",
    defaultMessage: "I also master"
  })), othersSkills.map(function (skill) {
    return /*#__PURE__*/_react.default.createElement(_other_skill_progress.default, {
      key: "other_skill_".concat(skill.name),
      color: color,
      value: skill.value,
      name: skill.name
    });
  }));
};

var _default = OtherSkills;
exports.default = _default;