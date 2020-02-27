"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditHeaderImageButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _contexts = require("../../../utils/context/contexts");

var _bouncing_round_button = require("../../commons/bouncing_round_button/bouncing_round_button");

var _edit_banner_image_dialog = require("../edit_banner_image_dialog/edit_banner_image_dialog");

var _use_callback_open = require("../../hooks/use_callback_open");

var _edit_header_image_button_styles = require("./edit_header_image_button_styles");

var _use_received_global_classes = require("../../hooks/use_received_global_classes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var EditIcon = function EditIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
  }));
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_edit_header_image_button_styles.styles);

var EditHeaderImageButton = function EditHeaderImageButton(_ref) {
  var customizationOptions = _ref.customizationOptions;
  var classes = useStyles();

  var _useReceivedGlobalCla = (0, _use_received_global_classes.useReceivedGlobalClasses)('banner.editHeaderImageButton'),
      _useReceivedGlobalCla2 = (0, _slicedToArray2.default)(_useReceivedGlobalCla, 1),
      _useReceivedGlobalCla3 = _useReceivedGlobalCla2[0],
      globalReceivedClasses = _useReceivedGlobalCla3 === void 0 ? {} : _useReceivedGlobalCla3;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onCustomizationChanged = _useContext.onCustomizationChanged;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      open = _useCallbackOpen2[0],
      onOpen = _useCallbackOpen2[1],
      onClose = _useCallbackOpen2[2];

  var onChange = (0, _react.useCallback)(function (value) {
    onCustomizationChanged(_objectSpread({}, customizationOptions, {
      imageHeader: value
    }));
  }, [customizationOptions]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_edit_banner_image_dialog.EditBannerImageDialog, {
    open: open,
    onClose: onClose,
    value: customizationOptions.imageHeader,
    onChange: onChange
  }), _react.default.createElement(_bouncing_round_button.BouncingRoundButton, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Banner.image.editButton",
      defaultMessage: "Edit banner image"
    }),
    icon: EditIcon,
    onClick: onOpen,
    classes: {
      container: (0, _classnames.default)(classes.editButton, globalReceivedClasses)
    }
  }));
};

exports.EditHeaderImageButton = EditHeaderImageButton;