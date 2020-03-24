"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsBack = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _contract_types = require("../../../../commons/fields/contract_types/contract_types");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _job_search_state_translations = require("../../../../../utils/enums/job_serachstate/job_search_state_translations");

var _basics_back_styles = require("./basics_back_styles");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var _professional_experience = require("./fields/professional_experience");

var _coding_years = require("./fields/coding_years");

var _studies_level = require("./fields/studies_level");

var _use_mode = require("../../../../hooks/use_mode");

var useStyles = (0, _reactJss.createUseStyles)(_basics_back_styles.styles);

var BasicsBackComponent = function BasicsBackComponent(_ref) {
  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

  var _useMode = (0, _use_mode.useMode)(),
      _useMode2 = (0, _slicedToArray2.default)(_useMode, 1),
      mode = _useMode2[0];

  var classes = useStyles();
  var currentCityName = data.currentCity.name,
      experienceYears = data.experienceYears,
      contractTypes = data.contractTypes,
      studiesLevel = data.studiesLevel,
      codingYears = data.codingYears,
      codingReason = data.codingReason,
      searchState = data.searchState,
      visaSponsorship = data.visaSponsorship,
      personalDescription = data.personalDescription;
  var descriptionContent = (0, _react.useMemo)(function () {
    if (!personalDescription && mode === 'edit') {
      return (/*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
          handleAddButtonClick: handleAddButtonClick,
          classes: {
            container: classes.addButton
          }
        }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "Basics.noDescription.buttonLabel",
          defaultMessage: "Ajouter une description"
        }))
      );
    }

    return (/*#__PURE__*/_react.default.createElement("span", null, personalDescription)
    );
  }, [personalDescription, mode, handleAddButtonClick, classes]);
  var sections = (0, _react.useMemo)(function () {
    return {
      personalDescription: {
        title: null,
        hide: false,
        value: descriptionContent
      },
      visaSponsorship: {
        hide: !(0, _exists_and_not_empty.existsAndNotEmpty)(visaSponsorship),
        value: /*#__PURE__*/_react.default.createElement("span", {
          className: classes.bold
        }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "Basics.Back.VisaSponsorship",
          defaultMessage: "I require a visa sponsorship"
        }))
      },
      work: {
        title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "Basics.Back.Work.Title",
          defaultMessage: "Work"
        }),
        hide: !experienceYears && !(0, _exists_and_not_empty.existsAndNotEmpty)(contractTypes) && !(0, _exists_and_not_empty.existsAndNotEmpty)(searchState),
        value: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_professional_experience.ExperienceYears, {
          experienceYears: experienceYears
        }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_contract_types.ContractType, {
          contractTypes: contractTypes
        }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(JobSearchState, {
          searchState: searchState
        }))
      },
      codingYears: {
        title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "Basics.Back.CodingYears.title",
          defaultMessage: "Experience"
        }),
        hide: !personalDescription,
        value: /*#__PURE__*/_react.default.createElement(_coding_years.CodingYears, {
          codingYears: codingYears
        })
      },
      studies: {
        title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "Basics.Back.StudiesLevel.Title",
          defaultMessage: "Training"
        }),
        hide: !studiesLevel,
        value: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_studies_level.StudiesLevel, {
          studiesLevel: studiesLevel
        }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), codingReason && /*#__PURE__*/_react.default.createElement("span", null, codingReason))
      }
    };
  }, [currentCityName, experienceYears, contractTypes, studiesLevel, codingYears, codingReason, visaSponsorship, personalDescription, descriptionContent, searchState]);
  return (/*#__PURE__*/_react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
      title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Basics.Back.Title",
        defaultMessage: "Who?"
      })
    }, Object.entries(sections).filter(function (_ref2) {
      var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
          hide = _ref3[1].hide;

      return !hide;
    }).map(function (_ref4) {
      var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
          id = _ref5[0],
          _ref5$ = _ref5[1],
          title = _ref5$.title,
          value = _ref5$.value;

      return (/*#__PURE__*/_react.default.createElement(_profile_card_section.ProfileCardSection, {
          key: id
        }, title && /*#__PURE__*/_react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, title), /*#__PURE__*/_react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, value))
      );
    }))
  );
};

var JobSearchState = function JobSearchState(_ref6) {
  var searchState = _ref6.searchState;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  if (!searchState) {
    return null;
  }

  return (/*#__PURE__*/_react.default.createElement("span", null, formatMessage(_job_search_state_translations.translations[searchState] || _job_search_state_translations.translations.unknown))
  );
};

var BasicsBack = (0, _react.memo)(BasicsBackComponent);
exports.BasicsBack = BasicsBack;