"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _gifs_front_styles = require("./gifs_front_styles");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var useStyles = (0, _reactJss.createUseStyles)(_gifs_front_styles.styles);

var GifsFrontComponent = function GifsFrontComponent(_ref) {
  var _data$interests, _data$interests$, _data$interests2, _data$interests2$;

  var data = _ref.data;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);
  return _react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
    underLayer: _react.default.createElement("img", {
      className: classes.image,
      src: (_data$interests = data.interests) === null || _data$interests === void 0 ? void 0 : (_data$interests$ = _data$interests[0]) === null || _data$interests$ === void 0 ? void 0 : _data$interests$.gifUrl,
      alt: (_data$interests2 = data.interests) === null || _data$interests2 === void 0 ? void 0 : (_data$interests2$ = _data$interests2[0]) === null || _data$interests2$ === void 0 ? void 0 : _data$interests2$.name
    })
  }, _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick,
    overrideColor: "light"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Gifs.front.action",
    defaultMessage: "See all hobbies"
  }))));
};

var GifsFront = GifsFrontComponent;
exports.GifsFront = GifsFront;