"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudiesBack = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudiesBackComponent = function StudiesBackComponent(_ref) {
  var data = _ref.data.education;
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Studies"
  }, data.map(function (_ref2, index) {
    var endDate = _ref2.endDate,
        area = _ref2.area,
        studyType = _ref2.studyType,
        institution = _ref2.institution,
        id = _ref2.id;
    return _react.default.createElement(_profile_card_section.ProfileCardSection, {
      key: "".concat(index, "_").concat(id)
    }, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, endDate.year()), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Studies.back.diploma",
      defaultMessage: '{studyType} in {area}',
      values: {
        area: area,
        studyType: studyType
      }
    }), _react.default.createElement("br", null), institution));
  }));
};

var StudiesBack = StudiesBackComponent;
exports.StudiesBack = StudiesBack;