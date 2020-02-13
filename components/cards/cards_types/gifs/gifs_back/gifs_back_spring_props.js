"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GIFS_BACK_TRANSITIONS_SPRING_PROPS = void 0;

var _reactSpring = require("react-spring");

var GIFS_BACK_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0,
    transform: 'translate3d(25%, 0, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0%, 0, 0)'
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(-25%, 0, 0)'
  },
  unique: true,
  config: _reactSpring.config.slow
};
exports.GIFS_BACK_TRANSITIONS_SPRING_PROPS = GIFS_BACK_TRANSITIONS_SPRING_PROPS;