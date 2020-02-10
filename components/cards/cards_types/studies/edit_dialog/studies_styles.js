"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    itemContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: [spacing * 2, 0]
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
    sortableHelper: {
      zIndex: 1301
    },
    button: {
      padding: spacing * 2,
      margin: spacing * 2
    },
    listItemError: {},
    removeButton: {
      display: 'flex'
    },
    removeIcon: {
      fill: palette.danger[500]
    }
  };
};

exports.styles = styles;