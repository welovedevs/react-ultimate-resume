"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TITLE_SPRING_PROPS = exports.CONTENT_SPRING_PROPS = exports.CONTENT_CONTAINER_SPRING_PROPS = void 0;
var CONTENT_CONTAINER_SPRING_PROPS = Object.freeze({
  default: {
    translation: 100
  },
  active: {
    translation: 0
  }
});
exports.CONTENT_CONTAINER_SPRING_PROPS = CONTENT_CONTAINER_SPRING_PROPS;
var CONTENT_SPRING_PROPS = {
  default: {
    opacity: 0,
    translation: 25
  },
  active: {
    opacity: 1,
    translation: 0
  }
};
exports.CONTENT_SPRING_PROPS = CONTENT_SPRING_PROPS;
var TITLE_SPRING_PROPS = {
  default: {
    translation: -25,
    opacity: 0
  },
  active: {
    translation: 0,
    opacity: 1
  }
};
exports.TITLE_SPRING_PROPS = TITLE_SPRING_PROPS;