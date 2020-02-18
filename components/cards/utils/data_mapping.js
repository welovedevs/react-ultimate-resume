"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatObjectToJsonResume = exports.JsonResumeToFlatObject = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

var JsonResumeToFlatObject = function JsonResumeToFlatObject(source, dataMapping) {
  return Object.entries(dataMapping).reduce(function (acc, _ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        path = _ref2[1];

    (0, _set.default)(acc, key, (0, _get.default)(source, path));
    return acc;
  }, {});
};

exports.JsonResumeToFlatObject = JsonResumeToFlatObject;

var FlatObjectToJsonResume = function FlatObjectToJsonResume(data, dataMapping) {
  return Object.entries(dataMapping).reduce(function (acc, _ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        key = _ref4[0],
        path = _ref4[1];

    (0, _set.default)(acc, path, (0, _get.default)(data, key));
    return acc;
  }, {});
};

exports.FlatObjectToJsonResume = FlatObjectToJsonResume;