"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactEmojiRender = require("react-emoji-render");

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _use_card_side = require("../../../../hooks/profile_card_hooks/use_card_side");

var _use_card_variant = require("../../../../hooks/profile_card_hooks/use_card_variant");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _images = require("../utils/images");

var _projects_front_styles = require("./projects_front_styles");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_projects_front_styles.styles);

var ProjectsFrontComponent = function ProjectsFrontComponent(_ref) {
  var _data$projects2, _data$projects2$, _data$projects3, _data$projects3$, _data$projects8, _data$projects9;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var imageSrc = (0, _react.useMemo)(function () {
    var _data$projects$0$imag, _data$projects, _data$projects$, _data$projects$$image;

    return (_data$projects$0$imag = (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : (_data$projects$ = _data$projects[0]) === null || _data$projects$ === void 0 ? void 0 : (_data$projects$$image = _data$projects$.images) === null || _data$projects$$image === void 0 ? void 0 : _data$projects$$image.url) !== null && _data$projects$0$imag !== void 0 ? _data$projects$0$imag : _images.DEFAULT_PROJECT_IMAGE;
  }, [(_data$projects2 = data.projects) === null || _data$projects2 === void 0 ? void 0 : (_data$projects2$ = _data$projects2[0]) === null || _data$projects2$ === void 0 ? void 0 : _data$projects2$.images]);
  var alt = (_data$projects3 = data.projects) === null || _data$projects3 === void 0 ? void 0 : (_data$projects3$ = _data$projects3[0]) === null || _data$projects3$ === void 0 ? void 0 : _data$projects3$.title;
  var projectTitle = (0, _react.useMemo)(function () {
    var _data$projects4, _data$projects5, _data$projects$0$desc, _data$projects7, _data$projects7$0$des;

    if (!((_data$projects4 = data.projects) === null || _data$projects4 === void 0 ? void 0 : _data$projects4[0])) {
      return '';
    }

    if ((_data$projects5 = data.projects) === null || _data$projects5 === void 0 ? void 0 : _data$projects5[0].name) {
      var _data$projects6;

      return (_data$projects6 = data.projects) === null || _data$projects6 === void 0 ? void 0 : _data$projects6[0].name;
    }

    return (_data$projects$0$desc = (_data$projects7 = data.projects) === null || _data$projects7 === void 0 ? void 0 : (_data$projects7$0$des = _data$projects7[0].description) === null || _data$projects7$0$des === void 0 ? void 0 : _data$projects7$0$des.slice(0, 20)) !== null && _data$projects$0$desc !== void 0 ? _data$projects$0$desc : '';
  }, [(_data$projects8 = data.projects) === null || _data$projects8 === void 0 ? void 0 : _data$projects8[0]]);
  var classes = useStyles({
    variant: variant,
    hasImage: !!imageSrc
  });
  var hasProject = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.projects);
  }, [data]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.background
  }, imageSrc && /*#__PURE__*/_react.default.createElement("img", {
    className: classes.backgroundImage,
    src: imageSrc,
    alt: alt
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement(Content, {
    hasProject: hasProject,
    projectTitle: projectTitle,
    handleAddButtonClick: handleAddButtonClick,
    classes: classes
  })), hasProject && /*#__PURE__*/_react.default.createElement(_profile_card_actions.ProfileCardActions, null, /*#__PURE__*/_react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.front.action",
    defaultMessage: "See {count} project{count, plural, one {} other {s}}",
    values: {
      count: (_data$projects9 = data.projects) === null || _data$projects9 === void 0 ? void 0 : _data$projects9.length
    }
  }))));
};

var Content = function Content(_ref2) {
  var hasProject = _ref2.hasProject,
      projectTitle = _ref2.projectTitle,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;

  if (hasProject) {
    return /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      variant: "h2",
      component: "h2",
      customClasses: {
        container: classes.text
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Projects.front.title",
      defaultMessage: "My <emoji>\u2665\uFE0F</emoji> project : ",
      values: {
        emoji: function emoji(value) {
          return /*#__PURE__*/_react.default.createElement(_reactEmojiRender.Twemoji, {
            svg: true,
            text: value
          });
        }
      }
    }), projectTitle);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.noProject
  }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    variant: "h3",
    component: "h3",
    customClasses: {
      container: classes.noProjectTypography
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.front.noProject",
    defaultMessage: "You didn't add any projects."
  }), projectTitle), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
    classes: {
      container: classes.addButton
    },
    handleAddButtonClick: handleAddButtonClick
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.noProject.buttonLabel",
    defaultMessage: "Ajouter un projet"
  })));
};

var ProjectsFront = (0, _react.memo)(ProjectsFrontComponent);
exports.ProjectsFront = ProjectsFront;