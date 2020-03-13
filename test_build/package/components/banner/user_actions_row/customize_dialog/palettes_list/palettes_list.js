"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PalettesList = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactInfiniteScroller = _interopRequireDefault(require("react-infinite-scroller"));

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _palette_visual = require("../palette_visual/palette_visual");

var _loading_spinner = require("../../../../commons/loading_spinner/loading_spinner");

var _build_shaded_palette = require("./utils/build_shaded_palette");

var _palettes = require("./utils/palettes");

var _palettes_list_spring_props = require("./palettes_list_spring_props");

var _palettes_list_styles = require("./palettes_list_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_palettes_list_styles.styles);

var PalettesListComponent = function PalettesListComponent(_ref) {
  var currentPalette = _ref.value,
      onChange = _ref.onChange,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  var containerReference = (0, _react.useRef)();

  var _useState = (0, _react.useState)(10),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      itemsToShow = _useState2[0],
      setItemsToShow = _useState2[1];

  var displayedPalettes = (0, _react.useMemo)(function () {
    return _palettes.palettes.slice(0, itemsToShow);
  }, [itemsToShow]);
  var onSelectChanged = (0, _react.useCallback)(function (value) {
    return function () {
      var _value = (0, _slicedToArray2.default)(value, 3),
          primary = _value[0],
          secondary = _value[1],
          tertiary = _value[2];

      return onChange({
        primary: (0, _build_shaded_palette.buildShadedPalette)(primary),
        secondary: (0, _build_shaded_palette.buildShadedPalette)(secondary),
        tertiary: (0, _build_shaded_palette.buildShadedPalette)(tertiary)
      });
    };
  }, []);
  var setNextDisplayedPalettes = (0, _react.useCallback)(function () {
    setItemsToShow(itemsToShow + 10);
  }, [itemsToShow, setItemsToShow]);
  var transitions = (0, _reactSpring.useTransition)(displayedPalettes, function (item) {
    return "palette_".concat(item.join('_'));
  }, _palettes_list_spring_props.PALETTES_LIST_TRANSITIONS_SPRING_PROPS);
  return _react.default.createElement("div", {
    ref: containerReference,
    id: "scrollable_".concat(classes.container),
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, currentPalette && _react.default.createElement("div", {
    className: classes.selectedPaletteContainer
  }, _react.default.createElement(_palette_visual.PaletteVisual, {
    palette: currentPalette
  }), _react.default.createElement("div", {
    className: classes.divider
  })), _react.default.createElement(_reactInfiniteScroller.default, {
    hasMore: itemsToShow < _palettes.palettes.length,
    loader: _react.default.createElement(_loading_spinner.LoadingSpinner, null),
    pageStart: 0,
    useWindow: false,
    loadMore: setNextDisplayedPalettes,
    getScrollParent: function getScrollParent() {
      return containerReference.current;
    }
  }, transitions.map(function (_ref2, paletteIndex) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return _react.default.createElement(_reactSpring.animated.button, {
      key: key,
      type: "button",
      className: classes.selectablePaletteContainer,
      onClick: onSelectChanged(item),
      style: props
    }, _react.default.createElement(_ui.Typography, {
      color: "dark",
      customClasses: {
        container: classes.selectablePaletteIndex
      },
      variant: "h3"
    }, "".concat(paletteIndex + 1, ".")), _react.default.createElement(_palette_visual.PaletteVisual, {
      classes: {
        tooltipPopper: classes.tooltipPopper,
        color: classes.paletteVisualColor
      },
      palette: ['primary', 'secondary', 'tertiary'].reduce(function (acc, keyName, index) {
        return _objectSpread({}, acc, (0, _defineProperty2.default)({}, keyName, {
          500: item[index]
        }));
      }, {})
    }));
  })));
};

var PalettesList = PalettesListComponent;
exports.PalettesList = PalettesList;