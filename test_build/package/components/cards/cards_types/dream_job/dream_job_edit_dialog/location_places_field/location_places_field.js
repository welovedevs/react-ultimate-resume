"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationPlacesField = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _location_field = require("../../../../../commons/location_field/location_field");

var _edit_dialog_field = require("../../../../../commons/edit_dialog_field/edit_dialog_field");

var _location_places_field_transitions_spring_props = require("./location_places_field_transitions_spring_props");

var _location_places_field_styles = require("./location_places_field_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TrashIcon = function TrashIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M8.277 25.334C8.277 26.8 9.498 28 10.99 28h10.857c1.493 0 2.714-1.2 2.714-2.666v-16H8.277v16zm17.642-20h-4.75L19.813 4h-6.785L11.67 5.333H6.92V8h19V5.333z"
  }));
};

TrashIcon.defaultProps = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "#fff",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_location_places_field_styles.styles);

var LocationPlacesFieldComponent = function LocationPlacesFieldComponent(_ref) {
  var error = _ref.error,
      places = _ref.places,
      addPlace = _ref.addPlace,
      removePlace = _ref.removePlace;
  var classes = useStyles();
  var placesValues = (0, _react.useMemo)(function () {
    return Object.values(places || {});
  }, [places]);
  var transitions = (0, _reactSpring.useTransition)(placesValues, function (_ref2) {
    var id = _ref2.id;
    return "place_".concat(id);
  }, _objectSpread({}, _location_places_field_transitions_spring_props.LOCATION_PLACES_FIELD_TRANSITIONS_SPRING_PROPS, {
    trail: 200 / placesValues.length
  }));
  return _react.default.createElement(_edit_dialog_field.EditDialogField, {
    error: error,
    title: _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.editDialog.location.title",
      defaultMessage: "What's your dream job location?"
    })
  }, _react.default.createElement(_location_field.LocationField, {
    fullWidth: true,
    classes: {
      container: classes.locationField
    },
    variant: "flat",
    onLocationSelected: addPlace
  }), _react.default.createElement("div", {
    className: classes.places
  }, transitions.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return _react.default.createElement(_ui.Tag, {
      key: key,
      className: classes.place,
      color: "secondary",
      style: props
    }, _react.default.createElement(_ui.Tooltip, {
      title: "Delete this place"
    }, _react.default.createElement("button", {
      type: "button",
      onClick: removePlace(item.id)
    }, _react.default.createElement(TrashIcon, {
      className: classes.deleteIcon
    }))), _react.default.createElement(_ui.Typography, {
      variant: "body2",
      color: "light"
    }, item.name));
  })));
};

var LocationPlacesField = LocationPlacesFieldComponent;
exports.LocationPlacesField = LocationPlacesField;