"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatObjectToJsonResume = exports.JsonResumeToFlatObject = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _set = _interopRequireDefault(require("lodash/set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var JsonResumeToFlatObject = function JsonResumeToFlatObject(source, dataMapping) {
  return Object.entries(dataMapping).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        path = _ref2[1];

    (0, _set.default)(acc, key, (0, _get.default)(source, path));
    return acc;
  }, {});
};

exports.JsonResumeToFlatObject = JsonResumeToFlatObject;

var FlatObjectToJsonResume = function FlatObjectToJsonResume(data, dataMapping) {
  return Object.entries(dataMapping).reduce(function (acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        path = _ref4[1];

    (0, _set.default)(acc, path, (0, _get.default)(data, key));
    return acc;
  }, {});
};

exports.FlatObjectToJsonResume = FlatObjectToJsonResume;