"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEME_SCHEMA = void 0;

var yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isHex = yup.string().matches(/^#[0-9a-f]{3,6}$/i, 'Color shade must be written using the hex color syntax.');
var SHADES_SCHEMA = Object.freeze(_objectSpread({}, [50, 100, 150, 200, 250, 300, 350, 400, 450, 550, 600, 650, 700, 750, 800, 850, 900].reduce(function (acc, shade) {
  return _objectSpread({}, acc, _defineProperty({}, shade, isHex.notRequired()));
}, {}), {
  500: isHex.required()
}));
var isExistingColorInPalette = yup.string().test('is-existing-color-in-palette', function (args) {
  return "Color `".concat(args.value, "` must be present in palette.");
}, function (value) {
  var _this$options$palette;

  return Boolean((_this$options$palette = this.options.palette) === null || _this$options$palette === void 0 ? void 0 : _this$options$palette[value]);
});
var CARD_VARIANT_SCHEMA = yup.object({
  backgroundColor: isExistingColorInPalette.required(),
  color: isExistingColorInPalette.required()
});
var THEME_SCHEMA = yup.object({
  palette: yup.lazy(function () {
    var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return yup.object(Object.keys(colors).reduce(function (acc, name) {
      return _objectSpread({}, acc, _defineProperty({}, name, yup.object(_objectSpread({}, SHADES_SCHEMA, {
        contrastDefaultColor: yup.string().required()
      }))));
    }, {}));
  }),
  miscellaneous: yup.object({
    backgroundColor: isHex.required(),
    color: isHex.required(),
    spacing: yup.number().required(),
    rounding: yup.number().required(),
    fontFamily: yup.array().of(yup.string())
  }),
  components: yup.object({
    banner: yup.object({
      overlayColor: isExistingColorInPalette.required(),
      imageSource: yup.string().required()
    }),
    cards: yup.object({
      default: CARD_VARIANT_SCHEMA,
      variants: yup.array().of(CARD_VARIANT_SCHEMA).required()
    })
  })
});
exports.THEME_SCHEMA = THEME_SCHEMA;