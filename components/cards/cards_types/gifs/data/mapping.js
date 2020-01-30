"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapInterestsToJsonResume = exports.mapInterestsFromJsonResume = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapInterestsFromJsonResume = function mapInterestsFromJsonResume(jsonResume) {
  var _jsonResume$interests;

  return {
    interests: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$interests = jsonResume.interests) === null || _jsonResume$interests === void 0 ? void 0 : _jsonResume$interests.map(function (interest, index) {
      return _objectSpread({}, interest, {
        //generating uuid for manipulating data if not present
        id: interest.id || (0, _v.default)(),
        index: index
      });
    })
  };
};

exports.mapInterestsFromJsonResume = mapInterestsFromJsonResume;

var mapInterestsToJsonResume = function mapInterestsToJsonResume(data) {
  return {
    interests: data.interests
  };
};

exports.mapInterestsToJsonResume = mapInterestsToJsonResume;