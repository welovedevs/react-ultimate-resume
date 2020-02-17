"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return _defineProperty({
    itemContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: [spacing * 2, 0]
    },
    header: {
      display: 'flex',
      alignItems: 'unset'
    },
    divider: {
      margin: [0, spacing * 2],
      height: 50,
      width: 1,
      backgroundColor: palette.dark[50]
    },
    dragHandleButton: {
      display: 'flex'
    },
    dragHandle: {
      width: 32,
      height: 32
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%'
    },
    fieldGroup: {
      display: 'flex',
      width: '100%'
    },
    field: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      margin: spacing
    },
    button: {
      padding: spacing * 2,
      margin: spacing * 2
    },
    warningIcon: {
      marginLeft: spacing * 2
    },
    listItemError: {
      backgroundColor: [palette.danger[50], '!important']
    },
    sortableHelper: {
      zIndex: 1301
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    smallTitle: {
      marginLeft: spacing * 2,
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      maxHeight: 20 * 2,
      lineHeight: '20px',
      animation: 'fade-in-translate-left 500ms',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical'
    },
    removeButton: {
      display: 'flex'
    },
    removeIcon: {
      fill: palette.danger[500]
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    itemContainer: {
      flexDirection: 'column',
      alignItems: 'unset'
    },
    fieldGroup: {
      flexDirection: 'column'
    }
  });
};

exports.styles = styles;