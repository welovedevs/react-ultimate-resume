"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _profile_card = require("../../../commons/profile_card/profile_card");

var _projects_front = require("./projects_front/projects_front");

var _projects_back = require("./projects_back/projects_back");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectsCardComponent = function ProjectsCardComponent(_ref) {
  var variant = _ref.variant,
      side = _ref.side;
  return _react.default.createElement(_profile_card.ProfileCard, {
    sides: {
      front: _projects_front.ProjectsFront,
      back: _projects_back.ProjectsBack
    },
    variant: variant,
    side: side
  });
};

var ProjectsCard = ProjectsCardComponent;
exports.ProjectsCard = ProjectsCard;