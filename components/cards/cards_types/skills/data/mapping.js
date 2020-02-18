"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapSkillsToJsonResume = exports.mapSkillsFromJsonResume = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _v = _interopRequireDefault(require("uuid/v4"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapSkillsFromJsonResume = function mapSkillsFromJsonResume(jsonResume) {
  return {
    skills: ((jsonResume === null || jsonResume === void 0 ? void 0 : jsonResume.skills) || []).map(function (item, index) {
      return _objectSpread({}, item, {
        index: index,
        id: (0, _v.default)()
      });
    })
  };
};

exports.mapSkillsFromJsonResume = mapSkillsFromJsonResume;

var mapSkillsToJsonResume = function mapSkillsToJsonResume(newData) {
  return {
    skills: (newData === null || newData === void 0 ? void 0 : newData.skills) || []
  };
};

exports.mapSkillsToJsonResume = mapSkillsToJsonResume;