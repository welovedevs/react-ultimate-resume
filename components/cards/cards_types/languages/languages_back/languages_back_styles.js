"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _content;

  var screenSizes = theme.screenSizes;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small);
  var QUERY_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.xs);
  return {
    content: (_content = {
      padding: 0,
      position: 'relative',
      flex: 1,
      overflow: 'hidden'
    }, (0, _defineProperty2.default)(_content, QUERY_SMALL, {
      paddingBottom: [0, '!important']
    }), (0, _defineProperty2.default)(_content, QUERY_EXTRA_SMALL, {
      width: '100%',
      padding: [theme.miscellaneous.spacing, '!important'],
      paddingBottom: [0, '!important']
    }), _content),
    contentAnimated: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    cardTitle: (0, _defineProperty2.default)({}, QUERY_EXTRA_SMALL, {
      fontSize: 28
    }),
    columnsContainer: (0, _defineProperty2.default)({
      height: '100%',
      width: '70%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: [theme.miscellaneous.spacing * 5, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }, QUERY_SMALL, {
      width: '100%',
      padding: [theme.miscellaneous.spacing, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }),
    languageLettersButton: {
      display: 'flex'
    }
  };
};

exports.styles = styles;