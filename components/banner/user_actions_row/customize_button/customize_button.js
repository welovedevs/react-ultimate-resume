"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeButton = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _reactJss = require("react-jss");

var _reactEmojiRender = require("react-emoji-render");

var _use_callback_open = require("../../../hooks/use_callback_open");

var _customize_dialog = require("../customize_dialog/customize_dialog");

var _customize_button_translations = require("./customize_button_translations");

var _customize_button_styles = require("./customize_button_styles");

var useStyles = (0, _reactJss.createUseStyles)(_customize_button_styles.styles);

var CustomizeButton = function CustomizeButton(_ref) {
  var customizationOptions = _ref.customizationOptions;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      dialogOpen = _useCallbackOpen2[0],
      open = _useCallbackOpen2[1],
      close = _useCallbackOpen2[2];

  var classes = useStyles();
  var isMobile = (0, _core.useMediaQuery)('(max-width:500px)', {
    defaultMatches: true
  });
  return (/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_customize_dialog.CustomizeDialog, {
      open: dialogOpen,
      onClose: close,
      customizationOptions: customizationOptions
    }), /*#__PURE__*/_react.default.createElement(_ui.Button, {
      variant: "outlined",
      color: "light",
      onClick: open
    }, /*#__PURE__*/_react.default.createElement(_reactEmojiRender.Twemoji, {
      svt: true,
      text: "\uD83C\uDFA8",
      className: classes.icon
    }), !isMobile && formatMessage(_customize_button_translations.translations.customize)))
  );
};

exports.CustomizeButton = CustomizeButton;