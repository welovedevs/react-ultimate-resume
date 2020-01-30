"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TechnologiesOrderer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _technologies_orderer_styles = require("./technologies_orderer_styles");

var _ui = require("@wld/ui");

var _reactSortableHoc = require("react-sortable-hoc");

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _use_technologies = require("../../../hooks/technologies/use_technologies");

var _slider_with_popper = require("../../slider_with_popper/slider_with_popper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TrashIcon = function TrashIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

TrashIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};

var MoveIcon = function MoveIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M3.52 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18V6h-18z"
  }));
};

MoveIcon.defaultProps = {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "#181818",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_technologies_orderer_styles.styles);
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var classes = _ref.classes;
  return _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  });
});
var TechologyRow = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
  var item = _ref2.item,
      onRemove = _ref2.onRemove,
      onChange = _ref2.onChange,
      classes = _ref2.classes,
      index = _ref2.technologyIndex;

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var sliderChange = (0, _react.useCallback)(function (e) {
    onChange(_objectSpread({}, item, {
      value: Number(e.target.value)
    }));
  }, [item, onChange]);
  var imgUrl = (0, _react.useMemo)(function () {
    var technology = technologies === null || technologies === void 0 ? void 0 : technologies[item.name];

    if (!technology) {
      return null;
    }

    if (technology.handle) {
      return 'https://process.filestackapi.com/output=format:png/resize=width:48/compress/' + technology.handle;
    }

    return technology.url;
  }, [technologies, item]);
  return _react.default.createElement(_ui.ListItem, {
    className: (0, _classnames.default)(classes.listItem)
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement(_ui.Card, {
    className: classes.logoWrapper
  }, _react.default.createElement("img", {
    src: imgUrl,
    className: classes.logo
  })), _react.default.createElement("div", {
    className: classes.textWrapper
  }, _react.default.createElement(_ui.Typography, {
    className: classes.technologyName
  }, item.name), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "skill_value_".concat(item.id),
    value: item.value,
    onChange: sliderChange,
    min: 0,
    max: 100,
    debounce: 50
  })), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Supprimer"
    })
  }, _react.default.createElement(_ui.Button, {
    className: classes.button,
    onClick: function onClick() {
      return onRemove(item.id);
    }
  }, _react.default.createElement(TrashIcon, {
    className: classes.trash
  }))));
});
var SortableTechnologiesItems = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
  var items = _ref3.items,
      onDelete = _ref3.onDelete,
      onItemChange = _ref3.onItemChange,
      schools = _ref3.schools,
      classes = _ref3.classes,
      className = _ref3.className;
  return _react.default.createElement(_ui.List, {
    className: className
  }, items.map(function (item, index) {
    return _react.default.createElement(TechologyRow, _extends({
      key: "technologies_orderer_".concat(item.id),
      onRemove: onDelete,
      id: item.id,
      onChange: onItemChange,
      technologyIndex: index
    }, {
      index: index,
      item: item,
      schools: schools,
      classes: classes
    }));
  }));
});

var TechnologiesOrderer = function TechnologiesOrderer(_ref4) {
  var items = _ref4.items,
      onChange = _ref4.onChange,
      onDelete = _ref4.onDelete,
      className = _ref4.className,
      onItemChange = _ref4.onItemChange;
  var classes = useStyles();
  var move = (0, _react.useCallback)(function (_ref5) {
    var oldIndex = _ref5.oldIndex,
        newIndex = _ref5.newIndex;
    onChange((0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [items, onChange]);
  return _react.default.createElement(SortableTechnologiesItems, _extends({
    helperClass: (0, _classnames.default)(classes.sortableHelper),
    className: className,
    items: items,
    onSortEnd: move,
    distance: 20,
    useDragHandle: true,
    lockAxis: "y",
    name: "education",
    onItemChange: onItemChange,
    onDelete: onDelete
  }, {
    classes: classes
  }));
};

exports.TechnologiesOrderer = TechnologiesOrderer;