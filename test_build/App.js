"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ui = require("@wld/ui");

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _package = _interopRequireDefault(require("./package"));

var _json_stub = _interopRequireDefault(require("./data/json_stub.json"));

var DEFAULT_CARD_ORDER = [{
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
}];

var mergeFunction = function mergeFunction(objValue, srcValue) {
  if ((0, _isArray.default)(objValue)) {
    return srcValue;
  }

  return (0, _merge.default)(objValue, srcValue);
};

function App() {
  var _useState = (0, _react.useState)(_json_stub.default),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var onEdit = (0, _react.useCallback)(function (newData) {
    setData((0, _mergeWith.default)((0, _cloneDeep.default)(data), newData, mergeFunction));
  }, [data]);

  var _useState3 = (0, _react.useState)({
    cardsOrder: DEFAULT_CARD_ORDER
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      customization = _useState4[0],
      setCustomization = _useState4[1];

  var onCustomizationChanged = (0, _react.useCallback)(setCustomization, [data]);
  return _react.default.createElement(_package.default, {
    mode: "edit",
    data: data,
    onEdit: onEdit,
    isEditing: true,
    onCustomizationChanged: onCustomizationChanged,
    options: {
      // side: 'back',
      apiKeys: {
        giphy: process.env.REACT_APP_GIPHY_API_KEY
      },
      endpoints: {
        devicons: 'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2',
        unsplashProxy: 'https://us-central1-test-project-412e3.cloudfunctions.net/unsplash-unsplashProxy'
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