"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _classnames = _interopRequireDefault(require("classnames"));

var _ui = require("@wld/ui");

var _dialog_title_styles = require("./dialog_title_styles");

var useStyles = (0, _reactJss.createUseStyles)(_dialog_title_styles.styles);

var DialogTitleComponent = function DialogTitleComponent(_ref) {
  var children = _ref.children,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return _react.default.createElement(_ui.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: (0, _classnames.default)(classes.container, receivedClasses.root)
    }
  }, children);
};

var DialogTitle = DialogTitleComponent;
exports.DialogTitle = DialogTitle;