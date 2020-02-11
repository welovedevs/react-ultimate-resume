"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSection = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_title = require("../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_subtitle = require("../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle");

var _profile_card_section_text = require("../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_section = require("../../../../../commons/profile_card/profile_card_section/profile_card_section");

var _see_project_detail = require("../../see_project_detail/see_project_detail");

var _animated_underlined_button = require("../../../../../commons/animated_underlined_button/animated_underlined_button");

var _project_section_styles = require("./project_section_styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LinkIcon = function LinkIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.967 0c-1.03 0-2.064.391-2.852 1.177h-.004L5.504 3.785a4.009 4.009 0 0 0-.391.456 4.42 4.42 0 0 1 3.023-.012l1.51-1.516h.005c.36-.357.837-.538 1.316-.538.48 0 .955.177 1.316.538.363.361.541.838.541 1.316 0 .482-.179.963-.537 1.32h-.004L9.675 7.956v.004a1.854 1.854 0 0 1-1.315.534 1.852 1.852 0 0 1-1.846-1.626 1.548 1.548 0 0 0-.456.106 1.517 1.517 0 0 0-.403.249l-.074.073-.933.933a4.024 4.024 0 0 0 3.711 2.44c1.031 0 2.064-.393 2.852-1.181l.004.004 2.607-2.607-.003-.004A4.03 4.03 0 0 0 15 4.029a4.02 4.02 0 0 0-1.177-2.856A4.002 4.002 0 0 0 10.967 0zM6.64 4.322A4.018 4.018 0 0 0 3.79 5.5h-.004L1.177 8.107A4.024 4.024 0 0 0 0 10.963 4.024 4.024 0 0 0 4.033 15a4.03 4.03 0 0 0 2.852-1.181h.004l2.603-2.608c.144-.142.274-.293.391-.452a4.397 4.397 0 0 1-2.978.024l-.04-.012-1.516 1.508v.004a1.854 1.854 0 0 1-1.316.537c-.48 0-.953-.18-1.316-.542a1.855 1.855 0 0 1-.542-1.315c0-.478.18-.955.542-1.316L5.32 7.04h.004a1.86 1.86 0 0 1 1.316-.538c.478 0 .955.177 1.316.538.305.302.482.689.53 1.087a1.57 1.57 0 0 0 .456-.11c.146-.058.284-.144.407-.252l.07-.07.932-.932a4.037 4.037 0 0 0-3.711-2.44z",
    fill: "#1F0A9F"
  }));
};

LinkIcon.defaultProps = {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_project_section_styles.styles);

var ProjectSectionContainer = function ProjectSectionContainer(_ref) {
  var project = _ref.project,
      cardVariant = _ref.cardVariant;
  var classes = useStyles();
  var descriptionChunks = (0, _react.useMemo)(function () {
    var _project$description;

    return (_project$description = project.description) === null || _project$description === void 0 ? void 0 : _project$description.split('\n').map(function (descriptionChunk, index) {
      return _react.default.createElement("p", {
        key: "project_description_chunk_".concat(project.id, "_").concat(index)
      }, descriptionChunk);
    });
  }, [project.description]);
  var formattedDate = (0, _react.useMemo)(function () {
    var _project$date;

    return (_project$date = project.date) === null || _project$date === void 0 ? void 0 : _project$date.year();
  }, [project.date]);
  return _react.default.createElement(_profile_card_section.ProfileCardSection, {
    cardVariant: cardVariant
  }, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, project.name), _react.default.createElement(_profile_card_section_subtitle.ProfileCardSectionSubtitle, null, formattedDate), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, {
    customClasses: {
      container: classes.sectionText
    }
  }, descriptionChunks), _react.default.createElement(Details, {
    classes: classes,
    project: project
  }));
};

var Details = function Details(_ref2) {
  var project = _ref2.project,
      classes = _ref2.classes;
  return _react.default.createElement("div", {
    className: classes.details
  }, _react.default.createElement("div", {
    className: classes.detail
  }, _react.default.createElement(_animated_underlined_button.AnimatedUnderlinedButton, null, _react.default.createElement(LinkIcon, {
    className: classes.detailIcon
  }), _react.default.createElement("a", {
    href: project.link
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.detailTypography
    },
    color: "primary"
  }, "Link")))), _react.default.createElement("div", {
    className: classes.detail
  }, _react.default.createElement(_see_project_detail.SeeProjectDetail, {
    project: project
  })));
};

var ProjectSection = ProjectSectionContainer;
exports.ProjectSection = ProjectSection;