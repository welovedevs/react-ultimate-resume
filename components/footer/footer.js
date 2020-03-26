"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _share_links = require("./share_links/share_links");

var _footer_styles = require("./footer_styles");

var Logo = function Logo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("g", {
    strokeWidth: "19.5",
    stroke: "#230CAE",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M187 80.99h36.236c22.154 0 37.46-15.314 37.46-35.292 0-20.181-15.306-35.698-37.46-35.698H203.5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 13.91L32.586 81.5l25.03-66.9 25.027 66.9 18.932-54.093c2.694-7.885 8.34-14.442 16.286-16.607a22.576 22.576 0 0 1 15.693 1.413 23.004 23.004 0 0 1 6.536 4.681l.802.82.802-.82c4.317-4.402 10.17-6.875 16.272-6.875 6.103 0 11.956 2.473 16.273 6.875 4.33 4.405 6.761 10.39 6.758 16.633-.006 6.238-2.447 12.221-6.78 16.62l-.801.82-20.716 21.17-6.94 7.086a6.82 6.82 0 0 1-9.762 0l-2.134-2.195-4.812-4.914-11.64-11.892",
    strokeLinejoin: "round"
  })));
};

Logo.defaultProps = {
  className: "clogo-0-2-221",
  width: "271",
  height: "92",
  viewBox: "0 0 271 92",
  xmlns: "http://www.w3.org/2000/svg"
};

var GithubLogo = function GithubLogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
  }));
};

GithubLogo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};
var useStyles = (0, _reactJss.createUseStyles)(_footer_styles.styles);

var FooterComponent = function FooterComponent() {
  var classes = useStyles();

  var _useTheme = (0, _reactJss.useTheme)(),
      screenSizes = _useTheme.screenSizes;

  var useSmallLayout = (0, _core.useMediaQuery)("(max-width: ".concat(screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2, "px)"), {
    defaultMatches: true
  });

  if (useSmallLayout) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(classes.container, useSmallLayout && classes.smallLayoutContainer)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.wldLogoGithubLogoContainer
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: classes.logoLink,
      href: "https://welovedevs.com",
      target: "_blank",
      rel: "noreferrer noopener"
    }, /*#__PURE__*/_react.default.createElement(Logo, {
      className: classes.logo
    })), /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Footer.github.tooltip",
        defaultMessage: "Create your own developer profile!"
      })
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: classes.githubLink,
      href: "https://github.com/welovedevs/developer-profile",
      target: "_bank",
      rel: "noreferer noopener"
    }, /*#__PURE__*/_react.default.createElement(GithubLogo, {
      className: classes.githubLogo
    })))), /*#__PURE__*/_react.default.createElement(_share_links.ShareLinks, {
      useSmallLayout: true
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: classes.logoLink,
    href: "https://welovedevs.com",
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/_react.default.createElement(Logo, {
    className: classes.logo
  })), /*#__PURE__*/_react.default.createElement(_share_links.ShareLinks, null), /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Footer.github.tooltip",
      defaultMessage: "Create your own developer profile!"
    })
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: classes.githubLink,
    href: "https://github.com/welovedevs/developer-profile",
    target: "_bank",
    rel: "noreferer noopener"
  }, /*#__PURE__*/_react.default.createElement(GithubLogo, {
    className: classes.githubLogo
  }))));
};

var Footer = (0, _react.memo)(FooterComponent);
exports.Footer = Footer;