"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var _ref;

  return _ref = {
    content: {
      padding: 0,
      position: 'relative',
      flex: 1,
      overflow: 'hidden'
    },
    contentAnimated: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    cardTitle: {},
    columnsContainer: {
      height: '100%',
      width: '70%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: [theme.miscellaneous.spacing * 5, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }
  }, (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    columnsContainer: {
      width: '100%',
      padding: [theme.miscellaneous.spacing, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }
  }), (0, _defineProperty2.default)(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    content: {
      width: '100%',
      padding: [theme.miscellaneous.spacing, '!important']
    },
    cardTitle: {
      fontSize: 28
    }
  }), _ref;
};

exports.styles = styles;