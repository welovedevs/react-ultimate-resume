"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCardSide = void 0;

var _react = require("react");

var _profile_card = require("../profile_card");

var _profile_card_actions_types = require("../../../../store/profile_card/profile_card_actions_types");

var useCardSide = function useCardSide() {
  var _useContext = (0, _react.useContext)(_profile_card.ProfileCardContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var side = state.side;
  var setCardSide = (0, _react.useCallback)(function (newSide) {
    return dispatch({
      type: _profile_card_actions_types.SET_SIDE,
      side: newSide
    });
  }, []);
  return [side, setCardSide];
};

exports.useCardSide = useCardSide;