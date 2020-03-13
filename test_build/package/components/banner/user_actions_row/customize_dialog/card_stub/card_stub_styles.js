"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var CARD_DIMENSION = 200;

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    container: {
      position: 'relative',
      cursor: 'move'
    },
    popper: {
      zIndex: 10000000001
    },
    cardVariantsTooltipPopper: {
      extend: 'popper'
    },
    cardVariantsList: {
      listStyle: 'none'
    },
    cardVariantsCheckbox: {
      marginRight: spacing * 4,
      borderRadius: '50%'
    },
    cardVariantsListItem: {
      display: 'flex',
      alignItems: 'center',
      padding: 0
    },
    cardVariantsColor: {
      height: 30,
      width: 30,
      margin: [0, spacing],
      borderRadius: '50%',
      border: [1, 'solid', palette.dark[100]]
    },
    card: function card(_ref) {
      var variant = _ref.variant;

      var _getColorsFromCardVar = (0, _styles_utils.getColorsFromCardVariant)(theme, variant),
          backgroundColor = _getColorsFromCardVar.backgroundColor,
          color = _getColorsFromCardVar.color;

      return {
        width: CARD_DIMENSION,
        height: CARD_DIMENSION,
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, color),
        margin: spacing,
        userSelect: 'none',
        '& .to-color': {
          transition: 'fill 250ms',
          fill: 'currentColor'
        },
        '& .to-fill': {
          transition: 'fill 250ms',
          fill: [(0, _styles_utils.getHexFromPaletteColor)(theme, backgroundColor), '!important']
        }
      };
    }
  };
};

exports.styles = styles;