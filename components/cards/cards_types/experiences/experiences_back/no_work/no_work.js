"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoWork = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_work_styles = require("./no_work_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_work_styles.styles);

var NoWorkComponent = function NoWorkComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    style: {
      color: 'inherit'
    },
    variant: "h4",
    component: "h4"
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.noWork.title",
    defaultMessage: "Les exp\xE9riences que vous avez men\xE9 dans votre carri\xE8re seront affich\xE9es ici ."
  })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Experiences.noWork.buttonLabel",
    defaultMessage: "Ajouter une exp\xE9rience"
  })));
};

var NoWork = NoWorkComponent;
exports.NoWork = NoWork;