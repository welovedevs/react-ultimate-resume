"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    container: {
      display: 'flex',
      height: '100%'
    },
    column: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    allTechnologies: {
      flex: 1.25,
      marginLeft: spacing * 2
    },
    divider: {
      backgroundColor: palette.dark[100],
      margin: [0, spacing * 2, 0, spacing * 4]
    },
    technologiesList: _objectSpread({
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingRight: spacing * 2
    }, (0, _styles_utils.withCustomVerticalScrollbar)()),
    selectedTechnologies: {
      flex: 0.75
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    allTechnologies: {
      width: '100%'
    }
  });
};

exports.styles = styles;