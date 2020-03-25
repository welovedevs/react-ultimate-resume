"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchUnsplashDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _useDebounce3 = require("use-debounce");

var _core = require("@material-ui/core");

var _ui = require("@wld/ui");

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _loading_spinner = require("../loading_spinner/loading_spinner");

var _contexts = require("../../../utils/context/contexts");

var _use_unsplash_results = require("../../hooks/unsplash/use_unsplash_results");

var _search_unsplash_result_styles = require("./search_unsplash_result_styles");

var useStyles = (0, _reactJss.createUseStyles)(_search_unsplash_result_styles.styles);

var SearchUnsplashDialogComponent = function SearchUnsplashDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onSelect = _ref.onSelect;
  var classes = useStyles();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useDebounce = (0, _useDebounce3.useDebounce)(query, 500),
      _useDebounce2 = (0, _slicedToArray2.default)(_useDebounce, 1),
      debouncedQuery = _useDebounce2[0];

  var handleInputChange = (0, _react.useCallback)(function (event) {
    return setQuery(event.target.value);
  }, []);
  return (/*#__PURE__*/_react.default.createElement(_core.Dialog, {
      classes: {
        paper: classes.paper
      },
      open: open,
      onClose: onClose
    }, /*#__PURE__*/_react.default.createElement(_dialog_title.DialogTitle, {
      classes: {
        root: classes.title
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Unsplash.SearchDialog.Title",
      defaultMessage: "Search pictures from unsplash"
    })), /*#__PURE__*/_react.default.createElement(_core.DialogContent, {
      classes: {
        root: classes.content
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
      customClasses: {
        container: classes.textField
      },
      fullWidth: true,
      onChange: handleInputChange,
      value: query,
      variant: "flat",
      placeholder: "Burrito, development, etc..."
    }), /*#__PURE__*/_react.default.createElement(Results, {
      query: query,
      debouncedQuery: debouncedQuery,
      onSelect: onSelect,
      classes: classes
    })), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      size: "small",
      onClick: onClose
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Main.lang.close",
      defaultMessage: "Close"
    }))))
  );
};

var Results = function Results(_ref2) {
  var query = _ref2.query,
      debouncedQuery = _ref2.debouncedQuery,
      onSelect = _ref2.onSelect,
      classes = _ref2.classes;

  var _useUnsplashResults = (0, _use_unsplash_results.useUnsplashResults)(debouncedQuery, 0, 3 * 3),
      results = _useUnsplashResults.results,
      loadingResults = _useUnsplashResults.loading;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showLoadingSpinner = _useState4[0],
      setShowLoadingSpinner = _useState4[1];

  var _useContext = (0, _react.useContext)(_contexts.StaticDataContext),
      endpoints = _useContext.endpoints;

  (0, _react.useEffect)(function () {
    if (loadingResults) {
      return;
    }

    setShowLoadingSpinner(!!query);
  }, [query]);
  (0, _react.useEffect)(function () {
    if (loadingResults === true) {
      return;
    }

    setShowLoadingSpinner(false);
  }, [results, loadingResults]);
  var onImageSelected = (0, _react.useCallback)(function (_ref3) {
    var description = _ref3.description,
        urls = _ref3.urls,
        id = _ref3.id,
        user = _ref3.user,
        links = _ref3.links;
    return function () {
      onSelect({
        id: id,
        url: urls.regular,
        alt: description,
        credits: {
          url: encodeURI("".concat(user.links.html, "?utm_source=W3D Developer Profile&utm_medium=referral")),
          name: user.username
        },
        fromUnsplash: true
      }); // eslint-disable-next-line no-undef

      fetch("".concat(endpoints === null || endpoints === void 0 ? void 0 : endpoints.unsplashProxy, "?url=").concat(links.download_location));
    };
  }, [onSelect]);
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.results
    }, showLoadingSpinner && /*#__PURE__*/_react.default.createElement(_loading_spinner.LoadingSpinner, null), !showLoadingSpinner && (results === null || results === void 0 ? void 0 : results.map(function (_ref4) {
      var id = _ref4.id,
          urls = _ref4.urls,
          description = _ref4.description,
          user = _ref4.user,
          links = _ref4.links;
      return (/*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
          key: "unsplash_picture_".concat(id),
          title: "Select this picture"
        }, /*#__PURE__*/_react.default.createElement("button", {
          key: "result_".concat(id),
          type: "button",
          className: classes.imageContainer,
          onClick: onImageSelected({
            description: description,
            urls: urls,
            id: id,
            user: user,
            links: links
          })
        }, /*#__PURE__*/_react.default.createElement("img", {
          className: classes.image,
          src: urls.regular,
          alt: description
        })))
      );
    })))
  );
};

var SearchUnsplashDialog = SearchUnsplashDialogComponent;
exports.SearchUnsplashDialog = SearchUnsplashDialog;