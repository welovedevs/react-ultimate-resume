"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUnsplashResults = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _contexts = require("../../../utils/context/contexts");

var UNSPLASH_API = 'https://api.unsplash.com/search/photos?';

var useUnsplashResults = function useUnsplashResults(input) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 800;
  var debounceSearch = (0, _react.useRef)();

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      endpoints = _useContext.endpoints;

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
    if (!input || !endpoints.unsplashProxy) {
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
        query: input,
        page: page * limit,
        per_page: limit
      };
      var url = encodeURI(UNSPLASH_API + Object.entries(params).map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "".concat(key, "=").concat(value);
      }).join('&')); // eslint-disable-next-line no-undef

      fetch("".concat(endpoints.unsplashProxy, "?url=").concat(url), {
        method: 'GET'
      }).then( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
          var functionResult;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!"".concat(res.status).startsWith('2')) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return res.json();

                case 3:
                  functionResult = _context.sent;

                  if (!"".concat(functionResult === null || functionResult === void 0 ? void 0 : functionResult.unsplashStatus).startsWith('2')) {
                    _context.next = 6;
                    break;
                  }

                  return _context.abrupt("return", functionResult);

                case 6:
                  throw new Error("".concat(functionResult.unsplashStatus));

                case 7:
                  throw new Error("".concat(res.status, " ").concat(res.statusText));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }()).then(function (res) {
        var _res$data;

        setResults(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.results.map(function (_ref4) {
          var id = _ref4.id,
              user = _ref4.user,
              description = _ref4.description,
              urls = _ref4.urls,
              links = _ref4.links;
          return {
            id: id,
            urls: urls,
            user: user,
            description: description,
            links: links
          };
        }));
      }).catch(function (e) {
        console.warn('Failed to fetch from unsplash', e.message);
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
    results: results,
    loading: loading,
    error: error
  };
};

exports.useUnsplashResults = useUnsplashResults;