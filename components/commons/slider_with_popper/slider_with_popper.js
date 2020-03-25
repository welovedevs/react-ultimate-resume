"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderWithPopper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _slider_with_popper_styles = require("./slider_with_popper_styles");

var useStyles = (0, _reactJss.createUseStyles)(_slider_with_popper_styles.styles);

var SliderWithPopper = function SliderWithPopper(_ref) {
  var color = _ref.color,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      min = _ref.min,
      max = _ref.max,
      _ref$debounce = _ref.debounce,
      debounce = _ref$debounce === void 0 ? 500 : _ref$debounce,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes,
      popperCardProps = _ref.popperCardProps;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var _useState3 = (0, _react.useState)(value),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      localValue = _useState4[0],
      setLocalValue = _useState4[1];

  var handleFocus = (0, _react.useCallback)(function () {
    return setIsFocused(true);
  }, []);
  var handleBlur = (0, _react.useCallback)(function () {
    return setIsFocused(false);
  }, []);
  var timer = (0, _react.useRef)();
  var thumbReference = (0, _react.useRef)();
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
  return (/*#__PURE__*/_react.default.createElement(_ui.Slider, {
      classes: {
        container: (0, _classnames.default)(classes.container, receivedClasses.container)
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
      thumbChildren: /*#__PURE__*/_react.default.createElement(_ui.PopperCard, (0, _extends2.default)({
        open: isFocused,
        anchorElement: thumbReference.current,
        popperProps: {
          disablePortal: true,
          modifiers: {
            preventOverflow: {
              boundariesElement: 'viewport'
            },
            hide: {
              enabled: false
            }
          }
        }
      }, popperCardProps), localValue)
    })
  );
};

exports.SliderWithPopper = SliderWithPopper;