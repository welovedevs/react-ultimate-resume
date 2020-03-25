"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardEditButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _bouncing_round_button = require("../../bouncing_round_button/bouncing_round_button");

var _profile_card_edit_button_styles = require("./profile_card_edit_button_styles");

var EditIcon = function EditIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
  }));
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_card_edit_button_styles.styles);

var ProfileCardEditButtonComponent = function ProfileCardEditButtonComponent(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Editer cette carte' : _ref$title,
      setEditDialogOpened = _ref.setEditDialogOpened;
  var classes = useStyles();
  return _react.default.createElement(_bouncing_round_button.BouncingRoundButton, {
    title: title,
    icon: EditIcon,
    onClick: setEditDialogOpened,
    classes: {
      container: classes.container
    }
  });
};

var ProfileCardEditButton = ProfileCardEditButtonComponent;
exports.ProfileCardEditButton = ProfileCardEditButton;