"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardSectionText = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_section_text_styles = require("./profile_card_section_text_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_section_text_styles.styles);

var ProfileCardSectionTextComponent = function ProfileCardSectionTextComponent(_ref) {
  var children = _ref.children,
      _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses;
  var classes = useStyles();
  return _react.default.createElement(_ui.Typography, {
    component: "p",
    customClasses: {
      container: (0, _classnames.default)(classes.container, customClasses.container)
    }
  }, children);
};

var ProfileCardSectionText = ProfileCardSectionTextComponent;
exports.ProfileCardSectionText = ProfileCardSectionText;