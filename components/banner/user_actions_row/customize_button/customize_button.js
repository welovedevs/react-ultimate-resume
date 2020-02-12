"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _use_callback_open = require("../../../hooks/use_callback_open");

var _customize_dialog = require("../customize_dialog/customize_dialog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomizeButton = function CustomizeButton(_ref) {
  var customizationOptions = _ref.customizationOptions;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = _slicedToArray(_useCallbackOpen, 3),
      dialogOpen = _useCallbackOpen2[0],
      open = _useCallbackOpen2[1],
      close = _useCallbackOpen2[2];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_customize_dialog.CustomizeDialog, {
    open: dialogOpen,
    onClose: close,
    customizationOptions: customizationOptions
  }), _react.default.createElement(_ui.Button, {
    variant: "outlined",
    color: "light",
    onClick: open
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Banner.actions.customize",
    defaultMessage: "Customize"
  })));
};

exports.CustomizeButton = CustomizeButton;