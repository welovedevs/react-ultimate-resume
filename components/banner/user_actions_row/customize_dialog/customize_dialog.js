"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeDialog = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _set = _interopRequireDefault(require("lodash/set"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _dialog_title = require("../../../commons/dialog/dialog_title/dialog_title");

var _cards_orderer = require("./card_orderer/cards_orderer");

var _palettes_list = require("./palettes_list/palettes_list");

var _theme = require("../../../../utils/styles/theme/theme");

var _contexts = require("../../../../utils/context/contexts");

var _customize_dialog_styles = require("./customize_dialog_styles");

var _styles_utils = require("../../../../utils/styles/styles_utils");

var useStyles = (0, _reactJss.createUseStyles)(_customize_dialog_styles.styles);

var CustomizeDialogComponent = function CustomizeDialogComponent(_ref) {
  var _value$theme;

  var open = _ref.open,
      onClose = _ref.onClose,
      customizationOptions = _ref.customizationOptions;
  var theme = (0, _reactJss.useTheme)();
  var onlyShowPalettesList = (0, _core.useMediaQuery)((0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    defaultMatches: true
  });
  var classes = useStyles({
    onlyShowPalettesList: onlyShowPalettesList
  });

  var _useState = (0, _react.useState)(customizationOptions),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      builtTheme = _useState4[0],
      setBuiltTheme = _useState4[1];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      onCustomizationChanged = _useContext.onCustomizationChanged;

  (0, _react.useEffect)(function () {
    setValue(customizationOptions);
  }, [customizationOptions]);
  (0, _react.useEffect)(function () {
    var asyncBuild = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var built;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _theme.buildTheme)(value === null || value === void 0 ? void 0 : value.theme);

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
  }, [JSON.stringify(value === null || value === void 0 ? void 0 : value.theme)]);
  var onSave = (0, _react.useCallback)(function () {
    if (typeof onCustomizationChanged === 'function') {
      onCustomizationChanged(value);
    }

    onClose();
  }, [value]);
  var onPaletteChanged = (0, _react.useCallback)(function (palette) {
    var newCustomization = (0, _cloneDeep.default)(value || {});
    (0, _set.default)(newCustomization, 'theme.palette', palette);
    setValue(newCustomization);

    if (onlyShowPalettesList && typeof onCustomizationChanged === 'function') {
      onCustomizationChanged(newCustomization);
      onClose();
    }
  }, [value, onlyShowPalettesList, onSave]);
  var onCardOrdered = (0, _react.useCallback)(function (cardsOrder) {
    var newCustomization = (0, _cloneDeep.default)(value || {});
    newCustomization.cardsOrder = cardsOrder;
    setValue(newCustomization);
  }, [value]);
  return _react.default.createElement(_core.Dialog, {
    fullScreen: true,
    open: open,
    classes: {
      root: classes.root,
      paper: classes.paper
    },
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Banner.actions.customize.dialog.title",
    defaultMessage: "Customize your profile"
  })), _react.default.createElement(_core.DialogContent, {
    classes: {
      root: classes.content
    }
  }, _react.default.createElement(_palettes_list.PalettesList, {
    classes: {
      container: classes.palettesList
    },
    onChange: onPaletteChanged,
    value: value === null || value === void 0 ? void 0 : (_value$theme = value.theme) === null || _value$theme === void 0 ? void 0 : _value$theme.palette
  }), !onlyShowPalettesList && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.dividerContainer
  }, _react.default.createElement("div", {
    className: classes.divider
  })), _react.default.createElement(_reactJss.ThemeProvider, {
    theme: builtTheme
  }, _react.default.createElement(_cards_orderer.CardsOrderer, {
    onChange: onCardOrdered,
    value: value === null || value === void 0 ? void 0 : value.cardsOrder
  })))), _react.default.createElement(_core.DialogActions, {
    classes: {
      root: classes.actions
    }
  }, _react.default.createElement(_ui.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    deaultMessage: "Close"
  })), _react.default.createElement(_ui.Button, {
    color: "primary",
    variant: "contained",
    size: "small",
    onClick: onSave
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.save",
    defaultMessage: "Save"
  }))));
};

var CustomizeDialog = CustomizeDialogComponent;
exports.CustomizeDialog = CustomizeDialog;