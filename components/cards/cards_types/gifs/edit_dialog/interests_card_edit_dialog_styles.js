"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var IMAGE_WIDTH = 170;
var IMAGE_HEIGHT = 120;
var GRID_COLUMNS = 2;

var _default = function _default(theme) {
  return {
    dialogContent: {
      overflow: 'hidden !important',
      display: 'flex',
      height: '100%'
    },
    dialogPaper: {
      maxWidth: [900, '!important'],
      minHeight: 'calc(100% - 64px)',
      height: 1
    },
    container: {
      margin: [-15, 0],
      display: 'flex'
    },
    currentElements: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    list: {
      flex: 1,
      overflow: 'auto',
      pdding: [0, 8]
    },
    gifPicker: {
      maxWidth: IMAGE_WIDTH * GRID_COLUMNS + GRID_COLUMNS * theme.miscellaneous.spacing * 2,
      width: IMAGE_WIDTH * GRID_COLUMNS + GRID_COLUMNS * theme.miscellaneous.spacing * 2,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    gifPickerPlaceHolder: {
      extend: 'gifPicker',
      justifyContent: 'center'
    },
    experience: function experience(_ref) {
      var width = _ref.width;
      return {
        width: width === 'full' ? '100%' : 'fit-content',
        padding: [5, 8],
        display: 'flex',
        alignItems: 'center'
      };
    },
    button: {
      marginLeft: theme.miscellaneous.spacing,
      padding: 8
    },
    gifItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    giphyResults: {
      flex: 1,
      overflow: 'scroll',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    gifSearchFieldWrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    gifSearchField: {
      flex: 1
    },
    gif: {
      margin: theme.miscellaneous.spacing
    },
    imageWrapper: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      borderRadius: 5,
      overflow: 'hidden'
    },
    image: {
      height: IMAGE_HEIGHT,
      width: '100%',
      objectFit: 'cover'
    },
    textFieldWrapper: {
      display: 'flex',
      alignItems: 'center',
      width: IMAGE_WIDTH,
      padding: theme.miscellaneous.spacing
    },
    interestNameTextFieldInput: {
      padding: theme.miscellaneous.spacing
    },
    listItem: {
      width: 'auto',
      display: 'flex',
      borderRadius: 5,
      flex: 1,
      padding: theme.miscellaneous.spacing
    },
    listItemError: {
      backgroundColor: theme.palette.danger[50]
    },
    listItemSelected: {
      backgroundColor: theme.palette.safe[200]
    },
    sortableHelper: {
      zIndex: 1301
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    smallTitle: {
      marginLeft: theme.miscellaneous.spacing * 2,
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
    handleIcon: {
      fill: '#5f5f5f !important',
      marginRight: 10,
      '&:hover': {
        cursor: 'move'
      }
    },
    content: {
      display: 'flex',
      alignItems: 'center'
    },
    line: {
      height: 350,
      width: 1,
      minWidth: 1,
      maxWidth: 1,
      marginRight: 30,
      backgroundColor: theme.palette.primary[100]
    },
    fieldRow: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: -theme.miscellaneous.spacing
    },
    fieldRowJustifyEnd: {
      justifyContent: 'flex-end'
    },
    fieldContainer: {
      margin: [0, theme.miscellaneous.spacing]
    },
    fullWidthFieldContainer: {
      width: '100%'
    },
    tag: {
      paddingRight: theme.miscellaneous.spacing * 2
    },
    icon: {
      maxHeight: 18,
      maxWidth: 18,
      marginLeft: theme.miscellaneous.spacing * 2
    },
    deleteButton: {
      extends: 'button',
      padding: 0,
      margin: 0,
      marginLeft: theme.miscellaneous.spacing,
      '& svg': {
        fill: theme.palette.danger[500]
      }
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
    stillEmployed: {
      display: 'flex',
      alignItems: 'center'
    },
    withMarginStillEmployedFieldRow: {
      margin: [theme.miscellaneous.spacing * 3, 0, 0, 0]
    },
    yearMonthWrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      '&> div': {
        width: '50%'
      }
    },
    topFieldsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      '&> div': {
        width: "calc(50% - ".concat(theme.miscellaneous.spacing * 2, "px)"),
        margin: theme.miscellaneous.spacing
      }
    },
    checkboxField: {
      display: 'flex',
      alignItems: 'center',
      '& > $typography': {
        marginLeft: theme.miscellaneous.spacing
      }
    },
    '@media screen and (max-width: 730px)': {
      content: {
        marginLeft: theme.miscellaneous.spacing
      }
    }
  };
};

exports.default = _default;