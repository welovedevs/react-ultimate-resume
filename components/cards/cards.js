"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cards = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _theme = require("../../utils/styles/theme/theme");

var _cards_order = require("./utils/cards_order");

var _cards_styles = require("./cards_styles");

var _use_additional_nodes = require("../hooks/use_additional_nodes");

var useStyles = (0, _reactJss.createUseStyles)(_cards_styles.styles);
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
      cardsOrder = _ref$cardsOrder === void 0 ? _cards_order.DEFAULT_CARD_ORDER : _ref$cardsOrder,
      side = _ref.side;
  var classes = useStyles();
  var theme = (0, _reactJss.useTheme)();

  var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('cards'),
      _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
      _useAdditionalNodes2$ = _useAdditionalNodes2[0],
      beforeNode = _useAdditionalNodes2$.before,
      afterNode = _useAdditionalNodes2$.after;

  var cards = (0, _react.useMemo)(function () {
    return cardsOrder.map(function (_ref2, index) {
      var type = _ref2.type,
          variant = _ref2.variant;

      if (!CARD_TYPE_MAPPING[type]) {
        return null;
      }

      return _react.default.createElement(CARD_TYPE_MAPPING[type], {
        variant: !Number.isNaN(Number(variant)) ? variant : (0, _theme.getRandomCardVariant)(theme),
        key: "card_".concat(type, "_").concat(index),
        side: side
      });
    }).filter(Boolean);
  }, [cardsOrder]);
  return _react.default.createElement("div", {
    className: classes.container
  }, beforeNode, cards, afterNode);
};

var Cards = CardsComponent;
exports.Cards = Cards;