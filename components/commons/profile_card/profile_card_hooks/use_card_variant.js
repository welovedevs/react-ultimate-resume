"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCardVariant = void 0;

var _react = require("react");

var _profile_card = require("../profile_card");

var _profile_card_actions_types = require("../../../../store/profile_card/profile_card_actions_types");

var useCardVariant = function useCardVariant() {
  var _useContext = (0, _react.useContext)(_profile_card.ProfileCardContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var variant = state.variant;
  var setCardVariant = (0, _react.useCallback)(function (newVariant) {
    return dispatch({
      type: _profile_card_actions_types.SET_VARIANT,
      variant: newVariant
    });
  }, []);
  return [variant, setCardVariant];
};

exports.useCardVariant = useCardVariant;