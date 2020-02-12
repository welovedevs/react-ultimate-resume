"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGiphyResults = void 0;

var _react = require("react");

var _reactIntl = require("react-intl");

var _contexts = require("../../../utils/context/contexts");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GIPHY_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';

var useGiphyResults = function useGiphyResults(input) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 800;
  var debounceSearch = (0, _react.useRef)();

  var _useIntl = (0, _reactIntl.useIntl)(),
      locale = _useIntl.locale;

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      apiKeys = _useContext.apiKeys;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      lastLoaded = _useState2[0],
      setLastLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
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
        var _ref2 = _slicedToArray(_ref, 2),
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
          var id = _ref4.id,
              title = _ref4.title;
          return {
            id: id,
            url: "https://media.giphy.com/media/".concat(id, "/giphy.gif"),
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