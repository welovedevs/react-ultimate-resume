"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllTechnologiesPicker = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _useDebounce3 = require("use-debounce");

var _reactIntl = require("react-intl");

var _reactSpring = require("react-spring");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery/useMediaQuery"));

var _ui = require("@wld/ui");

var _use_technologies = require("../../../hooks/technologies/use_technologies");

var _all_technologies_picker_spring_props = require("./all_technologies_picker_spring_props");

var _checkbox_group = require("../../checkbox_field/checkbox_group");

var _all_technologies_picker_styles = require("./all_technologies_picker_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  var classes = useStyles();
  var animationEnded = (0, _react.useRef)(false);
  var animationReference = (0, _react.useRef)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      onlySelected = _useState2[0],
      setOnlySelected = _useState2[1];

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useDebounce = (0, _useDebounce3.useDebounce)(query, 200),
      _useDebounce2 = (0, _slicedToArray2.default)(_useDebounce, 1),
      debouncedQuery = _useDebounce2[0];

  var displayedItems = (0, _react.useMemo)(function () {
    return Object.values(technologies !== null && technologies !== void 0 ? technologies : {}).filter(function (_ref5) {
      var name = _ref5.name;

      if (!onlySelected) {
        return true;
      }

      return selectedItems.some(function (_ref6) {
        var selectedName = _ref6.name;
        return selectedName === name;
      });
    }).filter(function (_ref7) {
      var name = _ref7.name,
          tags = _ref7.tags;
      return [].concat((0, _toConsumableArray2.default)(tags !== null && tags !== void 0 ? tags : []), [name]).some(function (value) {
        return value.toLowerCase().includes(debouncedQuery.toLowerCase());
      });
    }).slice(0, 35);
  }, [technologies, debouncedQuery, onlySelected]);
  var handleTextFieldChange = (0, _react.useCallback)(function (event) {
    return setQuery(event.target.value);
  }, []);
  var displayedItemsTransitions = (0, _reactSpring.useTransition)(!animationEnded.current ? displayedItems : null, function (item) {
    return "technology_".concat(item === null || item === void 0 ? void 0 : item.name);
  }, _objectSpread({}, _all_technologies_picker_spring_props.ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS, {
    trail: 1250 / displayedItems.length,
    onRest: function () {
      var _onRest = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
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
  var toggleOtherPerk = (0, _react.useCallback)(function () {
    setOnlySelected(!onlySelected);
  }, [onlySelected]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, _react.default.createElement(_ui.TextField, {
    customClasses: {
      container: classes.textField
    },
    fullWidth: isMobile,
    variant: "outlined",
    value: query,
    onChange: handleTextFieldChange,
    placeholder: "Mobile, Javascript, etc..."
  }), isMobile && _react.default.createElement(_checkbox_group.CheckboxField, {
    title: _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.EditDialog.onlySelected",
      defaultMessage: "Only selected"
    })),
    onClick: toggleOtherPerk,
    checked: onlySelected,
    variant: "outlined",
    color: "secondary"
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