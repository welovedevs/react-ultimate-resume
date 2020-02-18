"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageColumn = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _language_column_styles = require("./language_column_styles");

var useStyles = (0, _reactJss.createUseStyles)(_language_column_styles.styles);

var LanguageColumnComponent = function LanguageColumnComponent(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      color = _ref.color,
      style = _ref.style,
      value = _ref.value,
      children = _ref.children,
      itemsSize = _ref.itemsSize;
  var classes = useStyles({
    value: value,
    color: color,
    itemsSize: itemsSize
  });
  return _react.default.createElement(_ui.Tooltip, {
    title: "".concat(value, "%")
  }, _react.default.createElement(Component, {
    className: classes.container,
    style: style
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2",
    color: "light",
    customClasses: {
      container: classes.typography
    }
  }, children)));
};

var LanguageColumn = LanguageColumnComponent;
exports.LanguageColumn = LanguageColumn;