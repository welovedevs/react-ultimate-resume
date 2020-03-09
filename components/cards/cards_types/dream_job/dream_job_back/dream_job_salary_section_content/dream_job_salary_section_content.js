"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobSalarySectionContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _profile_card_section_title = require("../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _has_only_freelance_contract = require("../../../../utils/has_only_freelance_contract");

var DreamJobSalarySectionContentComponent = function DreamJobSalarySectionContentComponent(_ref) {
  var contractTypes = _ref.contractTypes,
      salary = _ref.salary,
      averageDailyRate = _ref.averageDailyRate;

  if ((0, _has_only_freelance_contract.hasOnlyFreelanceContract)(contractTypes)) {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.AverageDailyRate.Title",
      defaultMessage: "Average Daily Rate"
    })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, "".concat(averageDailyRate, " \u20AC")));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Salary.Title",
    defaultMessage: "Ideal yearly salary"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, "".concat(salary, " k\u20AC")));
};

var DreamJobSalarySectionContent = DreamJobSalarySectionContentComponent;
exports.DreamJobSalarySectionContent = DreamJobSalarySectionContent;