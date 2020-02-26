"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsplashSearchImage = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _classnames = _interopRequireDefault(require("classnames"));

var _ui = require("@wld/ui");

var _unsplash_search_image_styles = require("./unsplash_search_image_styles");

var _use_unsplash_results = require("../../hooks/unsplash/use_unsplash_results");

var _contexts = require("../../../utils/context/contexts");

var useStyles = (0, _reactJss.createUseStyles)(_unsplash_search_image_styles.styles);

var UnsplashSearchImage = function UnsplashSearchImage(_ref) {
  var onChange = _ref.onChange,
      _ref$classes = _ref.classes,
      additionalClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      apiKeys = _useContext.apiKeys;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useUnsplashResults = (0, _use_unsplash_results.useUnsplashResults)(searchInput),
      results = _useUnsplashResults.results;

  var onSearchChanged = (0, _react.useCallback)(function (e) {
    setSearchInput("".concat(e.target.value));
  }, []);
  var onImageSelected = (0, _react.useCallback)(function (_ref2) {
    var description = _ref2.description,
        urls = _ref2.urls,
        id = _ref2.id,
        user = _ref2.user,
        links = _ref2.links;
    return function () {
      onChange({
        id: id,
        url: urls.full,
        alt: description,
        credits: {
          url: encodeURI("".concat(user.links.html, "?utm_source=W3D Developer Profile&utm_medium=referral")),
          name: user.username
        },
        fromUnsplash: true
      }); // eslint-disable-next-line no-undef

      fetch(links.download_location, {
        headers: {
          Authorization: "Client-ID ".concat(apiKeys.unsplash)
        }
      });
    };
  }, [onChange]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, additionalClasses.container)
  }, _react.default.createElement(_ui.Typography, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Unsplash.dialog.title",
    defaultMessage: "Search an image on unsplash"
  })), _react.default.createElement(_ui.TextField, {
    variant: "flat",
    value: searchInput,
    onChange: onSearchChanged,
    fullWidth: true
  }), _react.default.createElement("div", {
    className: classes.imagesContainer
  }, results === null || results === void 0 ? void 0 : results.map(function (unsplashResult) {
    return _react.default.createElement("div", {
      className: classes.imageWrapper,
      onClick: onImageSelected(unsplashResult)
    }, _react.default.createElement("img", {
      className: classes.image,
      src: unsplashResult.urls.small,
      alt: unsplashResult.description
    }), _react.default.createElement(_ui.Typography, {
      variant: "body3"
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Unsplash.credit",
      defaultMessage: "Photo by"
    }), _react.default.createElement("a", {
      href: unsplashResult.user.portfolio_url
    }, unsplashResult.user.username)));
  })));
};

exports.UnsplashSearchImage = UnsplashSearchImage;