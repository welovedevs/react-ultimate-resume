"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardSectionSubtitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_subtitle_styles = require("./profile_card_section_subtitle_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_section_subtitle_styles.styles);

var ProfileCardSectionSubtitleComponent = function ProfileCardSectionSubtitleComponent(_ref) {
  var children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  return _react.default.createElement(_ui.Typography, {
    variant: "h4",
    component: "h4",
    customClasses: {
      container: (0, _classnames.default)(classes.container, customClasses.container)
    }
  }, children);
};

var ProfileCardSectionSubtitle = ProfileCardSectionSubtitleComponent;
exports.ProfileCardSectionSubtitle = ProfileCardSectionSubtitle;