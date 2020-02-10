"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var _theme = require("../../utils/styles/theme/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useStyles = (0, _reactJss.createUseStyles)(_cards_styles.styles);
var DEFAULT_CARD_ORDER = [{
  type: 'basics',
  variant: 3
}, {
  type: 'projects',
  variant: 4
}, {
  type: 'language',
  variant: 3
}, {
  type: 'dreamjob',
  variant: 4
}, {
  type: 'gifs',
  variant: 2
}, {
  type: 'experiences',
  variant: 4
}, {
  type: 'studies',
  variant: 3
}, {
  type: 'skills',
  variant: 0
}, {
  type: 'soundtrack',
  variant: 0
}, {
  type: 'interestedBy',
  variant: 2
}];
var CARD_TYPE_MAPPING = {
  basics: _basics_card.BasicsCard,
  projects: _projects_card.ProjectsCard,
  language: _languages_card.LanguagesCard,
  dreamjob: _dream_job_card.DreamJobCard,
  gifs: _gifs_card.GifsCard,
  experiences: _experiences_card.ExperiencesCard,
  studies: _studies_card.StudiesCard,
  skills: _skills_card.SkillsCard,
  soundtrack: _soundtrack_card.SoundtrackCard,
  interestedBy: _interested_by_card.InterestedByCard
};

var CardsComponent = function CardsComponent(_ref) {
  var _ref$cardsOrder = _ref.cardsOrder,
      cardsOrder = _ref$cardsOrder === void 0 ? DEFAULT_CARD_ORDER : _ref$cardsOrder;
  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles();
  var cards = (0, _react.useMemo)(function () {
    return cardsOrder.map(function (_ref2, index) {
      var type = _ref2.type,
          variant = _ref2.variant;

      if (!CARD_TYPE_MAPPING[type]) {
        return null;
      }

      return _react.default.createElement(CARD_TYPE_MAPPING[type], {
        variant: !Number.isNaN(Number(variant)) ? variant : (0, _theme.getRandomCardVariant)(theme),
        key: "card_".concat(type, "_").concat(index)
      });
    }).filter(Boolean);
  }, [cardsOrder]);
  return _react.default.createElement("div", {
    className: classes.container
  }, cards);
};

var Cards = CardsComponent;
exports.Cards = Cards;