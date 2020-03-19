"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _profile_card_section_subtitle = require("../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_studies = require("./no_studies/no_studies");

var Study = function Study(_ref) {
  var study = _ref.study;
  var endDate = study.endDate,
      area = study.area,
      studyType = study.studyType,
      institution = study.institution;
  var title = institution;
  var body = (0, _react.useMemo)(function () {
    var bodyParts = [];

    if (studyType) {
      bodyParts.push(studyType);

      if (area) {
        bodyParts.push(', ');
      }
    }

    if (area) {
      bodyParts.push(area);
    }

    return bodyParts;
  }, [study]);
  var date = (0, _react.useMemo)(function () {
    var year = endDate.year();

    if (!Number.isNaN(Number(year))) {
      return year;
    }

    return '';
  }, [endDate]);
  return _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, title), _react.default.createElement(_profile_card_section_subtitle.ProfileCardSectionSubtitle, null, body), date && _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, date));
};

var Content = function Content(_ref2) {
  var data = _ref2.data,
      handleAddButtonClick = _ref2.handleAddButtonClick;
  var hasEducation = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data);
  }, [data]);

  if (!hasEducation) {
    return _react.default.createElement(_no_studies.NoStudies, {
      handleAddButtonClick: handleAddButtonClick
    });
  }

  return data === null || data === void 0 ? void 0 : data.map(function (study, index) {
    return _react.default.createElement(Study, {
      key: "study_".concat(index, "_").concat(study.id),
      study: study
    });
  });
};

var StudiesBackComponent = function StudiesBackComponent(_ref3) {
  var data = _ref3.data.education,
      handleAddButtonClick = _ref3.handleAddButtonClick;
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Studies"
  }, _react.default.createElement(Content, {
    data: data,
    handleAddButtonClick: handleAddButtonClick
  }));
};

var StudiesBack = StudiesBackComponent;
exports.StudiesBack = StudiesBack;