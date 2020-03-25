"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsOrderer = exports.Context = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSortableHoc = require("react-sortable-hoc");

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _ui = require("@wld/ui");

var _card_stub = require("../card_stub/card_stub");

var _cards_order = require("../../../../cards/utils/cards_order");

var _cards_orderer_styles = require("./cards_orderer_styles");

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
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isSorting = _useState2[0],
      setIsSorting = _useState2[1];

  var onMove = (0, _react.useCallback)(function (_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;
    setIsSorting(false);
    onChange((0, _reactSortableHoc.arrayMove)((0, _cloneDeep.default)(cardsOrder), oldIndex, newIndex));
  }, [cardsOrder, onChange]);
  var onItemChanged = (0, _react.useCallback)(function (index, value) {
    var newValue = (0, _cloneDeep.default)(cardsOrder);
    newValue[index] = value;
    onChange(newValue);
  }, [cardsOrder, onChange]);
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