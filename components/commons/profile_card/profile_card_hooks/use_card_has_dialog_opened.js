"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHasDialogOpened = void 0;

var _react = require("react");

var _profile_card = require("../profile_card");

var _profile_card_actions_types = require("../../../../store/profile_card/profile_card_actions_types");

var useHasDialogOpened = function useHasDialogOpened() {
  var _useContext = (0, _react.useContext)(_profile_card.ProfileCardContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var hasDialogOpened = state.hasDialogOpened;
  var setHasDialogOpened = (0, _react.useCallback)(function (newHasDialogOpened) {
    return dispatch({
      type: _profile_card_actions_types.SET_HAS_DIALOG_OPENED,
      hasDialogOpened: newHasDialogOpened
    });
  }, []);
  return [hasDialogOpened, setHasDialogOpened];
};

exports.useHasDialogOpened = useHasDialogOpened;