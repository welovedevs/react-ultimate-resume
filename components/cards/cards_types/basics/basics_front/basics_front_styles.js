"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _mainTypography, _location;

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
      extend: 'text'
    }, (0, _defineProperty2.default)(_mainTypography, QUERY_CARD_MARGIN_PADDING, {
      fontSize: 42
    }), (0, _defineProperty2.default)(_mainTypography, QUERY_EXTRA_SMALL, {
      fontSize: 28,
      paddingBottom: 0
    }), _mainTypography),
    location: (_location = {
      extend: 'text',
      width: '100%',
      fontWeight: 500,
      fontSize: 32,
      marginTop: spacing * 2
    }, (0, _defineProperty2.default)(_location, QUERY_CARD_MARGIN_PADDING, {
      fontSize: 24
    }), (0, _defineProperty2.default)(_location, QUERY_EXTRA_SMALL, {
      fontSize: 20
    }), _location)
  };
};

exports.styles = styles;