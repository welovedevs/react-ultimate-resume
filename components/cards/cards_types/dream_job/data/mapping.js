"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDreamJobToJsonResume = exports.mapDreamJobFromJsonResume = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDreamJobFromJsonResume = function mapDreamJobFromJsonResume(jsonResume) {
  var _ref, _jsonResume$specific, _jsonResume$specific$, _jsonResume$specific2, _jsonResume$specific3, _jsonResume$specific4, _jsonResume$specific5, _jsonResume$specific6, _jsonResume$specific7, _jsonResume$specific8, _jsonResume$specific9;

  return {
    places: ((_ref = (_jsonResume$specific = jsonResume.specific) === null || _jsonResume$specific === void 0 ? void 0 : (_jsonResume$specific$ = _jsonResume$specific.dreamJob) === null || _jsonResume$specific$ === void 0 ? void 0 : _jsonResume$specific$.locations) !== null && _ref !== void 0 ? _ref : []).map(function (location) {
      return {
        name: location,
        id: (0, _v.default)()
      };
    }),
    perks: (_jsonResume$specific2 = jsonResume.specific) === null || _jsonResume$specific2 === void 0 ? void 0 : (_jsonResume$specific3 = _jsonResume$specific2.dreamJob) === null || _jsonResume$specific3 === void 0 ? void 0 : _jsonResume$specific3.perks,
    salary: (_jsonResume$specific4 = jsonResume.specific) === null || _jsonResume$specific4 === void 0 ? void 0 : (_jsonResume$specific5 = _jsonResume$specific4.dreamJob) === null || _jsonResume$specific5 === void 0 ? void 0 : _jsonResume$specific5.salary,
    remoteFrequency: (_jsonResume$specific6 = jsonResume.specific) === null || _jsonResume$specific6 === void 0 ? void 0 : (_jsonResume$specific7 = _jsonResume$specific6.dreamJob) === null || _jsonResume$specific7 === void 0 ? void 0 : _jsonResume$specific7.remoteFrequency,
    contractTypes: (_jsonResume$specific8 = jsonResume.specific) === null || _jsonResume$specific8 === void 0 ? void 0 : (_jsonResume$specific9 = _jsonResume$specific8.work) === null || _jsonResume$specific9 === void 0 ? void 0 : _jsonResume$specific9.contractTypes
  };
};

exports.mapDreamJobFromJsonResume = mapDreamJobFromJsonResume;

var mapDreamJobToJsonResume = function mapDreamJobToJsonResume(data) {
  var _data$places;

  return {
    specific: {
      dreamJob: {
        locations: (_data$places = data.places) === null || _data$places === void 0 ? void 0 : _data$places.map(function (place) {
          return place.name;
        }),
        perks: data.perks,
        salary: data.salary,
        remoteFrequency: data.remoteFrequency
      },
      work: {
        contractTypes: data.contractTypes
      }
    }
  };
};

exports.mapDreamJobToJsonResume = mapDreamJobToJsonResume;