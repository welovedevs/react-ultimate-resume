"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoHobby = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_hobby_styles = require("./no_hobby_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_hobby_styles.styles);

var NoHobbyComponent = function NoHobbyComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_ui.Typography, {
    style: {
      color: 'inherit'
    },
    variant: "h4",
    component: "h4",
    className: classes.noGifDescription
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Gifs.noHobby.title",
    defaultMessage: "Vos hobbies seront affich\xE9s sous la forme d'un gif trop styl\xE9 !"
  })), _react.default.createElement(_no_data_button.NoDataButton, {
    color: "secondary",
    handleAddButtonClick: handleAddButtonClick,
    classes: {
      container: classes.button
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Gifs.noHobby.buttonLabel",
    defaultMessage: "Ajouter un hobby"
  })));
};

var NoHobby = NoHobbyComponent;
exports.NoHobby = NoHobby;