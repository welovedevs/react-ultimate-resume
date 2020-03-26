"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _column_styles = require("./column_styles");

var useStyles = (0, _reactJss.createUseStyles)(_column_styles.styles);

var ColumnComponent = function ColumnComponent(_ref) {
  var children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, customClasses.container)
  }, children);
};

var Column = ColumnComponent;
exports.Column = Column;