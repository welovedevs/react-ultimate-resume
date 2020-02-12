"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remoteDisplayTranslations = exports.remoteSelectTranslations = void 0;

var _reactIntl = require("react-intl");

var remoteSelectTranslations = (0, _reactIntl.defineMessages)({
  never: {
    "id": "Developer.RemoteFrequency.Select.Never",
    "defaultMessage": "No"
  },
  occasionally: {
    "id": "Developer.RemoteFrequency.Select.Occasionally",
    "defaultMessage": "Occasionally"
  },
  regularly: {
    "id": "Developer.RemoteFrequency.Select.Regularly",
    "defaultMessage": "Regularly"
  },
  fullTime: {
    "id": "Developer.RemoteFrequency.Select.FullTime",
    "defaultMessage": "Full-time"
  },
  others: {
    "id": "Developer.RemoteFrequency.Select.Other",
    "defaultMessage": "Other"
  }
});
exports.remoteSelectTranslations = remoteSelectTranslations;
var remoteDisplayTranslations = (0, _reactIntl.defineMessages)({
  never: {
    "id": "Developer.RemoteFrequency.Display.never",
    "defaultMessage": "I'm not interested by remote work"
  },
  occasionally: {
    "id": "Developer.RemoteFrequency.Display.occasionally",
    "defaultMessage": "I'm interested by occasional remote work (a few times a month)"
  },
  regularly: {
    "id": "Developer.RemoteFrequency.Display.regularly",
    "defaultMessage": "I'm interested by regular remote work (a few times a week)"
  },
  fullTime: {
    "id": "Developer.RemoteFrequency.Display.fullTime",
    "defaultMessage": "I'm interested by full-time remote work"
  },
  others: {
    "id": "Developer.RemoteFrequency.Display.other",
    "defaultMessage": "Autres"
  }
});
exports.remoteDisplayTranslations = remoteDisplayTranslations;