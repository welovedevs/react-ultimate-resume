"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.miscellaneous.spacing,
      width: 'fit-content'
    },
    listItem: {
      padding: 0,
      display: 'flex',
      alignItems: 'center'
    },
    '@media screen and (max-width: 900px)': {
      listItem: {
        flexWrap: 'wrap'
      }
    },
    sortableHelper: {
      zIndex: 1301
    },
    slider: {
      margin: theme.miscellaneous.spacing * 2
    },
    button: {
      padding: theme.miscellaneous.spacing * 2,
      margin: theme.miscellaneous.spacing * 2
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.miscellaneous.spacing
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
      cursor: 'Pointer',
      width: 38,
      height: 38
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
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    selectIcon: {
      '& svg': {
        fill: 'none !important'
      }
    }
  };
};

exports.styles = styles;