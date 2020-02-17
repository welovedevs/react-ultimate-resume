"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      height: '100%'
    },
    cardTitle: {},
    columnsContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: [theme.miscellaneous.spacing * 5, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }
  }, _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    columnsContainer: {
      padding: [theme.miscellaneous.spacing, theme.miscellaneous.spacing * 2, 0, theme.miscellaneous.spacing * 2]
    }
  }), _defineProperty(_ref, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.xs), {
    content: {
      padding: [theme.miscellaneous.spacing, '!important']
    },
    cardTitle: {
      fontSize: 28
    }
  }), _ref;
};

exports.styles = styles;