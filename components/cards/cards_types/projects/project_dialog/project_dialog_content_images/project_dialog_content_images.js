"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectDialogContentImages = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _reactImages = _interopRequireWildcard(require("react-images"));

var _project_dialog_content_image = require("./project_dialog_content_image/project_dialog_content_image");

var _project_dialog_content_add_image = require("./project_dialog_content_add_image/project_dialog_content_add_image");

var _project_dialog_content_images_transitions_spring_props = require("./project_dialog_content_images_transitions_spring_props");

var _project_dialog_content_images_styles = require("./project_dialog_content_images_styles");

var _use_card_variant = require("../../../../../hooks/profile_card_hooks/use_card_variant");

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var _string_utils = require("../../../../../../utils/string_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var useStyles = (0, _reactJss.createUseStyles)(_project_dialog_content_images_styles.styles);

var ProjectDialogContentImagesComponent = function ProjectDialogContentImagesComponent(_ref) {
  var _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      isEditing = _ref.isEditing;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();

  var _useCardVariant = (0, _use_card_variant.useCardVariant)(),
      _useCardVariant2 = (0, _slicedToArray2.default)(_useCardVariant, 1),
      variant = _useCardVariant2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      modalCarouselIndex = _useState2[0],
      setModelCarouselIndex = _useState2[1];

  var views = (0, _react.useMemo)(function () {
    return images.map(function (_ref2) {
      var name = _ref2.name,
          url = _ref2.url;
      return {
        caption: name,
        src: url
      };
    });
  }, [images]);
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
  var transitions = (0, _reactSpring.useTransition)(images, function (_ref3, index) {
    var url = _ref3.url;
    return "project_image_".concat(index, "_").concat((0, _string_utils.hashCode)(url));
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
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.container
    }, isEditing && /*#__PURE__*/_react.default.createElement(_project_dialog_content_add_image.ProjectDialogContentAddImage, null), transitions.map(function (_ref4, index) {
      var item = _ref4.item,
          key = _ref4.key,
          props = _ref4.props;
      return (/*#__PURE__*/_react.default.createElement(_project_dialog_content_image.ProjectDialogContentImage, {
          key: key,
          component: isEditing ? _reactSpring.animated.button : _reactSpring.animated.div,
          style: props,
          url: item.url,
          name: item.name,
          handleImageClick: handleImageClick(index)
        })
      );
    }), /*#__PURE__*/_react.default.createElement(_reactImages.ModalGateway, null, modalCarouselIndex !== null && /*#__PURE__*/_react.default.createElement(_reactImages.Modal, {
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
    }, /*#__PURE__*/_react.default.createElement(_reactImages.default, {
      views: views,
      currentIndex: modalCarouselIndex,
      styles: {
        navigationNext: navButtonStyles,
        navigationPrev: navButtonStyles
      }
    }))))
  );
};

var ProjectDialogContentImages = ProjectDialogContentImagesComponent;
exports.ProjectDialogContentImages = ProjectDialogContentImages;