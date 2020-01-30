"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  return {
    otherSkillsContainer: {
      width: '100%',
      padding: "".concat(theme.miscellaneous.spacing * 3, "px ").concat(theme.miscellaneous.spacing * 5, "px")
    },
    otherSkillsTitle: function otherSkillsTitle(_ref) {
      var variant = _ref.variant;
      return {
        marginBottom: theme.miscellaneous.spacing * 2,
        color: (0, _styles_utils.getHexFromPaletteColor)(theme, (0, _styles_utils.getColorsFromCardVariant)(theme, variant).color)
      };
    }
  };
};

exports.styles = styles;