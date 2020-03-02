"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing,
      palette = theme.palette,
      screenSizes = theme.screenSizes;
  var QUERY_BETWEEN_SMALL_EXTRA_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', screenSizes.small - (screenSizes.small - screenSizes.xs) / 2);
  return {
    container: (0, _defineProperty2.default)({
      width: '100%',
      backgroundColor: (0, _styles_utils.getHexFromPaletteColor)(theme, 'primary'),
      color: palette.light[900],
      padding: [spacing * 3, spacing * 4],
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: spacing * 10
    }, QUERY_BETWEEN_SMALL_EXTRA_SMALL, {
      flexDirection: 'column'
    }),
    logoLink: {
      display: 'flex'
    },
    logo: {
      height: 26,
      width: 'unset',
      '& > g': {
        stroke: 'currentColor'
      }
    },
    githubLink: {
      display: 'flex'
    },
    githubLogo: {
      height: 30,
      width: 'unset',
      fill: palette.light[900]
    },
    wldLogoGithubLogoContainer: (0, _defineProperty2.default)({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > $githubLink': {
        marginLeft: spacing * 3
      }
    }, QUERY_BETWEEN_SMALL_EXTRA_SMALL, {
      width: '100%',
      marginBottom: spacing * 4
    })
  };
};

exports.styles = styles;