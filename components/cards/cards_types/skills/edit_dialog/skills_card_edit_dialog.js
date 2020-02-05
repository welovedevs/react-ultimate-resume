"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillsCardEditDialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _formik = require("formik");

var _v = _interopRequireDefault(require("uuid/v4"));

var _edit_dialog = require("../../../../commons/edit_dialog/edit_dialog");

var _reactJss = require("react-jss");

var _skills_card_edit_dialog_styles = require("./skills_card_edit_dialog_styles");

var _technologies_picker = require("../../../../commons/technologies/technologies_picker/technologies_picker");

var _technologies_orderer = require("../../../../commons/technologies/technologies_ordered/technologies_orderer");

var _skills_pie_chart = _interopRequireDefault(require("../skills_back/skills_pie_chart/skills_pie_chart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _reactJss.createUseStyles)(_skills_card_edit_dialog_styles.styles);

var SkillsCardEditDialogComponent = function SkillsCardEditDialogComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      data = _ref.data,
      onEdit = _ref.onEdit;
  var classes = useStyles();
  return _react.default.createElement(_edit_dialog.EditDialog, {
    open: open,
    onClose: onClose,
    data: data,
    onEdit: onEdit,
    dialogClasses: {
      dialog: {
        root: classes.dialogRoot,
        paper: classes.dialogPaper
      }
    },
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Skills.editDialog.title",
      defaultMessage: "What are your main skills?"
    })
  }, function (helpers) {
    return _react.default.createElement(Content, {
      helpers: helpers
    });
  });
};

var Content = function Content(_ref2) {
  var handleValueChange = _ref2.helpers.handleValueChange;
  var classes = useStyles();

  var _useFormikContext = (0, _formik.useFormikContext)(),
      values = _useFormikContext.values;

  var addItem = (0, _react.useCallback)(function (name) {
    return handleValueChange("skills[".concat(values.skills.length, "]"))({
      name: name,
      index: values.skills.length,
      value: 50,
      id: (0, _v.default)()
    });
  }, [values]);
  var deleteItem = (0, _react.useCallback)(function (id) {
    return handleValueChange('skills')(values.skills.filter(function (_ref3) {
      var skillId = _ref3.id;
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
  var pieData = (0, _react.useMemo)(function () {
    var _values$skills;

    return (_values$skills = values.skills) === null || _values$skills === void 0 ? void 0 : _values$skills.slice(0, 3);
  }, [values]);
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_technologies_picker.TechnologiesPicker, {
    className: classes.picker,
    selectedItems: values.skills,
    onAdd: addItem,
    onDelete: deleteItem
  }), _react.default.createElement("div", {
    className: classes.rightColumn
  }, _react.default.createElement(_technologies_orderer.TechnologiesOrderer, {
    className: classes.orderer,
    items: values.skills,
    onDelete: deleteItem,
    onChange: onArrayChange,
    onItemChange: onItemChange
  }), _react.default.createElement(_skills_pie_chart.default, {
    variant: 2,
    data: pieData,
    width: 280
  })));
};

var SkillsCardEditDialog = SkillsCardEditDialogComponent;
exports.SkillsCardEditDialog = SkillsCardEditDialog;