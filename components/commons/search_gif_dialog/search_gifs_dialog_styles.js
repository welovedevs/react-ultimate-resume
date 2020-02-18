"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    paper: {
      width: '90%',
      maxWidth: [760, '!important']
    },
    content: _objectSpread({}, (0, _styles_utils.withCustomVerticalScrollbar)()),
    textField: {
      marginBottom: spacing * 4
    },
    results: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    imageContainer: {
      height: 200,
      width: 200,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: palette.dark[50],
      margin: spacing * 2
    },
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }
  };
};

exports.styles = styles;