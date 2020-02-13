"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsOrderer = exports.Context = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSortableHoc = require("react-sortable-hoc");

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _ui = require("@wld/ui");

var _card_stub = require("../card_stub/card_stub");

var _cards_order = require("../../../../cards/utils/cards_order");

var _cards_orderer_styles = require("./cards_orderer_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_cards_orderer_styles.styles);
var SortableCard = (0, _reactSortableHoc.SortableElement)((0, _react.memo)(_card_stub.CardStub));
var Context = (0, _react.createContext)({});
exports.Context = Context;

var CardsOrdererComponent = function CardsOrdererComponent(_ref) {
  var onChange = _ref.onChange,
      _ref$value = _ref.value,
      cardsOrder = _ref$value === void 0 ? _cards_order.DEFAULT_CARD_ORDER : _ref$value;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSorting = _useState2[0],
      setIsSorting = _useState2[1];

  var onMove = (0, _react.useCallback)(function (_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;
    setIsSorting(false);
    onChange((0, _reactSortableHoc.arrayMove)((0, _cloneDeep.default)(cardsOrder), oldIndex, newIndex));
  }, [cardsOrder]);
  var onItemChanged = (0, _react.useCallback)(function (index, value) {
    var newValue = (0, _cloneDeep.default)(cardsOrder);
    newValue[index] = value;
    onChange(newValue);
  }, [cardsOrder]);
  var handleSortStart = (0, _react.useCallback)(function () {
    return setIsSorting(true);
  }, []);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(Context.Provider, {
    value: {
      isSorting: isSorting
    }
  }, _react.default.createElement(SortableCards, {
    lockToContainerEdges: true,
    axis: "xy",
    helperClass: classes.sortableHelper,
    items: cardsOrder,
    onItemChanged: onItemChanged,
    distance: 15,
    onSortStart: handleSortStart,
    onSortEnd: onMove,
    classes: classes
  })));
};

var SortableCards = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
  var _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items,
      onItemChanged = _ref3.onItemChanged;
  var classes = useStyles();
  return _react.default.createElement(_ui.List, {
    className: classes.cardsContainer
  }, items.map(function (item, index) {
    return _react.default.createElement(SortableCard, {
      onItemChanged: onItemChanged,
      index: index,
      cardIndex: index,
      className: classes.sortableCard,
      key: "card_orderer_".concat(index, "_").concat(item.type),
      data: item
    });
  }));
});
var CardsOrderer = CardsOrdererComponent;
exports.CardsOrderer = CardsOrderer;