"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PALETTES_LIST_TRANSITIONS_SPRING_PROPS = void 0;

var _reactSpring = require("react-spring");

var PALETTES_LIST_TRANSITIONS_SPRING_PROPS = Object.freeze({
  from: {
    opacity: 0,
    transform: 'translate3d(-20px, 0, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(-20px, 0, 0)'
  },
  trail: 1000 / 10,
  config: _reactSpring.config.wobbly,
  unique: true
});
exports.PALETTES_LIST_TRANSITIONS_SPRING_PROPS = PALETTES_LIST_TRANSITIONS_SPRING_PROPS;