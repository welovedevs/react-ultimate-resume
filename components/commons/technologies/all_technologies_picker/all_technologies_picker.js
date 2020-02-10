"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllTechnologiesPicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _useDebounce3 = require("use-debounce");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _use_technologies = require("../../../hooks/technologies/use_technologies");

var _all_technologies_picker_spring_props = require("./all_technologies_picker_spring_props");

var _all_technologies_picker_styles = require("./all_technologies_picker_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_all_technologies_picker_styles.styles);

var TechnologyItem = function TechnologyItem(_ref) {
  var item = _ref.item,
      classes = _ref.classes,
      _ref$selectedItems = _ref.selectedItems,
      selectedItems = _ref$selectedItems === void 0 ? [] : _ref$selectedItems,
      onAdd = _ref.onAdd,
      onDelete = _ref.onDelete;
  var selectedItem = (0, _react.useMemo)(function () {
    return selectedItems.find(function (_ref2) {
      var name = _ref2.name;
      return name === item.name;
    });
  }, [selectedItems, item]);
  var onClick = (0, _react.useCallback)(function () {
    if (!selectedItem) {
      onAdd(item.name);
      return;
    }

    onDelete(selectedItem.id);
  }, [selectedItem, onAdd, onDelete]);
  var imgUrl = (0, _react.useMemo)(function () {
    if (item.handle) {
      return "https://process.filestackapi.com/".concat(item.handle);
    }

    return item.url;
  }, [item]);
  var selectedItemLayerTransitions = (0, _reactSpring.useTransition)(selectedItem, function (selected) {
    return "selected_item_layer_".concat(selected === null || selected === void 0 ? void 0 : selected.name);
  }, _all_technologies_picker_spring_props.SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS);
  return _react.default.createElement("button", {
    className: classes.technologyItem,
    type: "button",
    onClick: onClick
  }, _react.default.createElement(_ui.Card, {
    customClasses: {
      container: classes.technologyImageContainer
    }
  }, _react.default.createElement("img", {
    src: imgUrl,
    alt: item.name,
    className: classes.technologyImage
  }), selectedItemLayerTransitions.map(function (_ref3) {
    var selected = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return selected && _react.default.createElement(_reactSpring.animated.div, {
      key: key,
      className: classes.selectedTechnologyLayer,
      style: props
    }, _react.default.createElement(_ui.Typography, {
      color: "light",
      variant: "h3"
    }, selected.index + 1));
  })), _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.typography
    }
  }, item.name));
};

var AllTechnologiesPickerComponent = function AllTechnologiesPickerComponent(_ref4) {
  var selectedItems = _ref4.selectedItems,
      onAdd = _ref4.onAdd,
      onDelete = _ref4.onDelete,
      _ref4$classes = _ref4.classes,
      receivedClasses = _ref4$classes === void 0 ? {} : _ref4$classes;
  var classes = useStyles();
  var animationEnded = (0, _react.useRef)(false);
  var animationReference = (0, _react.useRef)();

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useDebounce = (0, _useDebounce3.useDebounce)(query, 200),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedQuery = _useDebounce2[0];

  var displayedItems = (0, _react.useMemo)(function () {
    return Object.values(technologies !== null && technologies !== void 0 ? technologies : {}).filter(function (_ref5) {
      var name = _ref5.name,
          tags = _ref5.tags;
      return [].concat(_toConsumableArray(tags !== null && tags !== void 0 ? tags : []), [name]).some(function (value) {
        return value.toLowerCase().includes(debouncedQuery.toLowerCase());
      });
    }).slice(0, 35);
  }, [technologies, debouncedQuery]);
  var handleTextFieldChange = (0, _react.useCallback)(function (event) {
    return setQuery(event.target.value);
  }, []);
  var displayedItemsTransitions = (0, _reactSpring.useTransition)(!animationEnded.current ? displayedItems : null, function (item) {
    return "technology_".concat(item === null || item === void 0 ? void 0 : item.name);
  }, _objectSpread({}, _all_technologies_picker_spring_props.ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS, {
    trail: 1250 / displayedItems.length,
    onRest: function () {
      var _onRest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 200);
                });

              case 2:
                animationEnded.current = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onRest() {
        return _onRest.apply(this, arguments);
      }

      return onRest;
    }(),
    ref: animationReference
  }));
  (0, _reactSpring.useChain)([animationReference], [0.35, 0]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, _react.default.createElement(_ui.TextField, {
    customClasses: {
      container: classes.textField
    },
    variant: "outlined",
    value: query,
    onChange: handleTextFieldChange,
    placeholder: "Mobile, Javascript, etc..."
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.technologiesList, receivedClasses.technologiesList)
  }, (animationEnded.current ? displayedItems : displayedItemsTransitions).map(function (values, index) {
    var item = animationEnded.current ? values : values.item;

    var technologyItem = _react.default.createElement(TechnologyItem, {
      key: "technology_".concat(item.name, "_").concat(index),
      selectedItems: selectedItems,
      item: item,
      onAdd: onAdd,
      onDelete: onDelete,
      classes: classes
    });

    if (!animationEnded.current) {
      var key = values.key,
          props = values.props;
      return _react.default.createElement(_reactSpring.animated.div, {
        key: key,
        style: props
      }, technologyItem);
    }

    return technologyItem;
  })));
};

var AllTechnologiesPicker = AllTechnologiesPickerComponent;
exports.AllTechnologiesPicker = AllTechnologiesPicker;