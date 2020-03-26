"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodingYears = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var CodingYears = function CodingYears(_ref) {
  var codingYears = _ref.codingYears;
  var codingYearsValue = (0, _react.useMemo)(function () {
    var numberValue = Number(codingYears);

    if (Number.isNaN(numberValue)) {
      return 0;
    }

    return numberValue;
  }, [codingYears]);

  if (codingYearsValue === 0) {
    return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.CodingYears.noExperience",
      defaultMessage: "I've just started coding"
    });
  }

  return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.CodingYears.value",
    defaultMessage: '{codingYears, plural, one {# year} other {# years} } coding',
    values: {
      codingYears: codingYears
    }
  });
};

exports.CodingYears = CodingYears;