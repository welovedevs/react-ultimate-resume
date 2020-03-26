"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsBack = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _skills_pie_chart = _interopRequireDefault(require("./skills_pie_chart/skills_pie_chart"));

var _other_skills = _interopRequireDefault(require("./other_skills/other_skills"));

var _skills_back_styles = require("./skills_back_styles");

var _use_card_variant = require("../../../../hooks/profile_card_hooks/use_card_variant");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_skill = require("./no_skill/no_skill");

var useStyles = (0, _reactJss.createUseStyles)(_skills_back_styles.styles);

var SkillsBackComponent = function SkillsBackComponent(_ref) {
  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card_title.ProfileCardTitle, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Skills.back.title",
    defaultMessage: "Skills"
  })), /*#__PURE__*/_react.default.createElement(Content, {
    data: data,
    handleAddButtonClick: handleAddButtonClick
  }));
};

var Content = function Content(_ref2) {
  var data = _ref2.data,
      handleAddButtonClick = _ref2.handleAddButtonClick;

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var classes = useStyles({
    variant: variant
  });
  var springSkillOpacityPropsRef = (0, _react.useRef)();
  var springGraphOpacityPropsRef = (0, _react.useRef)();
  var hasSkill = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.skills);
  }, [data]);
  var springSkillOpacityProps = (0, _reactSpring.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    ref: springSkillOpacityPropsRef
  });
  var springGraphOpacityProps = (0, _reactSpring.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    ref: springGraphOpacityPropsRef
  });
  (0, _reactSpring.useChain)([springGraphOpacityPropsRef, springSkillOpacityPropsRef], [0, 0.1]);

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return {
      opacity: 1
    };
  }),
      _useSpring2 = (0, _slicedToArray2.default)(_useSpring, 2),
      springOnScrollOpacityProps = _useSpring2[0],
      setSpringOnScrollOpacityProps = _useSpring2[1];

  var _useSpring3 = (0, _reactSpring.useSpring)(function () {
    return {
      yt: 0,
      config: _reactSpring.config.slow
    };
  }),
      _useSpring4 = (0, _slicedToArray2.default)(_useSpring3, 2),
      springTranslationProps = _useSpring4[0],
      setSpringTranslationProps = _useSpring4[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var _data$skills;

    var newData = (0, _toConsumableArray2.default)((_data$skills = data.skills) !== null && _data$skills !== void 0 ? _data$skills : []);
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

  if (!hasSkill) {
    return /*#__PURE__*/_react.default.createElement(_no_skill.NoSkill, {
      handleAddButtonClick: handleAddButtonClick
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container,
    onScroll: onScroll,
    style: springGraphOpacityProps
  }, /*#__PURE__*/_react.default.createElement(_skills_pie_chart.default, {
    variant: variant,
    data: top3Skills,
    springOnScrollOpacityProps: springOnScrollOpacityProps
  }), othersSkills.length > 1 && /*#__PURE__*/_react.default.createElement(_other_skills.default, {
    style: springSkillOpacityProps,
    othersSkills: othersSkills,
    springTranslationProps: springTranslationProps
  }));
};

var SkillsBack = (0, _react.memo)(SkillsBackComponent);
exports.SkillsBack = SkillsBack;