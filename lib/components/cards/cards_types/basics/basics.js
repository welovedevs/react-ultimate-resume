"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _basics_front = require("./basics_front/basics_front");

var _basics_back = require("./basics_back/basics_back");

var _profile = require("../../../profile");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var BasicsCardComponent = function BasicsCardComponent(_ref) {
  var variant = _ref.variant,
      flipped = _ref.flipped;

  var _useContext = (0, _react.useContext)(_profile.DeveloperProfileContext),
      data = _useContext.data;

  var mappedData = (0, _react.useMemo)(function () {
    return mapData(data);
  }, [data]);
  return _react.default.createElement(_profile_card.ProfileCard, {
    data: mappedData,
    front: _basics_front.BasicsFront,
    back: _basics_back.BasicsBack,
    variant: variant,
    flipped: flipped
  });
};

var BasicsCard = BasicsCardComponent;
exports.BasicsCard = BasicsCard;