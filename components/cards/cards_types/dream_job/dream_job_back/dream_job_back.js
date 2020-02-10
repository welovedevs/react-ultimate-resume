"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobBack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _contract_types = require("../../../../commons/fields/contract_types/contract_types");

var _job_perks_utils = require("../../../../../utils/enums/job_perks/job_perks_utils");

var _use_opener_state = require("../../../../hooks/use_opener_state");

var _job_perks_translations = require("../../../../../utils/enums/job_perks/job_perks_translations");

var _remote_filter_translations = require("../../../../../utils/enums/remote/remote_filter_translations");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DreamJobPlaces = function DreamJobPlaces(_ref) {
  var _ref$places = _ref.places,
      places = _ref$places === void 0 ? [] : _ref$places;
  var textAnchor = (0, _react.useRef)();

  var _useOpenerState = (0, _use_opener_state.useOpenerState)(),
      _useOpenerState2 = _slicedToArray(_useOpenerState, 2),
      open = _useOpenerState2[0],
      handlers = _useOpenerState2[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var placesCopy = _toConsumableArray(places);

    var item = placesCopy.shift();
    return {
      firstPlace: item,
      remainingPlaces: placesCopy
    };
  }, [places]),
      firstPlace = _useMemo.firstPlace,
      remainingPlaces = _useMemo.remainingPlaces;

  if (!remainingPlaces.length) {
    var _ref2;

    return _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.Location.OnePlace",
      defaultMessage: "I want to work in {place}",
      values: {
        place: (_ref2 = firstPlace === null || firstPlace === void 0 ? void 0 : firstPlace.name) !== null && _ref2 !== void 0 ? _ref2 : ''
      }
    }));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", _extends({
    ref: textAnchor
  }, handlers), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.OnePlace",
    defaultMessage: "I want to work in {place} and {length, plural, one {one other place} other {# other places}}",
    values: {
      place: firstPlace.name,
      length: remainingPlaces.length
    }
  }))), _react.default.createElement(_ui.PopperCard, {
    open: open,
    anchorElement: textAnchor.current
  }, _react.default.createElement(_ui.List, null, remainingPlaces.filter(function (item) {
    return item;
  }).map(function (_ref3, index) {
    var name = _ref3.name;
    return _react.default.createElement(_ui.ListItem, {
      key: "place_popper_".concat(index)
    }, _react.default.createElement(_ui.Typography, null, name));
  }))));
};

var DreamJobLocations = function DreamJobLocations(_ref4) {
  var remoteFrequency = _ref4.remoteFrequency,
      places = _ref4.places;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  if (remoteFrequency === _remote_utils.REMOTE_FREQUENCY.FULL_TIME) {
    return _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.Location.RemoteOnly",
      defaultMessage: "I only want to work remotely"
    }));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.Title",
    defaultMessage: "My dreamjob location"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(DreamJobPlaces, {
    places: places
  }), _react.default.createElement("br", null), remoteFrequency && formatMessage(_remote_filter_translations.remoteDisplayTranslations[remoteFrequency] || _remote_filter_translations.remoteDisplayTranslations.others)));
};

var DreamJobPerks = function DreamJobPerks(_ref5) {
  var _ref5$perks = _ref5.perks,
      perks = _ref5$perks === void 0 ? {} : _ref5$perks;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  return Object.entries(perks || {}).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        key = _ref7[0],
        value = _ref7[1];

    if (key === _job_perks_utils.JobPerks.OTHER) {
      return value;
    }

    return formatMessage(_job_perks_translations.jobPerksTranslations[key.toLowerCase()] || _job_perks_translations.jobPerksTranslations.other);
  }).join(', ');
};

var DreamJobBackComponent = function DreamJobBackComponent(_ref8) {
  var data = _ref8.data;
  var places = data.places,
      perks = data.perks,
      salary = data.salary,
      remoteFrequency = data.remoteFrequency,
      contractTypes = data.contractTypes;
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: "Dream job"
  }, _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(DreamJobLocations, {
    places: places,
    remoteFrequency: remoteFrequency
  })), _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Salary.Title",
    defaultMessage: "Ideal yearly salary"
  }))), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, salary)), _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.ContractTypes.Title",
    defaultMessage: "Contract types"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_contract_types.ContractType, {
    contractTypes: contractTypes
  }))), _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.Perks.Title",
    defaultMessage: "Important perks in my job"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(DreamJobPerks, {
    perks: perks
  }))));
};

var DreamJobBack = DreamJobBackComponent;
exports.DreamJobBack = DreamJobBack;