"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _progress_bar = require("@wld/ui/progress_bar/progress_bar");

var _typography = require("@wld/ui/typography/typography");

var _other_skill_progress_styles = require("./other_skill_progress_styles");

var useStyles = (0, _reactJss.createUseStyles)(_other_skill_progress_styles.styles);

var OtherSkillProgress = function OtherSkillProgress(_ref) {
  var color = _ref.color,
      value = _ref.value,
      name = _ref.name;
  var classes = useStyles({
    color: color
  });
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/_react.default.createElement(_typography.Typography, {
      variant: "h4",
      component: "h4",
      color: color,
      customClasses: {
        container: classes.skillLabel
      }
    }, name), /*#__PURE__*/_react.default.createElement(_progress_bar.ProgressBar, {
      customClasses: {
        container: classes.progressBarCustomContainer,
        bar: classes.progressBarCustomBar
      },
      value: value
    }))
  );
};

var _default = OtherSkillProgress;
exports.default = _default;