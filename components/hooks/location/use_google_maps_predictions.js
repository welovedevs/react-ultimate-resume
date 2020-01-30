"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGoogleMapsPredictions = void 0;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_OPTIONS = Object.freeze({
  type: ['(cities)']
});

var useGoogleMapsPredictions = function useGoogleMapsPredictions(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;
  var timer = (0, _react.useRef)();
  var autoCompleteService = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      predictions = _useState2[0],
      setPredictions = _useState2[1];

  var handlePlacesPredictionsUpdate = (0, _react.useCallback)(function (receivedPredictions, status) {
    // eslint-disable-next-line no-undef
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
      setPredictions([]);
      return;
    }

    var filteredPredictions = receivedPredictions.filter(function (p) {
      return p.types && !p.types.includes('country');
    });
    setPredictions(filteredPredictions);
  }, []);
  (0, _react.useEffect)(function () {
    if (typeof google !== 'undefined') {
      try {
        // eslint-disable-next-line no-undef
        autoCompleteService.current = new google.maps.places.AutocompleteService();
      } catch (e) {
        console.error('Failed to init google maps autocomplete service', e);
      }
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!autoCompleteService.current) {
      return;
    }

    if (!input) {
      setPredictions([]);
      return;
    }

    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(autoCompleteService.current.getPlacePredictions(_objectSpread({
      input: input
    }, options), handlePlacesPredictionsUpdate), 200);
  }, [input, autoCompleteService.current]);
  return {
    predictions: predictions
  };
};

exports.useGoogleMapsPredictions = useGoogleMapsPredictions;