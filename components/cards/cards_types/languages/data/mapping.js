"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapLanguagesToJsonResume = exports.mapLanguagesFromJsonResume = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _v = _interopRequireDefault(require("uuid/v4"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapLanguagesFromJsonResume = function mapLanguagesFromJsonResume(jsonResume) {
  var _jsonResume$languages;

  return {
    languages: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$languages = jsonResume.languages) === null || _jsonResume$languages === void 0 ? void 0 : _jsonResume$languages.map(function (language, index) {
      return _objectSpread({}, language, {
        // generating uuid for manipulating data if not present
        id: language.id || (0, _v.default)(),
        index: index
      });
    })
  };
};

exports.mapLanguagesFromJsonResume = mapLanguagesFromJsonResume;

var mapLanguagesToJsonResume = function mapLanguagesToJsonResume(data) {
  return {
    languages: data.languages
  };
};

exports.mapLanguagesToJsonResume = mapLanguagesToJsonResume;