"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardSectionTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_title_styles = require("./profile_card_section_title_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_section_title_styles.styles);

var ProfileCardSectionTitleComponent = function ProfileCardSectionTitleComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return _react.default.createElement(_ui.Typography, {
    variant: "h2",
    component: "h3",
    customClasses: {
      container: classes.container
    }
  }, children);
};

var ProfileCardSectionTitle = ProfileCardSectionTitleComponent;
exports.ProfileCardSectionTitle = ProfileCardSectionTitle;