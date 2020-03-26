"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesLevel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var StudiesLevel = function StudiesLevel(_ref) {
  var studiesLevel = _ref.studiesLevel;
  var studiesLevelValue = (0, _react.useMemo)(function () {
    var numberValue = Number(studiesLevel);

    if (Number.isNaN(numberValue)) {
      return 0;
    }

    return numberValue;
  }, [studiesLevel]);

  if (studiesLevelValue === 0) {
    return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.StudiesLevel.noHigherEducation",
      defaultMessage: "Did not pursue higher education",
      values: {
        studiesLevel: studiesLevelValue
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.StudiesLevel.value",
    defaultMessage: '{studiesLevel, plural, one {# year} other {# years}} higher education',
    values: {
      studiesLevel: studiesLevelValue
    }
  });
};

exports.StudiesLevel = StudiesLevel;