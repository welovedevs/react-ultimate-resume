"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsEditForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _formik = require("formik");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _ui = require("@wld/ui");

var _v = _interopRequireDefault(require("uuid/v4"));

var _all_technologies_picker = require("../../../../../commons/technologies/all_technologies_picker/all_technologies_picker");

var _selected_technologies = require("../../../../../commons/technologies/selected_technologies/selected_technologies");

var _skills_edit_form_styles = require("./skills_edit_form_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _reactJss.createUseStyles)(_skills_edit_form_styles.styles);

var SkillsEditFormComponent = function SkillsEditFormComponent(_ref) {
  var handleValueChange = _ref.helpers.handleValueChange;
  var theme = (0, _reactJss.useTheme)();
  var isMobile = (0, _useMediaQuery.default)("(max-width: ".concat(theme.screenSizes.small, "px)"));
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values,
      validationErrors = _useFormikContext.errors;

  var errors = validationErrors.skills;
  var addItem = (0, _react.useCallback)(function (name) {
    return handleValueChange("skills[".concat(values.skills.length, "]"))({
      name: name,
      index: values.skills.length,
      value: 50,
      id: (0, _v.default)()
    });
  }, [values]);
  var deleteItem = (0, _react.useCallback)(function (id) {
    return handleValueChange('skills')(values.skills.filter(function (_ref2) {
      var skillId = _ref2.id;
      return skillId !== id;
    }).map(function (skill, index) {
      return _objectSpread({}, skill, {
        index: index
      });
    }));
  }, [values.skills]);
  var onArrayChange = (0, _react.useCallback)(function (array) {
    return handleValueChange('skills')(array);
  }, [values.skills]);
  var onItemChange = (0, _react.useCallback)(function (item) {
    return handleValueChange("skills[".concat(item.index, "]"))(item);
  }, []);
  var globalError = typeof errors === 'string' && errors;
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_all_technologies_picker.AllTechnologiesPicker, {
    selectedItems: values.skills,
    onAdd: addItem,
    onDelete: deleteItem,
    classes: {
      container: classes.allTechnologies,
      technologiesList: classes.technologiesList
    }
  }), !isMobile && _react.default.createElement("div", {
    className: classes.divider
  }), !isMobile && _react.default.createElement("div", {
    className: classes.column
  }, globalError && _react.default.createElement(_ui.Typography, {
    color: "danger",
    component: "p"
  }, errors), _react.default.createElement(_selected_technologies.SelectedTechnologies, {
    className: classes.selectedTechnologies,
    items: values.skills,
    onDelete: deleteItem,
    onChange: onArrayChange,
    onItemChange: onItemChange
  })));
};

var SkillsEditForm = SkillsEditFormComponent;
exports.SkillsEditForm = SkillsEditForm;