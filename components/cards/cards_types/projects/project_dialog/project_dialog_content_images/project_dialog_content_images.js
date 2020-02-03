"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentImages = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _reactImages = _interopRequireWildcard(require("react-images"));

var _project_dialog_content_image = require("./project_dialog_content_image/project_dialog_content_image");

var _project_dialog_content_add_image = require("./project_dialog_content_add_image/project_dialog_content_add_image");

var _use_is_editing = require("../../../../../hooks/use_is_editing");

var _project_dialog_content_images_transitions_spring_props = require("./project_dialog_content_images_transitions_spring_props");

var _project_dialog_content_images_styles = require("./project_dialog_content_images_styles");

var _use_card_variant = require("../../../../../commons/profile_card/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_images_styles.styles);

var ProjectDialogContentImagesComponent = function ProjectDialogContentImagesComponent(_ref) {
  var images = _ref.images;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = _slicedToArray(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _useIsEditing = (0, _use_is_editing.useIsEditing)(),
      _useIsEditing2 = _slicedToArray(_useIsEditing, 1),
      isEditing = _useIsEditing2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      modalCarouselIndex = _useState2[0],
      setModelCarouselIndex = _useState2[1];

  var imagesEntries = (0, _react.useMemo)(function () {
    return images && Object.entries(images);
  }, [images]);
  var views = (0, _react.useMemo)(function () {
    return imagesEntries.map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          _ref3$ = _ref3[1],
          name = _ref3$.name,
          url = _ref3$.url;

      return {
        caption: name,
        src: url
      };
    });
  }, [imagesEntries]);
  var handleImageClick = (0, _react.useCallback)(function (index) {
    return function () {
      if (isEditing) {
        return;
      }

      setModelCarouselIndex(index);
    };
  }, [isEditing]);
  var handleModalClose = (0, _react.useCallback)(function () {
    return setModelCarouselIndex(null);
  }, []);
  var transitions = (0, _reactSpring.useTransition)(imagesEntries, function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
        id = _ref5[0];

    return "project_image_".concat(id);
  }, _objectSpread({}, _project_dialog_content_images_transitions_spring_props.PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS, {}, isEditing && {
    immediate: true,
    trail: 0
  }));
  var navButtonStyles = (0, _react.useCallback)(function (base) {
    return _objectSpread({}, base, {
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor),
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
      color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
      '&:hover, &:active': {
        backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).backgroundColor),
        opacity: 1
      },
      '&:active': {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
        transform: 'scale(0.96)'
      }
    });
  }, [theme, variant]);
  return _react.default.createElement("div", {
    className: classes.container
  }, isEditing && _react.default.createElement(_project_dialog_content_add_image.ProjectDialogContentAddImage, null), transitions.map(function (_ref6, index) {
    var item = _ref6.item,
        key = _ref6.key,
        props = _ref6.props;
    return _react.default.createElement(_project_dialog_content_image.ProjectDialogContentImage, {
      key: key,
      component: isEditing ? _reactSpring.animated.button : _reactSpring.animated.div,
      style: props,
      url: item[1].url,
      name: item[1].name,
      handleImageClick: handleImageClick(index)
    });
  }), _react.default.createElement(_reactImages.ModalGateway, null, modalCarouselIndex !== null && _react.default.createElement(_reactImages.Modal, {
    onClose: handleModalClose,
    styles: {
      blanket: function blanket(base) {
        return _objectSpread({}, base, {
          zIndex: 2100
        });
      },
      positioner: function positioner(base) {
        return _objectSpread({}, base, {
          zIndex: 2110
        });
      },
      dialog: function dialog(base) {
        return _objectSpread({}, base, {
          zIndex: 2120,
          fontFamily: 'Avenir Next'
        });
      }
    }
  }, _react.default.createElement(_reactImages.default, {
    views: views,
    currentIndex: modalCarouselIndex,
    styles: {
      navigationNext: navButtonStyles,
      navigationPrev: navButtonStyles
    }
  }))));
};

var ProjectDialogContentImages = ProjectDialogContentImagesComponent;
exports.ProjectDialogContentImages = ProjectDialogContentImages;