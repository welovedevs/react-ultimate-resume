"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      borderRadius: 5,
      margin: [spacing * 2, 0],
      padding: [0, spacing]
    },
    divider: {
      margin: [0, spacing * 2],
      height: 50,
      width: 1,
      backgroundColor: palette.dark[50]
    },
    listItem: {
      flex: 1,
      padding: 0,
      display: 'flex',
      alignItems: 'center'
    },
    sortableHelper: {
      zIndex: 1301
    },
    removeIcon: {
      fill: palette.danger[500]
    },
    fieldGroup: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.miscellaneous.spacing
    },
    sliderValueContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    sliderValue: {
      marginRight: spacing * 2,
      width: spacing * 10,
      marginBottom: 0
    },
    slider: {
      margin: theme.miscellaneous.spacing * 2
    },
    sliderPopperCard: {
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary'),
      color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getContrastDefaultColorFromPaletteColor)(theme, 'primary'))
    },
    sliderPopperCardArrowContainer: {
      '& > svg': {
        '& > g > path': {
          fill: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary')
        }
      }
    },
    listItemError: {},
    handleIcon: {
      fill: '#5f5f5f !important',
      marginRight: theme.miscellaneous.spacing * 2,
      '&:hover': {
        cursor: 'move'
      }
    },
    tag: {
      cursor: 'move'
    },
    icon: {
      maxHeight: 18,
      maxWidth: 18,
      marginLeft: theme.miscellaneous.spacing
    },
    dragHandle: {
      width: 32,
      height: 32
    },
    addButton: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    addTag: {
      padding: theme.miscellaneous.spacing
    },
    addIcon: {
      extend: 'icon'
    },
    bolden: {
      fontWeight: 500
    },
    selectIcon: {
      '& svg': {
        fill: 'none !important'
      }
    },
    '@media screen and (max-width: 900px)': {
      listItem: {
        flexWrap: 'wrap'
      }
    }
  };
};

exports.styles = styles;