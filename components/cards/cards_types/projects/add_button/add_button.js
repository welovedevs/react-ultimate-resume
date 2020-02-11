"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _bouncing_round_button = require("../../../../commons/bouncing_round_button/bouncing_round_button");

var _add_button_styles = require("./add_button_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditIcon = function EditIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M14.52 8h-6v6h-2V8h-6V6h6V0h2v6h6v2z"
  }));
};

EditIcon.defaultProps = {
  width: "15",
  height: "14",
  viewBox: "0 0 15 14",
  fill: "#230CAE",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_add_button_styles.styles);

var AddButtonComponent = function AddButtonComponent(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Ajouter' : _ref$title,
      onClick = _ref.onClick;
  var classes = useStyles();
  return _react.default.createElement(_bouncing_round_button.BouncingRoundButton, {
    title: title,
    icon: EditIcon,
    onClick: onClick,
    classes: {
      container: classes.container
    }
  });
};

var AddButton = AddButtonComponent;
exports.AddButton = AddButton;