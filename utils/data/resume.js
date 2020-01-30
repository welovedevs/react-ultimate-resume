"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareJsonResume = void 0;

var _head = _interopRequireDefault(require("lodash/head"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var extractExperienceYears = function extractExperienceYears() {
  var works = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var oldestJob = (0, _head.default)(works.map(function (work) {
    return _objectSpread({}, work, {
      startMoment: (0, _moment.default)(work.startDate, 'YYYY-MM-DD'),
      endMoment: (0, _moment.default)(work.endDate, 'YYYY-MM-DD')
    });
  }).sort(function (_ref, _ref2) {
    var momentA = _ref.startMoment;
    var momentB = _ref2.startMoment;
    return momentA - momentB;
  }));

  if (!oldestJob) {
    return null;
  }

  return (0, _moment.default)().diff(oldestJob.startMoment, 'years');
};

var prepareJsonResume = function prepareJsonResume(jsonResume) {
  var experienceYears = extractExperienceYears(jsonResume.work);
  return (0, _merge.default)({}, jsonResume, {
    specific: {
      work: {
        experienceYears: experienceYears
      }
    }
  });
};

exports.prepareJsonResume = prepareJsonResume;