"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS = void 0;

var _reactSpring = require("react-spring");

var LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0,
    transform: 'scale3d(0.75, 0.75, 0.75)'
  },
  enter: {
    opacity: 1,
    transform: 'scale3d(1, 1, 1)'
  },
  leave: {
    opacity: 0,
    transform: 'scale3d(0.75, 0.75, 0.75)'
  },
  config: _reactSpring.config.stiff
};
exports.LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS = LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS;