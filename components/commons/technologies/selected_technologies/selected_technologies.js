"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedTechnologies = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSortableHoc = require("react-sortable-hoc");

var _ui = require("@wld/ui");

var _slider_with_popper = require("../../slider_with_popper/slider_with_popper");

var _use_technologies = require("../../../hooks/technologies/use_technologies");

var _selected_technologies_styles = require("./selected_technologies_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DeleteIcon = function DeleteIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

DeleteIcon.defaultProps = {
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
var useStyles = (0, _reactJss.createUseStyles)(_selected_technologies_styles.styles);
var TechnologyRow = (0, _reactSortableHoc.SortableElement)(function (_ref) {
  var item = _ref.item,
      onRemove = _ref.onRemove,
      onChange = _ref.onChange,
      classes = _ref.classes,
      itemsLength = _ref.itemsLength,
      technologyIndex = _ref.technologyIndex;

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
      return "https://process.filestackapi.com/".concat(technology.handle);
    }

    return technology.url;
  }, [technologies, item]);
  return _react.default.createElement("li", {
    className: classes.listItem,
    style: {
      zIndex: itemsLength - technologyIndex
    }
  }, _react.default.createElement(DragHandle, {
    classes: classes
  }), _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement(_ui.Tooltip, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.delete",
      defaultMessage: "Delete"
    })
  }, _react.default.createElement("button", {
    className: classes.removeButton,
    type: "button",
    onClick: function onClick() {
      return onRemove(item.id);
    }
  }, _react.default.createElement(DeleteIcon, {
    className: classes.removeIcon
  }))), _react.default.createElement("div", {
    className: classes.divider
  }), _react.default.createElement(_ui.Card, {
    className: classes.logo
  }, _react.default.createElement("img", {
    className: classes.logoImage,
    alt: item.name,
    src: imgUrl
  })), _react.default.createElement("div", {
    className: classes.textWrapper
  }, _react.default.createElement(_ui.Typography, {
    color: "dark",
    variant: "label"
  }, item.name), _react.default.createElement("div", {
    className: classes.sliderValueContainer
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.sliderValue
    },
    color: "dark",
    variant: "label"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Skills.Dialog.SliderValue",
    defaultMessage: "{valueNode}%",
    values: {
      valueNode: _react.default.createElement("span", {
        className: classes.bolden
      }, item.value)
    }
  })), _react.default.createElement(_slider_with_popper.SliderWithPopper, {
    color: "primary",
    name: "skill_value_".concat(item.id),
    value: item.value,
    onChange: sliderChange,
    min: 0,
    max: 100,
    debounce: 50,
    classes: {
      container: classes.slider
    },
    popperCardProps: {
      customClasses: {
        popper: classes.popper
      }
    }
  }))));
});
var SortableTechnologies = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
  var items = _ref2.items,
      onDelete = _ref2.onDelete,
      onItemChange = _ref2.onItemChange,
      schools = _ref2.schools,
      classes = _ref2.classes,
      className = _ref2.className,
      receivedClasses = _ref2.receivedClasses,
      itemsLength = _ref2.itemsLength;
  return _react.default.createElement(_ui.List, {
    className: (0, _classnames.default)(classes.container, className, receivedClasses.container)
  }, items.map(function (item, index) {
    return _react.default.createElement(TechnologyRow, {
      key: "selected_technology_row_".concat(item.id),
      onRemove: onDelete,
      id: item.id,
      onChange: onItemChange,
      technologyIndex: index,
      index: index,
      item: item,
      schools: schools,
      receivedClasses: receivedClasses,
      classes: classes,
      itemsLength: itemsLength
    });
  }));
});
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref3) {
  var classes = _ref3.classes;
  return _react.default.createElement("button", {
    className: classes.dragHandleButton,
    type: "button"
  }, _react.default.createElement(MoveIcon, {
    className: classes.dragHandle
  }));
});

var SelectedTechnologiesComponent = function SelectedTechnologiesComponent(_ref4) {
  var items = _ref4.items,
      onChange = _ref4.onChange,
      onDelete = _ref4.onDelete,
      className = _ref4.className,
      onItemChange = _ref4.onItemChange,
      _ref4$classes = _ref4.classes,
      receivedClasses = _ref4$classes === void 0 ? {} : _ref4$classes;
  var classes = useStyles();
  var itemsLength = (0, _react.useMemo)(function () {
    return items.length;
  }, [items]);
  var move = (0, _react.useCallback)(function (_ref5) {
    var oldIndex = _ref5.oldIndex,
        newIndex = _ref5.newIndex;
    onChange((0, _reactSortableHoc.arrayMove)(items, oldIndex, newIndex).map(function (data, index) {
      return _objectSpread({}, data, {
        index: index
      });
    }));
  }, [items, onChange]);
  return _react.default.createElement(SortableTechnologies, {
    lockToContainerEdges: true,
    className: className,
    helperClass: classes.sortableHelper,
    items: items,
    onSortEnd: move,
    distance: 20,
    useDragHandle: true,
    lockAxis: "y",
    name: "education",
    onItemChange: onItemChange,
    onDelete: onDelete,
    receivedClasses: receivedClasses,
    itemsLength: itemsLength,
    classes: classes
  });
};

var SelectedTechnologies = SelectedTechnologiesComponent;
exports.SelectedTechnologies = SelectedTechnologies;