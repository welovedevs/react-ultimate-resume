"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var screenSizes = theme.screenSizes,
      spacing = theme.miscellaneous.spacing;
  return _defineProperty({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      marginLeft: spacing * 3
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small), {
    container: {
      width: '100%',
      marginTop: spacing * 2,
      justifyContent: 'center',
      marginLeft: 'unset',
      '& > *': {
        flex: 1
      }
    }
  });
};

exports.styles = styles;