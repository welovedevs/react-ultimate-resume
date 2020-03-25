"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsEditForm = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _formik = require("formik");

var _useMediaQuery = _interopRequireDefault(require("@material-ui/core/useMediaQuery"));

var _ui = require("@wld/ui");

var _v = _interopRequireDefault(require("uuid/v4"));

var _all_technologies_picker = require("../../../../../commons/technologies/all_technologies_picker/all_technologies_picker");

var _selected_technologies = require("../../../../../commons/technologies/selected_technologies/selected_technologies");

var _skills_edit_form_styles = require("./skills_edit_form_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  return (/*#__PURE__*/_react.default.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/_react.default.createElement(_all_technologies_picker.AllTechnologiesPicker, {
      selectedItems: values.skills,
      onAdd: addItem,
      onDelete: deleteItem,
      classes: {
        container: classes.allTechnologies,
        technologiesList: classes.technologiesList
      }
    }), !isMobile && /*#__PURE__*/_react.default.createElement("div", {
      className: classes.divider
    }), !isMobile && /*#__PURE__*/_react.default.createElement("div", {
      className: classes.column
    }, globalError && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      color: "danger",
      component: "p"
    }, errors), /*#__PURE__*/_react.default.createElement(_selected_technologies.SelectedTechnologies, {
      className: classes.selectedTechnologies,
      items: values.skills,
      onDelete: deleteItem,
      onChange: onArrayChange,
      onItemChange: onItemChange
    })))
  );
};

var SkillsEditForm = SkillsEditFormComponent;
exports.SkillsEditForm = SkillsEditForm;