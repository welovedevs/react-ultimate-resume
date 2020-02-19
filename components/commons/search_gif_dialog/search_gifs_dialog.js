"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchGifsDialog = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _useDebounce3 = require("use-debounce");

var _core = require("@material-ui/core");

var _ui = require("@wld/ui");

var _Poweredby_100pxWhite_VertText = _interopRequireDefault(require("../../../assets/images/Poweredby_100px-White_VertText.png"));

var _dialog_title = require("../dialog/dialog_title/dialog_title");

var _loading_spinner = require("../loading_spinner/loading_spinner");

var _use_giphy_results = require("../../hooks/giphy/use_giphy_results");

var _search_gifs_dialog_styles = require("./search_gifs_dialog_styles");

var useStyles = (0, _reactJss.createUseStyles)(_search_gifs_dialog_styles.styles);

var SearchGifsDialogComponent = function SearchGifsDialogComponent(_ref) {
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
  return _react.default.createElement(_core.Dialog, {
    classes: {
      paper: classes.paper
    },
    open: open,
    onClose: onClose
  }, _react.default.createElement(_dialog_title.DialogTitle, {
    classes: {
      root: classes.title
    }
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Gifs.searchdialog.title",
    defaultMessage: "Search gifs"
  }), _react.default.createElement("img", {
    src: _Poweredby_100pxWhite_VertText.default
  })), _react.default.createElement(_core.DialogContent, {
    classes: {
      root: classes.content
    }
  }, _react.default.createElement(_ui.TextField, {
    customClasses: {
      container: classes.textField
    },
    fullWidth: true,
    onChange: handleInputChange,
    value: query,
    variant: "flat",
    placeholder: "Burrito, development, etc..."
  }), _react.default.createElement(Results, {
    query: query,
    debouncedQuery: debouncedQuery,
    onSelect: onSelect,
    classes: classes
  })), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_core.Button, {
    size: "small",
    onClick: onClose
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.close",
    defaultMessage: "Close"
  }))));
};

var Results = function Results(_ref2) {
  var query = _ref2.query,
      debouncedQuery = _ref2.debouncedQuery,
      onSelect = _ref2.onSelect,
      classes = _ref2.classes;

  var _useGiphyResults = (0, _use_giphy_results.useGiphyResults)(debouncedQuery, 0, 3 * 3),
      gifs = _useGiphyResults.gifs,
      loadingResults = _useGiphyResults.loading;

  var loading = (0, _react.useMemo)(function () {
    return loadingResults || query && query !== debouncedQuery;
  }, [query, debouncedQuery, loadingResults]);
  var handleClick = (0, _react.useCallback)(function (url, id, title) {
    return function () {
      if (typeof onSelect !== 'function') {
        return;
      }

      onSelect({
        url: url,
        id: id,
        title: title
      });
    };
  }, [onSelect]);
  return _react.default.createElement("div", {
    className: classes.results
  }, loading && _react.default.createElement(_loading_spinner.LoadingSpinner, null), !loading && gifs && debouncedQuery && gifs.map(function (_ref3) {
    var id = _ref3.id,
        url = _ref3.url,
        title = _ref3.title;
    return _react.default.createElement(_ui.Tooltip, {
      title: "Select this gif!"
    }, _react.default.createElement("button", {
      key: "result_".concat(id),
      type: "button",
      className: classes.imageContainer,
      onClick: handleClick(url, id, title)
    }, _react.default.createElement("img", {
      className: classes.image,
      src: url,
      alt: title
    })));
  }));
};

var SearchGifsDialog = SearchGifsDialogComponent;
exports.SearchGifsDialog = SearchGifsDialog;