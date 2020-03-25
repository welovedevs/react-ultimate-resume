"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _contexts = require("../../../../utils/context/contexts");

var _edit_button_styles = require("./edit_button_styles");

var EditIcon = function EditIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
      d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
    }))
  );
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};

var CheckIcon = function CheckIcon(props) {
  return (/*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M10 22.039l4.084 5.795a1.749 1.749 0 0 0 2.845.085L30 11.38",
      strokeWidth: "2.50005"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M20 1.248c10.356 0 18.75 8.396 18.75 18.75S30.357 38.75 20 38.75 1.25 30.354 1.25 20 9.645 1.249 20 1.249z",
      strokeWidth: "2.50005"
    })))
  );
};

CheckIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_edit_button_styles.styles);

var EditButton = function EditButton() {
  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      isEditing = _useContext.isEditing,
      setIsEditing = _useContext.setIsEditing;

  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles(theme);
  var handleClick = (0, _react.useCallback)(function () {
    return setIsEditing(!isEditing);
  }, [isEditing]);

  if (!isEditing) {
    return (/*#__PURE__*/_react.default.createElement(_ui.Button, {
        variant: "outlined",
        color: "light",
        onClick: handleClick
      }, /*#__PURE__*/_react.default.createElement(EditIcon, {
        className: classes.penIcon
      }), /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Main.lang.edit",
        defaultMessage: "Edit"
      }))
    );
  }

  return (/*#__PURE__*/_react.default.createElement(_ui.Button, {
      variant: "outlined",
      color: "light",
      onClick: handleClick
    }, /*#__PURE__*/_react.default.createElement(CheckIcon, {
      className: classes.checkIcon
    }), /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.stopEdit",
      defaultMessage: "Stop edit"
    }))
  );
};

exports.EditButton = EditButton;