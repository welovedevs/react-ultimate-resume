"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_STUB_TRANSLATIONS = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var CARD_STUB_TRANSLATIONS = Object.freeze({
  backgroundColor: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "CardStub.CardVariantTooltip.FrontBackground",
    defaultMessage: "Card's front background"
  }),
  color: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "CardStub.CardVariantTooltip.FrontColor",
    defaultMessage: "Card's front texts & icons color"
  }),
  backBackgroundColor: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "CardStub.CardVariantTooltip.BackBackgroundColor",
    defaultMessage: "Card's back background"
  }),
  backColor: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "CardStub.CardVariantTooltip.BackColor",
    defaultMessage: "Card's back texts & icons color"
  })
});
exports.CARD_STUB_TRANSLATIONS = CARD_STUB_TRANSLATIONS;