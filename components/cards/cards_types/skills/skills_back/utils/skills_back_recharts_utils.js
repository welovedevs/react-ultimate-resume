"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSpring = require("react-spring");

var _reactJss = require("react-jss");

var _skills_back_recharts_styles = require("./skills_back_recharts_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_skills_back_recharts_styles.styles);

var CustomLabel = function CustomLabel(props) {
  var classes = useStyles();
  var RADIAN = Math.PI / 180;
  var cx = props.cx,
      cy = props.cy,
      midAngle = props.midAngle,
      customColor = props.customColor,
      outerRadius = props.outerRadius,
      springProps = props.springProps,
      name = props.name;
  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + outerRadius * cos;
  var sy = cy + outerRadius * sin;
  var mx = cx + (outerRadius + 20) * cos;
  var my = cy + (outerRadius + 20) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 20;
  var ey = my;
  var textAnchor = cos >= 0 ? 'start' : 'end';
  return _react.default.createElement("g", null, _react.default.createElement(_reactSpring.animated.g, {
    style: springProps
  }, _react.default.createElement("path", {
    d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
    stroke: customColor,
    fill: "none"
  }), _react.default.createElement("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: customColor,
    stroke: "none"
  }), _react.default.createElement("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 8,
    y: ey,
    dy: 5,
    textAnchor: textAnchor,
    fill: customColor,
    fontWeight: "500",
    className: classes.text
  }, name)));
};

exports.CustomLabel = CustomLabel;