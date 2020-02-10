"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _typography = require("@wld/ui/typography/typography");

var _other_skill_progress = _interopRequireDefault(require("../other_skill_progress/other_skill_progress"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _use_card_variant = require("../../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _other_skills_styles = require("./other_skills_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_other_skills_styles.styles);

var OtherSkills = function OtherSkills(_ref) {
  var othersSkills = _ref.othersSkills,
      springOnOpenOpacityProps = _ref.springOnOpenOpacityProps,
      yt = _ref.springTranslationProps.yt;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var theme = (0, _reactJss.useTheme)();
  var color = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color;
  }, [theme, variant]);
  return _react.default.createElement(_reactSpring.animated.div, {
    className: classes.otherSkillsContainer,
    style: {
      opacity: springOnOpenOpacityProps.opacity,
      transform: yt.interpolate(function (value) {
        return "translate3d(0, ".concat(value, "px,0)");
      })
    }
  }, _react.default.createElement(_typography.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: classes.otherSkillsTitle
    }
  }, "Je maitrise \xE9galement..."), othersSkills.map(function (skill) {
    return _react.default.createElement(_other_skill_progress.default, _extends({
      key: "other_skill_".concat(skill.name),
      color: color
    }, skill));
  }));
};

var _default = OtherSkills;
exports.default = _default;