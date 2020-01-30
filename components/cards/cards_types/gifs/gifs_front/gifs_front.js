"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsFront = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _gifs_front_styles = require("./gifs_front_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_gifs_front_styles.styles);

var GifsFrontComponent = function GifsFrontComponent(_ref) {
  var _data$interests, _data$interests$, _data$interests2, _data$interests2$;

  var data = _ref.data;
  var classes = useStyles();
  return _react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
    underLayer: _react.default.createElement("img", {
      className: classes.image,
      src: (_data$interests = data.interests) === null || _data$interests === void 0 ? void 0 : (_data$interests$ = _data$interests[0]) === null || _data$interests$ === void 0 ? void 0 : _data$interests$.gifUrl,
      alt: (_data$interests2 = data.interests) === null || _data$interests2 === void 0 ? void 0 : (_data$interests2$ = _data$interests2[0]) === null || _data$interests2$ === void 0 ? void 0 : _data$interests2$.name
    })
  }, _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    overrideColor: "light"
  }, "See all hobbies")));
};

var GifsFront = GifsFrontComponent;
exports.GifsFront = GifsFront;