"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSection = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_title = require("../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_subtitle = require("../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle");

var _profile_card_section_text = require("../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_section = require("../../../../../commons/profile_card/profile_card_section/profile_card_section");

var _see_project_detail = require("../../see_project_detail/see_project_detail");

var _project_section_styles = require("./project_section_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var EyeIcon = function EyeIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("title", null, "Exported from Streamline App (https://app.streamlineicons.com)"), _react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, _react.default.createElement("path", {
    d: "M20 8.752c-6.718-.113-13.667 4.582-18.035 9.39a2.771 2.771 0 0 0 0 3.71C6.238 26.56 13.167 31.362 20 31.247c6.834.115 13.764-4.688 18.04-9.395a2.771 2.771 0 0 0 0-3.71C33.668 13.334 26.72 8.639 20 8.752z",
    strokeWidth: "2.50005"
  }), _react.default.createElement("path", {
    d: "M26.25 20a6.25 6.25 0 1 1-12.5.007 6.25 6.25 0 0 1 12.5-.012V20z",
    strokeWidth: "2.50005"
  })));
};

EyeIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_project_section_styles.styles);
var DETAILS = {
  link: {
    icon: LinkIcon,
    value: 'Link'
  },
  seeProject: {
    icon: EyeIcon,
    value: _react.default.createElement(_see_project_detail.SeeProjectDetail, null)
  }
};

var ProjectSectionContainer = function ProjectSectionContainer(_ref) {
  var projectId = _ref.projectId,
      cardVariant = _ref.cardVariant;
  var classes = useStyles();
  return _react.default.createElement(_profile_card_section.ProfileCardSection, {
    cardVariant: cardVariant
  }, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, "Analytics platform"), _react.default.createElement(_profile_card_section_subtitle.ProfileCardSectionSubtitle, null, "2019"), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, {
    customClasses: {
      container: classes.sectionText
    }
  }, "Ruby on Rails backend", _react.default.createElement("br", null), "String interpolation via recursion", _react.default.createElement("br", null), "Bulma CSS frontend", _react.default.createElement("br", null), "Dependency free JS config", _react.default.createElement("br", null), "Just another bullshit here"), _react.default.createElement(Details, {
    classes: classes,
    projectId: projectId
  }));
};

var Details = function Details(_ref2) {
  var projectId = _ref2.projectId,
      classes = _ref2.classes;
  return _react.default.createElement("div", {
    className: classes.details
  }, Object.entries(DETAILS).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        id = _ref4[0],
        _ref4$ = _ref4[1],
        Icon = _ref4$.icon,
        value = _ref4$.value;

    return _react.default.createElement("div", {
      key: "project_".concat(projectId, "_detail_").concat(id),
      className: classes.detail
    }, _react.default.createElement(Icon, {
      className: classes.detailIcon
    }), _react.default.createElement(_ui.Typography, {
      customClasses: {
        container: classes.detailTypography
      },
      color: "primary"
    }, value));
  }));
};

var ProjectSection = ProjectSectionContainer;
exports.ProjectSection = ProjectSection;