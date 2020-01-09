"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperProfile = void 0;

require("../main_style.css");

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _json_stub = _interopRequireDefault(require("../../data/json_stub.json"));

var _basic_card = require("./cards/basics/basic_card");

var _theme = require("../utils/styles/theme");

var _profile_styles = _interopRequireDefault(require("./profile_styles"));

var _resume = require("../utils/data/resume");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_profile_styles.default);

var DeveloperProfileElements = function DeveloperProfileElements(_ref) {
  var options = _ref.options;
  var classes = useStyles(_profile_styles.default);
  var flipped = options.flipped;
  var data = (0, _resume.prepareJsonResume)(_json_stub.default);
  return _react.default.createElement("div", {
    className: classes.grid
  }, _react.default.createElement(_basic_card.BasicCard, {
    flipped: flipped,
    data: data,
    variant: 0
  }), _react.default.createElement(_basic_card.BasicCard, {
    flipped: flipped,
    data: data
  }));
};

var DeveloperProfile = function DeveloperProfile(_ref2) {
  var _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options;
  return _react.default.createElement(_reactJss.ThemeProvider, {
    theme: (0, _theme.buildTheme)(options.theme)
  }, _react.default.createElement(_reactIntl.IntlProvider, {
    locale: options.locale || 'en'
  }, _react.default.createElement(DeveloperProfileElements, {
    options: options
  })));
};

exports.DeveloperProfile = DeveloperProfile;