"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsBack = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _reactEmojiRender = require("react-emoji-render");

var _text_section = require("../../../../commons/sections/text_section");

var _profile_card_title = require("../../../../commons/profile_card_title/profile_card_title");

var _profile_card_content = require("../../../../commons/profile_card_content/profile_card_content");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicsBackComponent = function BasicsBackComponent(_ref) {
  var data = _ref.data,
      variant = _ref.variant;
  var currentCity = data.currentCity,
      remoteWork = data.remoteWork,
      experienceYears = data.experienceYears,
      contractType = data.contractType,
      studiesLevel = data.studiesLevel,
      codingYears = data.codingYears,
      codingReason = data.codingReason;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_title.ProfileCardTitle, {
    cardVariant: variant
  }, "Who?"), _react.default.createElement(_profile_card_content.ProfileCardContent, null, _react.default.createElement(_text_section.TextSection, {
    icon: _react.default.createElement(_reactEmojiRender.Twemoji, {
      svg: true,
      text: "\uD83D\uDCCD"
    })
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Location",
    defaultMessage: 'based in {currentCity}',
    values: {
      currentCity: currentCity
    }
  }), _react.default.createElement("div", null, _react.default.createElement(RemoteWork, {
    remoteWork: remoteWork
  }))), _react.default.createElement(_text_section.TextSection, {
    icon: _react.default.createElement(_reactEmojiRender.Twemoji, {
      svg: true,
      text: "\uD83D\uDCBC"
    })
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Experience",
    defaultMessage: '{experienceYears} years of experience',
    values: {
      experienceYears: experienceYears
    }
  }), _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.ContractType",
    defaultMessage: 'Looking for a {contractType} contract',
    values: {
      contractType: contractType
    }
  })), _react.default.createElement(_text_section.TextSection, {
    icon: _react.default.createElement(_reactEmojiRender.Twemoji, {
      svg: true,
      text: "\uD83C\uDF93"
    })
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.StudiesLevel",
    defaultMessage: '{studiesLevel} years of higher education',
    values: {
      studiesLevel: studiesLevel
    }
  })), _react.default.createElement(_text_section.TextSection, {
    icon: _react.default.createElement(_reactEmojiRender.Twemoji, {
      svg: true,
      text: "\uD83D\uDCBB"
    })
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.CodingYears",
    defaultMessage: '{codingYears} years coding',
    values: {
      codingYears: codingYears
    }
  })), _react.default.createElement(_text_section.TextSection, {
    icon: _react.default.createElement(_reactEmojiRender.Twemoji, {
      svg: true,
      text: "\uD83D\uDC99"
    })
  }, codingReason)));
};

var RemoteWork = function RemoteWork(_ref2) {
  var remoteWork = _ref2.remoteWork;

  if (!remoteWork) {
    return null;
  }

  if (remoteWork === 'NEVER') {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.Location",
      defaultMessage: "Not looking for remote work"
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.Location",
    defaultMessage: "Looking for remote work"
  });
};

var BasicsBack = BasicsBackComponent;
exports.BasicsBack = BasicsBack;