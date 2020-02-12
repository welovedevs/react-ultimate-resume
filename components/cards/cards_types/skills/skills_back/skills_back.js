"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _skills_pie_chart = _interopRequireDefault(require("./skills_pie_chart/skills_pie_chart"));

var _other_skills = _interopRequireDefault(require("./other_skills/other_skills"));

var _skills_back_styles = require("./skills_back_styles");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_skills_back_styles.styles);

var SkillsBackComponent = function SkillsBackComponent(_ref) {
  var data = _ref.data;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return {
      opacity: 0
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springOnOpenOpacityProps = _useSpring2[0],
      setSpringOnOpenOpacityProps = _useSpring2[1];

  var _useSpring3 = (0, _reactSpring.useSpring)(function () {
    return {
      opacity: 1
    };
  }),
      _useSpring4 = _slicedToArray(_useSpring3, 2),
      springOnScrollOpacityProps = _useSpring4[0],
      setSpringOnScrollOpacityProps = _useSpring4[1];

  var _useSpring5 = (0, _reactSpring.useSpring)(function () {
    return {
      yt: 0,
      config: _reactSpring.config.slow
    };
  }),
      _useSpring6 = _slicedToArray(_useSpring5, 2),
      springTranslationProps = _useSpring6[0],
      setSpringTranslationProps = _useSpring6[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var _data$skills;

    var newData = _toConsumableArray((_data$skills = data.skills) !== null && _data$skills !== void 0 ? _data$skills : []);

    var top3 = newData.splice(0, 3);
    return {
      top3Skills: top3,
      othersSkills: newData
    };
  }, [data]),
      top3Skills = _useMemo.top3Skills,
      othersSkills = _useMemo.othersSkills;

  var onScroll = (0, _react.useCallback)(function (e) {
    var newOpacity = Math.max(1 - e.target.scrollTop / 60, 0);

    if (newOpacity === 0) {
      if (othersSkills.length > 10) {
        setSpringTranslationProps({
          yt: -100
        });
      } else {
        setSpringTranslationProps({
          yt: -100 + (e.target.scrollTop > 160 && e.target.scrollTop - 160)
        });
      }
    } else {
      setSpringTranslationProps({
        yt: 0
      });
    }

    return setSpringOnScrollOpacityProps({
      opacity: newOpacity
    });
  }, [othersSkills]);
  var onAnimationEnd = (0, _react.useCallback)(function () {
    return console.log('Animation Ended') || setSpringOnOpenOpacityProps({
      opacity: 1
    });
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_title.ProfileCardTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Skills.back.title",
    defaultMessage: "Skills"
  })), _react.default.createElement("div", {
    className: classes.container,
    onScroll: onScroll
  }, _react.default.createElement(_skills_pie_chart.default, {
    variant: variant,
    data: top3Skills,
    springOnScrollOpacityProps: springOnScrollOpacityProps,
    springOnOpenOpacityProps: springOnOpenOpacityProps,
    onAnimationEnd: onAnimationEnd
  }), _react.default.createElement(_other_skills.default, {
    othersSkills: othersSkills,
    springOnOpenOpacityProps: springOnOpenOpacityProps,
    springTranslationProps: springTranslationProps
  })));
};

var SkillsBack = (0, _react.memo)(SkillsBackComponent);
exports.SkillsBack = SkillsBack;