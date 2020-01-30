"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TechnologiesPicker = void 0;

var _use_technologies = require("../../../hooks/technologies/use_technologies");

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _technologies_picker_styles = require("./technologies_picker_styles");

var _ui = require("@wld/ui");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_technologies_picker_styles.styles);

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
    console.log({
      selectedItem: selectedItem
    });

    if (!selectedItem) {
      onAdd(item.name);
      return;
    }

    onDelete(selectedItem.id);
  }, [selectedItem, onAdd, onDelete]);
  var imgUrl = (0, _react.useMemo)(function () {
    if (item.handle) {
      return 'https://process.filestackapi.com/output=format:png/resize=width:48/compress/' + item.handle;
    }

    return item.url;
  }, [item]);
  return _react.default.createElement("div", {
    className: classes.technologyItem,
    onClick: onClick
  }, _react.default.createElement(_ui.Card, {
    className: classes.technologyLogoWrapper
  }, _react.default.createElement("img", {
    src: imgUrl,
    className: classes.technologyLogo
  }), selectedItem && _react.default.createElement("span", {
    className: classes.selectedTechnologyStub
  }, selectedItem.index + 1)), _react.default.createElement(_ui.Typography, {
    variant: "tag",
    className: classes.itemName
  }, item.name));
};

var TechnologiesPicker = function TechnologiesPicker(_ref3) {
  var selectedItems = _ref3.selectedItems,
      onAdd = _ref3.onAdd,
      onDelete = _ref3.onDelete,
      className = _ref3.className;
  var classes = useStyles();

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var displayedItems = (0, _react.useMemo)(function () {
    return Object.values(technologies !== null && technologies !== void 0 ? technologies : {}).filter(function (_ref4) {
      var name = _ref4.name;
      return name.toLowerCase().includes(filter.toLowerCase());
    }).slice(0, 36);
  }, [technologies, filter]);
  var setFilterValue = (0, _react.useCallback)(function (e) {
    return setFilter(e.target.value);
  }, []);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, className)
  }, _react.default.createElement(_ui.TextField, {
    className: classes.textField,
    value: filter,
    onChange: setFilterValue
  }), _react.default.createElement("div", {
    className: classes.technologiesList
  }, displayedItems.map(function (item, index) {
    return _react.default.createElement(TechnologyItem, {
      selectedItems: selectedItems,
      classes: classes,
      key: "technology_".concat(item.name, "_").concat(index),
      item: item,
      onAdd: onAdd,
      onDelete: onDelete
    });
  })));
};

exports.TechnologiesPicker = TechnologiesPicker;