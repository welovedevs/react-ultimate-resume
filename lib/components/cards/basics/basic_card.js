"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _card = require("../utils/card");

var _front_content = require("./front_content");

var _back_content = require("./back_content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapData = function mapData(data) {
  var _data$work$, _data$basics, _data$basics$location, _data$specific, _data$specific2, _data$specific2$work, _data$specific3, _data$specific3$work, _data$specific4, _data$specific4$educa, _data$specific5, _data$specific5$work, _data$specific6, _data$specific6$work;

  return {
    currentPosition: data === null || data === void 0 ? void 0 : (_data$work$ = data.work[0]) === null || _data$work$ === void 0 ? void 0 : _data$work$.position,
    currentCity: (_data$basics = data.basics) === null || _data$basics === void 0 ? void 0 : (_data$basics$location = _data$basics.location) === null || _data$basics$location === void 0 ? void 0 : _data$basics$location.city,
    remoteWork: (_data$specific = data.specific) === null || _data$specific === void 0 ? void 0 : _data$specific.work.remote,
    experienceYears: (_data$specific2 = data.specific) === null || _data$specific2 === void 0 ? void 0 : (_data$specific2$work = _data$specific2.work) === null || _data$specific2$work === void 0 ? void 0 : _data$specific2$work.experienceYears,
    contractType: (_data$specific3 = data.specific) === null || _data$specific3 === void 0 ? void 0 : (_data$specific3$work = _data$specific3.work) === null || _data$specific3$work === void 0 ? void 0 : _data$specific3$work.contractType,
    studiesLevel: (_data$specific4 = data.specific) === null || _data$specific4 === void 0 ? void 0 : (_data$specific4$educa = _data$specific4.education) === null || _data$specific4$educa === void 0 ? void 0 : _data$specific4$educa.studiesLevel,
    codingYears: (_data$specific5 = data.specific) === null || _data$specific5 === void 0 ? void 0 : (_data$specific5$work = _data$specific5.work) === null || _data$specific5$work === void 0 ? void 0 : _data$specific5$work.codingYears,
    codingReason: (_data$specific6 = data.specific) === null || _data$specific6 === void 0 ? void 0 : (_data$specific6$work = _data$specific6.work) === null || _data$specific6$work === void 0 ? void 0 : _data$specific6$work.codingReason
  };
};

var BasicCard = function BasicCard(_ref) {
  var data = _ref.data,
      variant = _ref.variant;
  return _react.default.createElement(_card.Card, {
    data: mapData(data),
    FrontComponent: _front_content.BasicCardFront,
    BackComponent: _back_content.BasicCardBack,
    variant: variant
  });
};

exports.BasicCard = BasicCard;