"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS = exports.ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS = void 0;

var _reactSpring = require("react-spring");

var ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0,
    transform: 'translate3d(0, 20px, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(0, 20px, 0)'
  },
  config: _reactSpring.config.wobbly,
  unique: true
};
exports.ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS = ALL_TECHNOLOGIES_TRANSITIONS_SPRING_PROPS;
var SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(100%, 0, 0)'
  }
};
exports.SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS = SELECTED_ITEM_LAYER_TRANSITIONS_SPRING_PROPS;