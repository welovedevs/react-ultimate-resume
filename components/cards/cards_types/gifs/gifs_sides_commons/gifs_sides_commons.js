"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsSidesCommons = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _gifs_sides_commons_styles = require("./gifs_sides_commons_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_gifs_sides_commons_styles.styles);

var GifsSidesCommonsComponent = function GifsSidesCommonsComponent(_ref) {
  var underLayer = _ref.underLayer,
      children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.underLayerContainer
  }, underLayer), _react.default.createElement("div", {
    className: classes.darkenLayer
  }), _react.default.createElement(_profile_card_title.ProfileCardTitle, {
    overrideColor: "light",
    customClasses: {
      container: classes.title
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Hobbies.side.commons",
    defaultMessage: "Hobbies"
  })), children);
};

var GifsSidesCommons = GifsSidesCommonsComponent;
exports.GifsSidesCommons = GifsSidesCommons;