"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS = void 0;

var _reactSpring = require("react-spring");

var PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0,
    transform: 'translate3d(0, 50px, 0)'
  },
  enter: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)'
  },
  leave: {
    opacity: 0,
    transform: 'translate3d(0, 50px, 0)'
  },
  unique: true,
  trail: 80,
  config: _reactSpring.config.slow
};
exports.PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS = PROJECT_DIALOG_CONTENT_IMAGES_TRANSITIONS_SPRING_PROPS;