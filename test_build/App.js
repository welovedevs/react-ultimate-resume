"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ui = require("@wld/ui");

var _package = _interopRequireDefault(require("./package"));

var _json_stub = _interopRequireDefault(require("./data/json_stub.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
  var _useState = (0, _react.useState)(_json_stub.default),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var onEdit = (0, _react.useCallback)(function (newData) {
    setData((0, _merge.default)({}, data, newData));
  }, [data]);

  var _useState3 = (0, _react.useState)({
    cardsOrder: [{
      type: 'basics',
      variant: 0
    }, {
      type: 'projects',
      variant: 1
    }, {
      type: 'language',
      variant: 2
    }, {
      type: 'dreamjob',
      variant: 4
    }, {
      type: 'gifs',
      variant: 5
    }, {
      type: 'experiences',
      variant: 4
    }, {
      type: 'studies',
      variant: 3
    }, {
      type: 'skills',
      variant: 0
    }, {
      type: 'soundtrack',
      variant: 0
    }, {
      type: 'interestedBy',
      variant: 2
    }]
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      customization = _useState4[0],
      setCustomization = _useState4[1];

  var onCustomizationChanged = (0, _react.useCallback)(function (newCustomization) {
    setCustomization((0, _merge.default)({}, customization, newCustomization));
  }, [data]);
  return _react.default.createElement(_package.default, {
    isEditing: true,
    data: data,
    onEdit: onEdit,
    onCustomizationChanged: onCustomizationChanged,
    options: {
      // flipped,
      apiKeys: {
        giphy: process.env.REACT_APP_GIPHY_API_KEY
      },
      endpoints: {
        devicons: 'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2'
      },
      customization: customization
    },
    ActionButtons: _react.default.createElement(_ui.Button, {
      style: {
        color: '#fff'
      },
      variant: "outlined"
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "App.main.",
      defaultMessage: "See more"
    }))
  });
}

var _default = App;
exports.default = _default;