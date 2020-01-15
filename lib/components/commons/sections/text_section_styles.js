"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    section: {
      padding: theme.spacing,
      display: 'flex',
      alignItems: 'flex-start'
    },
    sectionContent: {
      marginLeft: theme.spacing,
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

exports.default = _default;