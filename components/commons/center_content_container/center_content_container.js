"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CenterContentContainer = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _center_content_container_styles = require("./center_content_container_styles");

var useStyles = (0, _reactJss.createUseStyles)(_center_content_container_styles.styles);

var CenterContentContainerComponent = function CenterContentContainerComponent(_ref) {
  var _ref$customClasses = _ref.customClasses,
      customClasses = _ref$customClasses === void 0 ? {} : _ref$customClasses,
      children = _ref.children,
      _ref$minus = _ref.minus,
      minus = _ref$minus === void 0 ? 0 : _ref$minus;
  var classes = useStyles({
    minus: minus
  });
  return (/*#__PURE__*/React.createElement("div", {
      className: (0, _classnames.default)(classes.container, customClasses.container)
    }, children)
  );
};

var CenterContentContainer = CenterContentContainerComponent;
exports.CenterContentContainer = CenterContentContainer;