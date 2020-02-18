"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapWorkToJsonResume = exports.mapWorkFromJsonResume = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapWorkFromJsonResume = function mapWorkFromJsonResume(jsonResume) {
  var _jsonResume$work;

  return {
    work: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$work = jsonResume.work) === null || _jsonResume$work === void 0 ? void 0 : _jsonResume$work.map(function (work, index) {
      return _objectSpread({}, work, {
        // generating uuid for manipulating data if not present
        id: work.id || (0, _v.default)(),
        startDate: work.startDate && (0, _moment.default)(work.startDate, 'YYYY-MM-DD'),
        endDate: work.endDate && (0, _moment.default)(work.endDate, 'YYYY-MM-DD'),
        place: {
          name: work.location,
          placeId: work.placeId
        },
        stillEmployed: !work.endDate,
        index: index
      });
    })
  };
};

exports.mapWorkFromJsonResume = mapWorkFromJsonResume;

var mapWorkToJsonResume = function mapWorkToJsonResume(data) {
  var _data$work;

  return {
    work: (_data$work = data.work) === null || _data$work === void 0 ? void 0 : _data$work.map(function (work) {
      var _ref, _work$place, _work$startDate, _work$endDate;

      return _objectSpread({}, work, {
        location: (_ref = (_work$place = work.place) === null || _work$place === void 0 ? void 0 : _work$place.name) !== null && _ref !== void 0 ? _ref : work.location,
        startDate: (_work$startDate = work.startDate) === null || _work$startDate === void 0 ? void 0 : _work$startDate.format('YYYY-MM-DD'),
        endDate: (_work$endDate = work.endDate) === null || _work$endDate === void 0 ? void 0 : _work$endDate.format('YYYY-MM-DD')
      });
    })
  };
};

exports.mapWorkToJsonResume = mapWorkToJsonResume;