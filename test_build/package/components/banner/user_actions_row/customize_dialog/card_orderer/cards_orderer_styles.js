"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CARD_DIMENSION = 200;

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: _objectSpread({
      flex: 1,
      overflow: 'auto'
    }, (0, _styles_utils.withCustomVerticalScrollbar)('transparent'), {
      display: 'flex',
      justifyContent: 'center'
    }),
    cardsContainer: {
      width: (CARD_DIMENSION + 2 * spacing) * 3,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    sortableHelper: {
      zIndex: 10000000000,
      width: CARD_DIMENSION,
      height: CARD_DIMENSION
    }
  };
};

exports.styles = styles;