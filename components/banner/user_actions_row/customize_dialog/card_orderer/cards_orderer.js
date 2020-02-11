"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardsOrderer = void 0;

var _ui = require("@wld/ui");

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _reactIntl = require("react-intl");

var _react = _interopRequireWildcard(require("react"));

var _cards_orderer_styles = require("./cards_orderer_styles");

var _reactJss = require("react-jss");

var _reactSortableHoc = require("react-sortable-hoc");

var _card_stub = require("../card_stub/card_stub");

var _cards_order = require("../../../../cards/utils/cards_order");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_cards_orderer_styles.styles);
var SortableCard = (0, _reactSortableHoc.SortableElement)((0, _react.memo)(_card_stub.CardStub));
var SortableCards = (0, _reactSortableHoc.SortableContainer)(function (_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onItemChanged = _ref.onItemChanged;
  var classes = useStyles();
  return _react.default.createElement(_ui.List, {
    component: "nav",
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

var CardsOrderer = function CardsOrderer(_ref2) {
  var onChange = _ref2.onChange,
      _ref2$value = _ref2.value,
      cardsOrder = _ref2$value === void 0 ? _cards_order.DEFAULT_CARD_ORDER : _ref2$value;
  var classes = useStyles();
  var onMove = (0, _react.useCallback)(function (_ref3) {
    var oldIndex = _ref3.oldIndex,
        newIndex = _ref3.newIndex;
    onChange((0, _reactSortableHoc.arrayMove)((0, _cloneDeep.default)(cardsOrder), oldIndex, newIndex));
  }, [cardsOrder]);
  var onItemChanged = (0, _react.useCallback)(function (index, value) {
    console.log({
      index: index,
      value: value
    });
    var newValue = (0, _cloneDeep.default)(cardsOrder);
    newValue[index] = value;
    onChange(newValue);
  }, [cardsOrder]);
  return _react.default.createElement("div", null, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.title
    },
    component: "h3",
    variant: "h4",
    color: "dark"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: 'CardsOrderer.field.title',
    defaultMessage: 'Order your profile cards'
  })), _react.default.createElement(SortableCards, {
    lockToContainerEdges: true,
    axis: "xy",
    helperClass: classes.sortableHelper,
    onSortEnd: onMove,
    items: cardsOrder,
    onItemChanged: onItemChanged,
    distance: 15,
    classes: classes
  }));
};

exports.CardsOrderer = CardsOrderer;