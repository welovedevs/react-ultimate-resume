"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSkill = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_skill_styles = require("./no_skill_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_skill_styles.styles);

var NoSkillComponent = function NoSkillComponent(_ref) {
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
    id: "Skills.noSkill.title",
    defaultMessage: "Ajoutez ici toutes les comp\xE9tences que vous maitrisez !"
  })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Skills.noSkill.buttonLabel",
    defaultMessage: "Ajouter une comp\xE9tence"
  })));
};

var NoSkill = NoSkillComponent;
exports.NoSkill = NoSkill;