"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _basics_card = require("./cards_types/basics/basics_card");

var _projects_card = require("./cards_types/projects/projects_card");

var _interested_by_card = require("./cards_types/interested_by/interested_by_card");

var _soundtrack_card = require("./cards_types/soundtrack/soundtrack_card");

var _studies_card = require("./cards_types/studies/studies_card");

var _experiences_card = require("./cards_types/experiences/experiences_card");

var _skills_card = require("./cards_types/skills/skills_card");

var _gifs_card = require("./cards_types/gifs/gifs_card");

var _dream_job_card = require("./cards_types/dream_job/dream_job_card");

var _languages_card = require("./cards_types/languages/languages_card");

var _cards_styles = require("./cards_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_cards_styles.styles);

var CardsComponent = function CardsComponent() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_basics_card.BasicsCard, {
    variant: 3
  }), _react.default.createElement(_projects_card.ProjectsCard, {
    variant: 4
  }), _react.default.createElement(_languages_card.LanguagesCard, {
    variant: 3
  }), _react.default.createElement(_dream_job_card.DreamJobCard, {
    variant: 4
  }), _react.default.createElement(_gifs_card.GifsCard, {
    variant: 2
  }), _react.default.createElement(_experiences_card.ExperiencesCard, {
    variant: 4
  }), _react.default.createElement(_studies_card.StudiesCard, {
    variant: 3
  }), _react.default.createElement(_skills_card.SkillsCard, {
    variant: 0
  }), _react.default.createElement(_soundtrack_card.SoundtrackCard, {
    variant: 0
  }), _react.default.createElement(_interested_by_card.InterestedByCard, {
    variant: 2
  }));
};

var Cards = CardsComponent;
exports.Cards = Cards;