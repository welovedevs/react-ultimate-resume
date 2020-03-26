"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mergeOnClicks = function mergeOnClicks() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fns.forEach(function (fn) {
      if (typeof fn === 'function') {
        fn(args);
      }
    });
  };
};

var CopyWrapperComponent = function CopyWrapperComponent(_ref) {
  var value = _ref.value,
      children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showSnack = _useState2[0],
      setShowSnack = _useState2[1];

  var handleCopyToClipboardClick = (0, _react.useCallback)(function () {
    (0, _copyToClipboard.default)(value);
    setShowSnack(true);
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child) {
    return _react.default.cloneElement(child, _objectSpread({}, child.props, {
      onClick: mergeOnClicks(handleCopyToClipboardClick, child.props.onClick)
    }));
  }), /*#__PURE__*/_react.default.createElement(_core.Portal, null, /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
    anchorOrigin: {
      horizontal: 'left',
      vertical: 'bottom'
    },
    open: showSnack,
    message: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.copied",
      defaultMessage: "Copied in your clipboard"
    }),
    autoHideDuration: 5000,
    onClose: function onClose() {
      return setShowSnack(false);
    }
  })));
};

var CopyWrapper = CopyWrapperComponent;
exports.CopyWrapper = CopyWrapper;