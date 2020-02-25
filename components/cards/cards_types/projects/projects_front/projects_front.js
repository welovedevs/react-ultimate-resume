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

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _use_card_variant = require("../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _projects_front_styles = require("./projects_front_styles");

var useStyles = (0, _reactJss.createUseStyles)(_projects_front_styles.styles);

var ProjectsFrontComponent = function ProjectsFrontComponent(_ref) {
  var _data$projects, _data$projects$, _data$projects$$image, _data$projects$$image2, _data$projects2, _data$projects2$, _data$projects3, _data$projects3$, _data$projects4;

  var data = _ref.data;

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var imageSrc = (_data$projects = data.projects) === null || _data$projects === void 0 ? void 0 : (_data$projects$ = _data$projects[0]) === null || _data$projects$ === void 0 ? void 0 : (_data$projects$$image = _data$projects$.images) === null || _data$projects$$image === void 0 ? void 0 : (_data$projects$$image2 = _data$projects$$image[0]) === null || _data$projects$$image2 === void 0 ? void 0 : _data$projects$$image2.url;
  var alt = (_data$projects2 = data.projects) === null || _data$projects2 === void 0 ? void 0 : (_data$projects2$ = _data$projects2[0]) === null || _data$projects2$ === void 0 ? void 0 : _data$projects2$.title;
  var classes = useStyles({
    variant: variant,
    hasImage: !!imageSrc
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: classes.background
  }, imageSrc && _react.default.createElement("img", {
    className: classes.backgroundImage,
    src: imageSrc,
    alt: alt
  }), !imageSrc && _react.default.createElement("div", {
    className: classes.stubBackground
  })), _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h2",
    customClasses: {
      container: classes.text
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.front.title",
    defaultMessage: "My <emoji>\u2665\uFE0F</emoji> project : ",
    values: {
      emoji: function emoji(value) {
        return _react.default.createElement(_reactEmojiRender.Twemoji, {
          svg: true,
          text: value
        });
      }
    }
  }), (_data$projects3 = data.projects) === null || _data$projects3 === void 0 ? void 0 : (_data$projects3$ = _data$projects3[0]) === null || _data$projects3$ === void 0 ? void 0 : _data$projects3$.name)), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Projects.front.action",
    defaultMessage: "See {count} project{count, plural, one {} other {s}}",
    values: {
      count: (_data$projects4 = data.projects) === null || _data$projects4 === void 0 ? void 0 : _data$projects4.length
    }
  }))));
};

var ProjectsFront = ProjectsFrontComponent;
exports.ProjectsFront = ProjectsFront;