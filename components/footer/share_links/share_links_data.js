"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHARE_LINKS_DATA = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _copy_wrapper = require("../../commons/copy_wrapper/copy_wrapper");

var TwitterIcon = function TwitterIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z"
  }));
};

TwitterIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var FacebookIcon = function FacebookIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
  }));
};

FacebookIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var LinkedInIcon = function LinkedInIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"
  }));
};

LinkedInIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var ShareIcon = function ShareIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M6 17C8.269 7.119 17 5.333 17 5.333V2l7 6.637-7 6.696V12s-6.17-.171-11 5zm12 .145V20H2V8h6.598a16.999 16.999 0 0 1 2.339-2H0v16h20v-6.769l-2 1.914z"
  }));
};

ShareIcon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
var SHARE_LINKS_DATA = Object.freeze({
  twitter: {
    icon: TwitterIcon,
    tooltipTranslation: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Footer.shareLinks.shareOnTooltip",
      defaultMessage: "Share on {platform}",
      values: {
        platform: 'Twitter'
      }
    }),
    getLink: function getLink() {
      return 'https://twitter.com';
    }
  },
  facebook: {
    icon: FacebookIcon,
    tooltipTranslation: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Footer.shareLinks.shareOnTooltip",
      defaultMessage: "Share on {platform}",
      values: {
        platform: 'Facebook'
      }
    }),
    getLink: function getLink() {
      return 'https://facebook.com';
    }
  },
  linkedIn: {
    icon: LinkedInIcon,
    tooltipTranslation: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Footer.shareLinks.shareOnTooltip",
      defaultMessage: "Share on {platform}",
      values: {
        platform: 'LinkedIn'
      }
    }),
    getLink: function getLink() {
      return 'https://linkedin.com';
    }
  },
  copyShareUrl: {
    icon: function icon(props) {
      var _window, _window$location;

      return _react.default.createElement(_copy_wrapper.CopyWrapper, {
        value: (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.href
      }, _react.default.createElement(ShareIcon, props));
    },
    tooltipTranslation: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Footer.shareLinks.copyUrl",
      defaultMessage: "Copy profile's URL"
    })
  }
});
exports.SHARE_LINKS_DATA = SHARE_LINKS_DATA;