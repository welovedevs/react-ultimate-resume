"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileCardReducer = exports.getProfileCardInitialState = void 0;

var _profile_card_actions_types = require("./profile_card_actions_types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getProfileCardInitialState = function getProfileCardInitialState() {
  var _initialValues$hasDia, _initialValues$side, _initialValues$varian;

  var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.freeze({
    hasDialogOpened: (_initialValues$hasDia = initialValues.hasDialogOpened) !== null && _initialValues$hasDia !== void 0 ? _initialValues$hasDia : false,
    side: (_initialValues$side = initialValues.side) !== null && _initialValues$side !== void 0 ? _initialValues$side : 'front',
    variant: (_initialValues$varian = initialValues.variant) !== null && _initialValues$varian !== void 0 ? _initialValues$varian : null
  });
};

exports.getProfileCardInitialState = getProfileCardInitialState;

var profileCardReducer = function profileCardReducer(state, action) {
  switch (action.type) {
    case _profile_card_actions_types.SET_HAS_DIALOG_OPENED:
      return _objectSpread({}, state, {
        hasDialogOpened: action.hasDialogOpened
      });

    case _profile_card_actions_types.SET_SIDE:
      return _objectSpread({}, state, {
        side: action.side
      });

    case _profile_card_actions_types.SET_VARIANT:
      return _objectSpread({}, state, {
        variant: action.variant
      });

    default:
      return state;
  }
};

exports.profileCardReducer = profileCardReducer;