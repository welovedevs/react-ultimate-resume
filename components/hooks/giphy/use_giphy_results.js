"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGiphyResults = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _reactIntl = require("react-intl");

var _contexts = require("../../../utils/context/contexts");

var GIPHY_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';

var useGiphyResults = function useGiphyResults(input) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 800;
  var debounceSearch = (0, _react.useRef)();

  var _useIntl = (0, _reactIntl.useIntl)(),
      locale = _useIntl.locale;

  var _useContext = (0, _react.useContext)(_contexts.StaticDataContext),
      apiKeys = _useContext.apiKeys;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      lastLoaded = _useState2[0],
      setLastLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  (0, _react.useEffect)(function () {
    if (!input || !apiKeys.giphy) {
      setResults([]);
      return;
    }

    if (input === (lastLoaded === null || lastLoaded === void 0 ? void 0 : lastLoaded.input) && page === (lastLoaded === null || lastLoaded === void 0 ? void 0 : lastLoaded.page)) {
      return;
    }

    setError(null);

    if (debounceSearch.current) {
      clearTimeout(debounceSearch.current);
    }

    debounceSearch.current = setTimeout(function () {
      setLoading(true);
      var params = {
        lang: locale,
        apiKey: apiKeys.giphy,
        q: input,
        offset: page * limit,
        limit: limit
      }; // eslint-disable-next-line no-undef

      fetch(encodeURI(GIPHY_API_ENDPOINT + Object.entries(params).map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "".concat(key, "=").concat(value);
      }).join('&'))).then(function (res) {
        if (res.status.toString().startsWith('2')) {
          return res.json();
        }

        throw new Error("".concat(res.status, " ").concat(res.statusText));
      }).then(function (_ref3) {
        var data = _ref3.data;
        setResults(data.map(function (_ref4) {
          var _images$downsized;

          var id = _ref4.id,
              title = _ref4.title,
              images = _ref4.images;
          return {
            id: id,
            url: images === null || images === void 0 ? void 0 : (_images$downsized = images.downsized) === null || _images$downsized === void 0 ? void 0 : _images$downsized.url,
            title: title
          };
        }));
      }).catch(function (e) {
        console.warn('Failed to fecth from giphy', e.message);
        setError(e.message);
      }).finally(function () {
        setLastLoaded({
          input: input,
          page: page
        });
        debounceSearch.current = null;
        setLoading(false);
      });
    }, timeout);
  }, [input, lastLoaded, page]);
  return {
    gifs: results,
    loading: loading,
    error: error
  };
};

exports.useGiphyResults = useGiphyResults;