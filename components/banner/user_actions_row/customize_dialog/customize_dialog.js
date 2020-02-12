"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _set = _interopRequireDefault(require("lodash/set"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _core = require("@material-ui/core");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _dialog_title = require("../../../commons/dialog/dialog_title/dialog_title");

var _palette_picker = require("./palette_picker/palette_picker");

var _cards_orderer = require("./card_orderer/cards_orderer");

var _theme = require("../../../../utils/styles/theme/theme");

var _contexts = require("../../../../utils/context/contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomizeDialog = function CustomizeDialog(_ref) {
  var _value$theme;

  var open = _ref.open,
      onClose = _ref.onClose,
      customizationOptions = _ref.customizationOptions;

  var _useState = (0, _react.useState)(customizationOptions),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onCustomizationChanged = _useContext.onCustomizationChanged;

  (0, _react.useEffect)(function () {
    setValue(customizationOptions);
  }, [customizationOptions]);

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      builtTheme = _useState4[0],
      setBuiltTheme = _useState4[1];

  (0, _react.useEffect)(function () {
    var asyncBuild =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var built;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _theme.buildTheme)(value.theme);

              case 2:
                built = _context.sent;
                setBuiltTheme(built);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function asyncBuild() {
        return _ref2.apply(this, arguments);
      };
    }();

    asyncBuild();
  }, [JSON.stringify(value.theme)]);
  var onPaletteChanged = (0, _react.useCallback)(function (palette) {
    var newCustomization = (0, _cloneDeep.default)(value || {});
    (0, _set.default)(newCustomization, 'theme.palette', palette);
    setValue(newCustomization);
  }, [value]);
  var onCardOrdered = (0, _react.useCallback)(function (cardsOrder) {
    var newCustomization = (0, _cloneDeep.default)(value || {});
    newCustomization.cardsOrder = cardsOrder;
    setValue(newCustomization);
  }, [value]);
  var onSave = (0, _react.useCallback)(function () {
    onCustomizationChanged(value);
    onClose();
  }, [value]);
  return _react.default.createElement(_core.Dialog, {
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Banner.actions.customize.dialog.title",
    defaultMessage: "Customize your profile"
  })), _react.default.createElement(_core.DialogContent, null, _react.default.createElement(_palette_picker.PalettePicker, {
    onChange: onPaletteChanged,
    value: value === null || value === void 0 ? void 0 : (_value$theme = value.theme) === null || _value$theme === void 0 ? void 0 : _value$theme.palette
  }), _react.default.createElement(_reactJss.ThemeProvider, {
    theme: builtTheme
  }, _react.default.createElement(_cards_orderer.CardsOrderer, {
    onChange: onCardOrdered,
    value: value === null || value === void 0 ? void 0 : value.cardsOrder
  }))), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onSave
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.save",
    defaultMessage: "Save"
  }))));
};

exports.CustomizeDialog = CustomizeDialog;