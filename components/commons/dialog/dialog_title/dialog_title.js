"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _dialog_title_styles = require("./dialog_title_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_dialog_title_styles.styles);

var DialogTitleComponent = function DialogTitleComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement(_ui.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: classes.container
    }
  }, children);
};

var DialogTitle = DialogTitleComponent;
exports.DialogTitle = DialogTitle;