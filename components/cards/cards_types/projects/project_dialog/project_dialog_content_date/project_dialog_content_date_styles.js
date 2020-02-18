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
  var spacing = theme.miscellaneous.spacing;
  return (0, _defineProperty2.default)({
    container: function container(_ref) {
      var isEditing = _ref.isEditing;
      return _objectSpread({
        marginBottom: spacing * 4
      }, !isEditing && {
        textAlign: 'center'
      });
    },
    typography: {
      fontSize: 32
    },
    datePicker: {
      cursor: 'pointer',
      marginLeft: spacing
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    datePicker: {
      marginLeft: 'unset'
    }
  });
};

exports.styles = styles;