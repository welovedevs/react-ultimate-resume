"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCardBack = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoteWork = function RemoteWork(_ref) {
  var remoteWork = _ref.remoteWork;

  if (!remoteWork) {
    return null;
  }

  if (remoteWork === 'NEVER') {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.Location",
      defaultMessage: "Not looking for remote work"
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Location",
    defaultMessage: "Looking for remote work"
  });
};

var BasicCardBack = function BasicCardBack(_ref2) {
  var data = _ref2.data;
  var currentCity = data.currentCity,
      remoteWork = data.remoteWork,
      experienceYears = data.experienceYears,
      contractType = data.contractType,
      studiesLevel = data.studiesLevel,
      codingYears = data.codingYears,
      codingReason = data.codingReason;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Location",
    defaultMessage: 'based in {currentCity}',
    values: {
      currentCity: currentCity
    }
  }), _react.default.createElement("div", null, _react.default.createElement(RemoteWork, {
    remoteWork: remoteWork
  }))), _react.default.createElement("div", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Experience",
    defaultMessage: '{experienceYears} years of experience',
    values: {
      experienceYears: experienceYears
    }
  }), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.ContractType",
    defaultMessage: 'Looking for a {contractType} contract',
    values: {
      contractType: contractType
    }
  })), _react.default.createElement("div", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.StudiesLevel",
    defaultMessage: '{studiesLevel} years of higher education',
    values: {
      studiesLevel: studiesLevel
    }
  })), _react.default.createElement("div", null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.CodingYears",
    defaultMessage: '{codingYears} years coding',
    values: {
      codingYears: codingYears
    }
  })), _react.default.createElement("div", null, codingReason));
};

exports.BasicCardBack = BasicCardBack;