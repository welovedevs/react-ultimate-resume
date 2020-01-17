"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsFront = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _basics_front_styles = require("./basics_front_styles");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_actions = require("../../../../commons/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card_button/profile_card_button");

var _profile_card = require("../../../../commons/profile_card/profile_card");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_basics_front_styles.styles);

var BasicsFrontComponent = function BasicsFrontComponent(_ref) {
  var data = _ref.data,
      variant = _ref.variant;
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_profile_card.ProfileCardContext),
      side = _useContext.side,
      setSide = _useContext.setSide;

  var currentPosition = data.currentPosition,
      currentCity = data.currentCity;
  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_center_content_container.CenterContentContainer, null, _react.default.createElement(_ui.Typography, {
    variant: "h1",
    component: "h2",
    customClasses: {
      container: classes.title
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Front.MainPhrase",
    defaultMessage: '{currentPosition} based in {currentCity}',
    values: {
      currentCity: currentCity,
      currentPosition: currentPosition
    }
  }))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    cardVariant: variant,
    onClick: handleButtonClick
  }, "More about me")));
};

var BasicsFront = BasicsFrontComponent;
exports.BasicsFront = BasicsFront;