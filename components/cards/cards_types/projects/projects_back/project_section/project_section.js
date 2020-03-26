"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSection = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_title = require("../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_subtitle = require("../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle");

var _profile_card_section_text = require("../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_section = require("../../../../../commons/profile_card/profile_card_section/profile_card_section");

var _see_project_detail = require("../../see_project_detail/see_project_detail");

var _animated_underlined_button = require("../../../../../commons/animated_underlined_button/animated_underlined_button");

var _confirm_dialog = require("../../../../../commons/confirm_dialog/confirm_dialog");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _use_callback_open = require("../../../../../hooks/use_callback_open");

var _project_section_styles = require("./project_section_styles");

var _use_card_variant = require("../../../../../hooks/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
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

var RemoveIcon = function RemoveIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.304 14.697L14.697 25.302M14.697 14.697l10.607 10.605M20 1.25c10.356 0 18.75 8.395 18.75 18.75S30.357 38.75 20 38.75 1.25 30.357 1.25 20 9.645 1.25 20 1.25z",
    strokeWidth: "2.50005"
  })));
};

RemoveIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_project_section_styles.styles);

var ProjectSectionContainer = function ProjectSectionContainer(_ref) {
  var project = _ref.project,
      cardVariant = _ref.cardVariant,
      onDelete = _ref.onDelete,
      index = _ref.index;
  var classes = useStyles();
  var descriptionChunks = (0, _react.useMemo)(function () {
    var _project$description;

    return (_project$description = project.description) === null || _project$description === void 0 ? void 0 : _project$description.split('\n').map(function (descriptionChunk, chunkIndex) {
      return /*#__PURE__*/_react.default.createElement("p", {
        key: "project_description_chunk_".concat(project.id, "_").concat(chunkIndex)
      }, descriptionChunk);
    });
  }, [project.description]);
  var formattedDate = (0, _react.useMemo)(function () {
    var _project$date;

    return (_project$date = project.date) === null || _project$date === void 0 ? void 0 : _project$date.year();
  }, [project.date]);
  return /*#__PURE__*/_react.default.createElement(_profile_card_section.ProfileCardSection, {
    cardVariant: cardVariant
  }, /*#__PURE__*/_react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, project.name), /*#__PURE__*/_react.default.createElement(_profile_card_section_subtitle.ProfileCardSectionSubtitle, null, formattedDate), /*#__PURE__*/_react.default.createElement(_profile_card_section_text.ProfileCardSectionText, {
    customClasses: {
      container: classes.sectionText
    }
  }, descriptionChunks), /*#__PURE__*/_react.default.createElement(Details, {
    classes: classes,
    project: project,
    onDelete: onDelete,
    index: index
  }));
};

var Details = function Details(_ref2) {
  var project = _ref2.project,
      index = _ref2.index,
      onDelete = _ref2.onDelete,
      classes = _ref2.classes;
  var theme = (0, _reactJss.useTheme)();

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var color = (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backColor;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.details
  }, project.link && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.detail
  }, /*#__PURE__*/_react.default.createElement(_animated_underlined_button.AnimatedUnderlinedButton, {
    color: color
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: classes.link,
    href: project.link
  }, /*#__PURE__*/_react.default.createElement(LinkIcon, {
    className: classes.detailIcon
  }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.detailTypography
    },
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Project.section.link",
    defaultMessage: "Link"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.detail
  }, /*#__PURE__*/_react.default.createElement(_see_project_detail.SeeProjectDetail, {
    color: color,
    project: project
  })), isEditing && /*#__PURE__*/_react.default.createElement(RemoveProjectDetail, {
    color: color,
    index: index,
    onDelete: onDelete,
    classes: classes
  }));
};

var RemoveProjectDetail = function RemoveProjectDetail(_ref3) {
  var color = _ref3.color,
      index = _ref3.index,
      onDelete = _ref3.onDelete,
      classes = _ref3.classes;

  var _useCallbackOpen = (0, _use_callback_open.useCallbackOpen)(),
      _useCallbackOpen2 = (0, _slicedToArray2.default)(_useCallbackOpen, 3),
      openDialog = _useCallbackOpen2[0],
      setDialogOpened = _useCallbackOpen2[1],
      setDialogClosed = _useCallbackOpen2[2];

  var handleConfirm = (0, _react.useCallback)(function () {
    onDelete(index);
    setDialogClosed();
  }, [onDelete, index]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_confirm_dialog.ConfirmDialog, {
    open: openDialog,
    onClose: setDialogClosed,
    onConfirm: handleConfirm
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.detail
  }, /*#__PURE__*/_react.default.createElement(_animated_underlined_button.AnimatedUnderlinedButton, {
    color: color,
    onClick: setDialogOpened
  }, /*#__PURE__*/_react.default.createElement(RemoveIcon, {
    className: classes.detailDeleteIcon
  }), /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.detailTypography
    },
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.delete",
    defaultMessage: "Delete"
  })))));
};

var ProjectSection = ProjectSectionContainer;
exports.ProjectSection = ProjectSection;