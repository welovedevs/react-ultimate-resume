"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobBack = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

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

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

var _dream_job_back_styles = require("./dream_job_back_styles");

var useStyles = (0, _reactJss.createUseStyles)(_dream_job_back_styles.styles);

var DreamJobBackComponent = function DreamJobBackComponent(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  var places = data.places,
      perks = data.perks,
      salary = data.salary,
      remoteFrequency = data.remoteFrequency,
      contractTypes = data.contractTypes;
  return _react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.Title",
      defaultMessage: "Dream job"
    })
  }, (0, _exists_and_not_empty.existsAndNotEmpty)(places) && _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(DreamJobLocations, {
    places: places,
    remoteFrequency: remoteFrequency,
    classes: classes
  })), (0, _exists_and_not_empty.existsAndNotEmpty)(salary) && _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Salary.Title",
    defaultMessage: "Ideal yearly salary"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, salary)), (0, _exists_and_not_empty.existsAndNotEmpty)(contractTypes) && _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.ContractTypes.Title",
    defaultMessage: "Contract types"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_contract_types.ContractType, {
    contractTypes: contractTypes
  }))), (0, _exists_and_not_empty.existsAndNotEmpty)(perks) && (0, _typeof2.default)(perks) === 'object' && Object.values(perks).some(function (value) {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(value);
  }) && _react.default.createElement(_profile_card_section.ProfileCardSection, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.Perks.Title",
    defaultMessage: "Important perks in my job"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(DreamJobPerks, {
    perks: perks
  }))));
};

var DreamJobLocations = function DreamJobLocations(_ref2) {
  var remoteFrequency = _ref2.remoteFrequency,
      places = _ref2.places,
      classes = _ref2.classes;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  if (remoteFrequency === _remote_utils.REMOTE_FREQUENCY.FULL_TIME) {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.Location.RemoteOnly",
      defaultMessage: "I only want to work remotely"
    });
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.Title",
    defaultMessage: "My dreamjob location"
  })), _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(DreamJobPlaces, {
    places: places,
    classes: classes
  }), _react.default.createElement("br", null), remoteFrequency && formatMessage(_remote_filter_translations.remoteDisplayTranslations[remoteFrequency] || _remote_filter_translations.remoteDisplayTranslations.others)));
};

var DreamJobPlaces = function DreamJobPlaces(_ref3) {
  var _ref3$places = _ref3.places,
      places = _ref3$places === void 0 ? [] : _ref3$places,
      classes = _ref3.classes;
  var textAnchor = (0, _react.useRef)();

  var _useOpenerState = (0, _use_opener_state.useOpenerState)(),
      _useOpenerState2 = (0, _slicedToArray2.default)(_useOpenerState, 2),
      open = _useOpenerState2[0],
      handlers = _useOpenerState2[1];

  var _useMemo = (0, _react.useMemo)(function () {
    var placesCopy = (0, _toConsumableArray2.default)(places);
    var item = placesCopy.shift();
    return {
      firstPlace: item,
      remainingPlaces: placesCopy
    };
  }, [places]),
      firstPlace = _useMemo.firstPlace,
      remainingPlaces = _useMemo.remainingPlaces;

  if (!remainingPlaces.length) {
    var _ref4;

    return _react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Dreamjob.Back.Location.OnePlace",
      defaultMessage: "I want to work in {place}",
      values: {
        place: (_ref4 = firstPlace === null || firstPlace === void 0 ? void 0 : firstPlace.name) !== null && _ref4 !== void 0 ? _ref4 : ''
      }
    }));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", (0, _extends2.default)({
    className: classes.button,
    type: "button",
    ref: textAnchor
  }, handlers), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.Back.Location.ManyPlaces",
    defaultMessage: "I want to work in {place} and {length, plural, one {one other place} other {# other places}}",
    values: {
      place: firstPlace.name,
      length: remainingPlaces.length
    }
  })), _react.default.createElement(_ui.PopperCard, {
    open: open,
    anchorElement: textAnchor.current
  }, _react.default.createElement(_ui.List, null, remainingPlaces.filter(function (item) {
    return item;
  }).map(function (_ref5, index) {
    var name = _ref5.name;
    return _react.default.createElement(_ui.ListItem, {
      key: "place_popper_".concat(index)
    }, _react.default.createElement(_ui.Typography, null, name));
  }))));
};

var DreamJobPerks = function DreamJobPerks(_ref6) {
  var _ref6$perks = _ref6.perks,
      perks = _ref6$perks === void 0 ? {} : _ref6$perks;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  return Object.entries(perks || {}).map(function (_ref7) {
    var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
        key = _ref8[0],
        value = _ref8[1];

    if (key === _job_perks_utils.JobPerks.OTHER) {
      return value;
    }

    return formatMessage(_job_perks_translations.jobPerksTranslations[key.toLowerCase()] || _job_perks_translations.jobPerksTranslations.others);
  }).join(', ');
};

var DreamJobBack = DreamJobBackComponent;
exports.DreamJobBack = DreamJobBack;