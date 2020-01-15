"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var getColorFromCardVariant = function getColorFromCardVariant(theme, cardVariant) {
  return theme.palette[(theme.components.cards.variants[cardVariant] || theme.components.cards.default).color][500];
};

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return {
    container: {
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      marginRight: 0
    },
    typography: function typography(_ref) {
      var cardVariant = _ref.cardVariant;
      return {
        textTransform: 'unset',
        fontSize: '14px !important',
        color: "".concat(getColorFromCardVariant(theme, cardVariant), " !important")
      };
    },
    arrowContainer: {
      display: 'flex'
    },
    arrow: function arrow(_ref2) {
      var cardVariant = _ref2.cardVariant;
      return {
        height: 28,
        '& > path': {
          stroke: getColorFromCardVariant(theme, cardVariant)
        }
      };
    }
  };
};

exports.styles = styles;