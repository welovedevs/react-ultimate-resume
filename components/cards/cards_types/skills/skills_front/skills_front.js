"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsFront = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _skills_front_styles = require("./skills_front_styles");

var _use_technologies = require("../../../../hooks/technologies/use_technologies");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ReactLogo = function ReactLogo(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M174.267 61.056c27.982 8.57 46.233 22.386 46.233 36.966 0 14.536-18.161 28.353-45.964 36.921 6.502 28.443 3.677 51.098-8.924 58.365-2.96 1.705-6.368 2.513-10.134 2.513-12.332 0-28.476-8.704-44.799-23.867C94.356 187.207 78.213 196 65.881 196c-3.767 0-7.175-.808-10.09-2.512-12.645-7.268-15.515-29.968-9.058-58.5C18.751 126.42.5 112.602.5 98.022c0-14.535 18.161-28.307 46.054-36.92-6.502-28.443-3.677-51.098 8.924-58.365C58.438 1.032 61.845.224 65.612.224V.18c12.332 0 28.475 8.704 44.798 23.867C126.733 8.793 142.877 0 155.209 0v.045c3.704.006 7.096.814 10 2.512 12.645 7.268 15.515 29.968 9.058 58.5zm-19.103-51.052c-9.327.024-23.028 7.469-37.624 21.04 6.323 6.595 12.601 14.132 18.655 22.43 10.09 1.078 19.686 2.738 28.475 4.89.987-4.53 1.794-8.971 2.287-13.188 2.063-17.138-.583-30.461-6.681-33.96-1.39-.763-3.05-1.167-5.112-1.167v-.045zM103.28 31.09C88.661 17.586 74.895 10.184 65.612 10.184v.044c-2.063 0-3.812.36-5.157 1.167-6.054 3.544-8.655 16.868-6.547 34.005a135.38 135.38 0 0 0 2.332 13.01c8.79-2.198 18.386-3.858 28.52-4.935a211.906 211.906 0 0 1 18.52-22.386zM98.5 142c4.159 5.119 8.363 9.8 12.568 14 4.159-4.2 8.363-8.881 12.432-14-4.114.219-8.318.306-12.568.306-4.204 0-8.363-.131-12.432-.306zm-38.79 42.798c-5.964-3.473-8.55-16.698-6.534-33.707.483-4.186 1.272-8.594 2.237-13.091 8.594 2.137 17.979 3.785 27.845 4.853 5.92 8.238 12.059 15.718 18.242 22.264C87.205 178.609 73.786 186 64.665 186c-1.973-.045-3.64-.445-4.955-1.202zm99.679-.959c5.922-3.527 8.466-16.789 6.404-33.846-.482-4.152-1.272-8.483-2.28-12.993-8.598 2.188-17.984 3.84-27.897 4.912-5.834 8.26-11.975 15.717-18.116 22.281C131.799 177.633 145.265 185 154.345 185c2.018 0 3.729-.357 5.044-1.161zM161.5 68.5c-1.624 5.715-3.644 11.608-5.927 17.5-1.8-3.544-3.688-7.089-5.751-10.633-2.02-3.544-4.171-7-6.322-10.367 6.234.93 12.249 2.082 18 3.5zm-30.16 65.599c3.735-5.362 7.335-11.129 10.845-17.212A252.395 252.395 0 0 0 151.5 98.91a234.792 234.792 0 0 0-9.36-17.932 248.399 248.399 0 0 0-10.89-17.122C124.59 63.316 117.795 63 111 63c-6.84 0-13.635.315-20.34.901-3.735 5.362-7.335 11.129-10.845 17.212-3.375 5.902-6.525 11.94-9.315 17.977a234.857 234.857 0 0 0 9.36 17.933 248.606 248.606 0 0 0 10.89 17.121c6.66.541 13.455.856 20.25.856 6.84 0 13.635-.315 20.34-.901zM77.5 131c-6.234-.93-12.249-2.082-18-3.5 1.624-5.715 3.644-11.608 5.927-17.5 1.8 3.544 3.688 7.089 5.751 10.633 2.064 3.544 4.17 7 6.322 10.367zm84-3.515A189.02 189.02 0 0 0 155.471 110c-1.791 3.515-3.67 7.073-5.68 10.588-2.009 3.558-4.15 7.029-6.291 10.412a195.151 195.151 0 0 0 18-3.515zM77.5 65c-2.14 3.39-4.282 6.868-6.291 10.434A249.37 249.37 0 0 0 65.529 86 189.667 189.667 0 0 1 59.5 68.478 210.712 210.712 0 0 1 77.5 65zm-67 33.477c0 7.107 10.13 16.07 25.792 22.906 3.849 1.675 8.007 3.214 12.387 4.617 2.477-8.827 5.751-18.016 9.821-27.432-4.114-9.461-7.432-18.696-9.954-27.568-4.291 1.403-8.45 2.897-12.254 4.572C20.63 82.362 10.5 91.37 10.5 98.477zm173.188 22.951c-3.801 1.675-7.956 3.169-12.243 4.572-2.52-8.872-5.834-18.107-9.945-27.568 4.066-9.416 7.337-18.605 9.812-27.432 4.376 1.403 8.531 2.942 12.42 4.617 15.646 6.836 25.768 15.799 25.768 22.906-.044 7.107-10.166 16.115-25.812 22.905zM123.5 52c-4.159-5.119-8.363-9.8-12.568-14A172.525 172.525 0 0 0 98.5 52c4.114-.219 8.318-.306 12.568-.306 4.204 0 8.363.131 12.432.306z",
    fill: "#F5F5F5"
  }), _react.default.createElement("path", {
    d: "M111.5 117c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z",
    fill: "#F5F5F5"
  }));
};

ReactLogo.defaultProps = {
  width: "221",
  height: "196",
  viewBox: "0 0 221 196",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_skills_front_styles.styles);

var SkillsFrontComponent = function SkillsFrontComponent(_ref) {
  var data = _ref.data;
  var classes = useStyles();

  var _useTechnologies = (0, _use_technologies.useTechnologies)(),
      technologies = _useTechnologies.technologies;

  var techno = (0, _react.useMemo)(function () {
    var _data$skills;

    var firstTechno = data === null || data === void 0 ? void 0 : (_data$skills = data.skills) === null || _data$skills === void 0 ? void 0 : _data$skills[0];

    if (!technologies || !firstTechno) {
      return null;
    }

    return technologies[firstTechno === null || firstTechno === void 0 ? void 0 : firstTechno.name];
  }, [technologies, data]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, _react.default.createElement("img", {
    src: techno && "https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/".concat(techno === null || techno === void 0 ? void 0 : techno.handle),
    className: classes.logo
  }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    customClasses: {
      container: classes.typography
    }
  }, "I mainly write ", techno === null || techno === void 0 ? void 0 : techno.name, " stuff"))), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, null, "More skills")));
};

var SkillsFront = SkillsFrontComponent;
exports.SkillsFront = SkillsFront;