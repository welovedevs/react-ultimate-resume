"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderWithPopper = void 0;

var _ui = require("@wld/ui");

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _slider_with_popper_styles = require("./slider_with_popper_styles");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_slider_with_popper_styles.sliderStyles);

var SliderWithPopper = function SliderWithPopper(_ref) {
  var color = _ref.color,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      min = _ref.min,
      max = _ref.max,
      className = _ref.className,
      label = _ref.label,
      _ref$debounce = _ref.debounce,
      debounce = _ref$debounce === void 0 ? 500 : _ref$debounce;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var handleFocus = (0, _react.useCallback)(function () {
    return setIsFocused(true);
  }, []);
  var handleBlur = (0, _react.useCallback)(function () {
    return setIsFocused(false);
  }, []);
  var timer = (0, _react.useRef)();
  var thumbReference = (0, _react.useRef)();

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      localValue = _useState4[0],
      setLocalValue = _useState4[1];

  (0, _react.useEffect)(function () {
    setLocalValue(value);
  }, [value]);
  var handleChange = (0, _react.useCallback)(function (e) {
    e.persist();
    var newValue = e.target.value;

    if (timer.current) {
      clearTimeout(timer.current);
    }

    setLocalValue(newValue);

    if (debounce) {
      timer.current = setTimeout(function () {
        return onChange(e);
      }, debounce);
    } else {
      onChange(e);
    }
  }, [onChange]);
  return _react.default.createElement(_ui.Slider, {
    classes: {
      container: (0, _classnames.default)(classes.slider, className)
    },
    color: color,
    name: name,
    value: localValue,
    onChange: handleChange,
    min: min,
    max: max,
    onMouseDown: handleFocus,
    onMouseUp: handleBlur,
    thumbReference: thumbReference,
    fullWidth: true,
    thumbChildren: _react.default.createElement(_ui.PopperCard, {
      open: isFocused,
      anchorElement: thumbReference.current,
      popperProps: {
        disablePortal: true,
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport'
          }
        }
      }
    }, localValue)
  });
};

exports.SliderWithPopper = SliderWithPopper;