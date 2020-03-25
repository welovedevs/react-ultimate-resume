"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExperienceYears = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var ExperienceYears = function ExperienceYears(_ref) {
  var experienceYears = _ref.experienceYears;
  var experienceValue = (0, _react.useMemo)(function () {
    var numberValue = Number(experienceYears);

    if (Number.isNaN(numberValue)) {
      return 0;
    }

    return numberValue;
  }, [experienceYears]);

  if (experienceValue === 0) {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.ExperienceYear.noExperience",
      defaultMessage: 'No experience (yet!)',
      values: {
        experienceYears: experienceYears
      }
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.ExperienceYear.value",
    defaultMessage: '{experienceYears, plural, one {# year} other {# years} }  of experience',
    values: {
      experienceYears: experienceYears
    }
  });
};

exports.ExperienceYears = ExperienceYears;