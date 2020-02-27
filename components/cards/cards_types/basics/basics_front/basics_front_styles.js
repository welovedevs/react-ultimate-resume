"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _mainTypography, _truncatedMainTypogra, _location;

  var width = theme.components.cards.width,
      screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  var QUERY_CARD_MARGIN_PADDING = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', width + spacing * 2 * 2);
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    container: {
      flexDirection: 'column'
    },
    text: {
      margin: [0, '!important']
    },
    mainTypography: (_mainTypography = {
      extend: 'text',
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      maxHeight: 64 * 1.1 * 3
    }, (0, _defineProperty2.default)(_mainTypography, QUERY_CARD_MARGIN_PADDING, {
      fontSize: 42,
      maxHeight: 42 * 1.1 * 3
    }), (0, _defineProperty2.default)(_mainTypography, QUERY_EXTRA_SMALL, {
      fontSize: 28,
      maxHeight: 28 * 1.1 * 3,
      paddingBottom: 0
    }), _mainTypography),
    truncatedMainTypography: (_truncatedMainTypogra = {
      fontSize: 42,
      lineHeight: 1.3
    }, (0, _defineProperty2.default)(_truncatedMainTypogra, QUERY_CARD_MARGIN_PADDING, {
      fontSize: 36,
      maxHeight: 36 * 1.3 * 3
    }), (0, _defineProperty2.default)(_truncatedMainTypogra, QUERY_EXTRA_SMALL, {
      fontSize: 24,
      maxHeight: 24 * 1.3 * 3,
      paddingBottom: 0
    }), _truncatedMainTypogra),
    location: (_location = {
      extend: 'text',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 500,
      fontSize: 32,
      marginTop: spacing * 2
    }, (0, _defineProperty2.default)(_location, QUERY_CARD_MARGIN_PADDING, {
      fontSize: 24
    }), (0, _defineProperty2.default)(_location, QUERY_EXTRA_SMALL, {
      fontSize: 20
    }), _location),
    locationIcon: function locationIcon(_ref) {
      var variant = _ref.variant;
      return {
        height: 28,
        fill: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color),
        marginRight: spacing * 2
      };
    }
  };
};

exports.styles = styles;