"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _column_styles = require("./column_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_column_styles.styles);

var ColumnComponent = function ColumnComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, children);
};

var Column = ColumnComponent;
exports.Column = Column;