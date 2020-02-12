"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStudiesToJsonResume = exports.mapStudiesFromJsonResume = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStudiesFromJsonResume = function mapStudiesFromJsonResume(jsonResume) {
  var _jsonResume$education;

  return {
    education: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$education = jsonResume.education) === null || _jsonResume$education === void 0 ? void 0 : _jsonResume$education.map(function (study) {
      return _objectSpread({}, study, {
        // generating uuid for manipulating data if not present
        id: study.id || (0, _v.default)(),
        startDate: (0, _moment.default)(study.startDate, 'YYYY-MM-DD'),
        endDate: (0, _moment.default)(study.endDate, 'YYYY-MM-DD')
      });
    })
  };
};

exports.mapStudiesFromJsonResume = mapStudiesFromJsonResume;

var mapStudiesToJsonResume = function mapStudiesToJsonResume(data) {
  var _data$education;

  return {
    education: (_data$education = data.education) === null || _data$education === void 0 ? void 0 : _data$education.map(function (study) {
      return _objectSpread({}, study, {
        startDate: study.startDate.format('YYYY-MM-DD'),
        endDate: study.endDate.format('YYYY-MM-DD')
      });
    })
  };
};

exports.mapStudiesToJsonResume = mapStudiesToJsonResume;