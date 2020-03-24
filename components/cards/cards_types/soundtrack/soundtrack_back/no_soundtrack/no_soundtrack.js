"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoSoundTrack = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _no_soundtrack_styles = require("./no_soundtrack_styles");

var _no_data_button = require("../../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_no_soundtrack_styles.styles);

var NoSoundTrackComponent = function NoSoundTrackComponent(_ref) {
  var handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      style: {
        color: 'inherit'
      },
      variant: "h4",
      component: "h4"
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "SoundTrack.noSoundTrack.title",
      defaultMessage: "Ajoutez ici une playlist qui vous repr\xE9sente pour partagez aux recruteurs votre humeur et go\xFBt musicaux !"
    })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.button
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "SoundTrack.noSoundTrack.buttonLabel",
      defaultMessage: "Ajouter une playlist"
    })))
  );
};

var NoSoundTrack = NoSoundTrackComponent;
exports.NoSoundTrack = NoSoundTrack;