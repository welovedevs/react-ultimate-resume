"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App"));

var _styles = require("@material-ui/core/styles");

/* eslint-disable */
_reactDom.default.render(_react.default.createElement(_styles.StylesProvider, {
  injectFirst: true
}, _react.default.createElement(_App.default, null)), document.getElementById('root'));