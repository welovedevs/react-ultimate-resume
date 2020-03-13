"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Banner = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _user_informations = require("./user_actions_row/user_informations/user_informations");

var _social_actions = require("./user_actions_row/social_actions/social_actions");

var _customize_button = require("./user_actions_row/customize_button/customize_button");

var _edit_header_image_button = require("./edit_header_image_button/edit_header_image_button");

var _opacity_transitions = require("../../utils/springs/common_transitions/opacity_transitions");

var _use_is_editing = require("../hooks/use_is_editing");

var _use_additional_nodes = require("../hooks/use_additional_nodes");

var _use_received_global_classes = require("../hooks/use_received_global_classes");

var _banner_styles = require("./banner_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_banner_styles.styles);

var BannerComponent = function BannerComponent(_ref) {
  var _customizationOptions;

  var customizationOptions = _ref.customizationOptions,
      onCustomizationChanged = _ref.onCustomizationChanged;
  var classes = useStyles();

  var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('banner.actionsButtons', null),
      _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
      actionsButtons = _useAdditionalNodes2[0];

  var _useReceivedGlobalCla = (0, _use_received_global_classes.useReceivedGlobalClasses)('banner'),
      _useReceivedGlobalCla2 = (0, _slicedToArray2.default)(_useReceivedGlobalCla, 1),
      _useReceivedGlobalCla3 = _useReceivedGlobalCla2[0],
      globalReceivedBannerClasses = _useReceivedGlobalCla3 === void 0 ? {} : _useReceivedGlobalCla3;

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = (0, _slicedToArray2.default)(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var transitions = (0, _reactSpring.useTransition)((customizationOptions === null || customizationOptions === void 0 ? void 0 : customizationOptions.imageHeader) || null, function (item) {
    return item === null || item === void 0 ? void 0 : item.alt;
  }, _objectSpread({}, _opacity_transitions.OPACITY_TRANSITIONS, {
    unique: true,
    config: _reactSpring.config.molasses
  }));
  var bannerImageCredits = customizationOptions === null || customizationOptions === void 0 ? void 0 : (_customizationOptions = customizationOptions.imageHeader) === null || _customizationOptions === void 0 ? void 0 : _customizationOptions.credits;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, globalReceivedBannerClasses.container)
  }, isEditing && onCustomizationChanged && _react.default.createElement(_edit_header_image_button.EditHeaderImageButton, {
    customizationOptions: customizationOptions
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.overlay, globalReceivedBannerClasses.overlay)
  }), transitions === null || transitions === void 0 ? void 0 : transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item && _react.default.createElement(_reactSpring.animated.img, {
      key: key,
      className: classes.image,
      src: item === null || item === void 0 ? void 0 : item.url,
      alt: item === null || item === void 0 ? void 0 : item.alt,
      style: props
    });
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.content, globalReceivedBannerClasses.content)
  }, _react.default.createElement(_user_informations.UserInformations, null), _react.default.createElement(_social_actions.SocialActions, null, actionsButtons, onCustomizationChanged && _react.default.createElement(_customize_button.CustomizeButton, {
    customizationOptions: customizationOptions
  }))), (bannerImageCredits === null || bannerImageCredits === void 0 ? void 0 : bannerImageCredits.name) && _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: (0, _classnames.default)(classes.credits, globalReceivedBannerClasses.credits)
    },
    variant: "body3"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Unsplash.credit",
    defaultMessage: "Photo by {name} on {unsplashLink}",
    values: {
      name: _react.default.createElement("a", {
        className: classes.author,
        href: bannerImageCredits.url,
        target: "_blank",
        rel: "noopener noreferrer",
        title: bannerImageCredits.name
      }, bannerImageCredits.name),
      unsplashLink: _react.default.createElement("a", {
        href: encodeURI('https://unsplash.com/?utm_source=W3D Developer Profile&utm_medium=referral'),
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Unsplash.brandName",
        defaultMessage: "Unsplash"
      }))
    }
  })));
};

var Banner = BannerComponent;
exports.Banner = Banner;