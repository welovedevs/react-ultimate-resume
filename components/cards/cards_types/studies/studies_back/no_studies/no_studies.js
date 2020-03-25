"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoStudies = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_studies_styles = require("./no_studies_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_studies_styles.styles);

var NoStudiesComponent = function NoStudiesComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Typography, {
    style: {
      color: 'inherit'
    },
    variant: "h4",
    component: "h4"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Studies.noEducation.title",
    defaultMessage: "Ajoutez ici les formations que vous avez effectu\xE9 !"
  })), _react.default.createElement(_no_data_button.NoDataButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Studies.noEducation.buttonLabel",
    defaultMessage: "Ajouter une formation"
  })));
};

var NoStudies = NoStudiesComponent;
exports.NoStudies = NoStudies;