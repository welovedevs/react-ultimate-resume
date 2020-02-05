"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCard = exports.ProfileCardContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _useDebounce3 = require("use-debounce");

var _ui = require("@wld/ui");

var _profile_card_side = require("./profile_card_side/profile_card_side");

var _profile_card_reducer = require("../../../store/profile_card/profile_card_reducer");

var _profile_card_styles = require("./profile_card_styles");

var _profile_card_actions_types = require("../../../store/profile_card/profile_card_actions_types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EditIcon = function EditIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M25.112 6.643a.834.834 0 0 0-1.18-.002L5.728 24.852a.834.834 0 0 0 0 1.178l8.247 8.247a.834.834 0 0 0 1.179 0L33.349 16.08a.832.832 0 0 0 0-1.176l-8.237-8.26zM4.05 28.001a.833.833 0 0 0-1.4.395L.14 38.857a.836.836 0 0 0 .222.784.849.849 0 0 0 .783.22l10.454-2.5a.833.833 0 0 0 .395-1.4L4.05 28zM38.667 4.873l-3.538-3.54a4.167 4.167 0 0 0-5.887 0L26.88 3.695a.834.834 0 0 0 0 1.178l8.25 8.249a.834.834 0 0 0 1.178 0l2.36-2.365a4.166 4.166 0 0 0 0-5.884z"
  }));
};

EditIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_card_styles.styles);
var ProfileCardContext = (0, _react.createContext)({});
exports.ProfileCardContext = ProfileCardContext;
var DEFAULT_TRANSITIONS_SPRING_PROPS = {
  from: {
    opacity: 0
  },
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  },
  config: _reactSpring.config.default
};

var ProfileCardComponent = function ProfileCardComponent(_ref) {
  var data = _ref.data,
      sides = _ref.sides,
      variant = _ref.variant,
      _ref$isTransitionUniq = _ref.isTransitionUnique,
      isTransitionUnique = _ref$isTransitionUniq === void 0 ? true : _ref$isTransitionUniq,
      isEditingProfile = _ref.isEditingProfile,
      editDialog = _ref.editDialog,
      customTransitionsSpringProps = _ref.customTransitionsSpringProps,
      sideProps = _ref.side;
  var classes = useStyles({
    variant: variant
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditingCard = _useState2[0],
      setIsEditingCard = _useState2[1];

  var _useReducer = (0, _react.useReducer)(_profile_card_reducer.profileCardReducer, (0, _profile_card_reducer.getProfileCardInitialState)({
    variant: variant,
    side: sideProps
  })),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var side = state.side,
      hasDialogOpened = state.hasDialogOpened;

  var _useDebounce = (0, _useDebounce3.useDebounce)(side, 200),
      _useDebounce2 = _slicedToArray(_useDebounce, 1),
      debouncedSide = _useDebounce2[0];

  var transitionsSpringProps = (0, _react.useMemo)(function () {
    if (customTransitionsSpringProps) {
      if (typeof customTransitionsSpringProps === 'function') {
        return customTransitionsSpringProps(side);
      }

      return customTransitionsSpringProps;
    }

    return DEFAULT_TRANSITIONS_SPRING_PROPS;
  }, [customTransitionsSpringProps, side]);
  var hasSideChanged = (0, _react.useRef)(false);
  var setSide = (0, _react.useCallback)(function (newSide) {
    return dispatch({
      type: _profile_card_actions_types.SET_SIDE,
      side: newSide
    });
  }, []);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return setSide('back');
  }, [dispatch]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    if (hasDialogOpened) {
      return;
    }

    setSide('front');
  }, [hasDialogOpened, dispatch]);
  var enableEditingCard = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setIsEditingCard(true);
  }, []);
  (0, _react.useEffect)(function () {
    if (hasSideChanged.current) {
      return;
    }

    hasSideChanged.current = true;
  }, [side]);
  var transitions = (0, _reactSpring.useTransition)(debouncedSide, function (item) {
    return "card_side_".concat(item);
  }, _objectSpread({}, transitionsSpringProps, {
    unique: isTransitionUnique,
    immediate: !hasSideChanged.current
  }));
  var EditDialogComponent = (0, _react.useMemo)(function () {
    if (!editDialog) {
      return null;
    }

    return (0, _react.createElement)(editDialog.component, {
      onEdit: function onEdit() {
        setIsEditingCard(false);
        editDialog.onEdit.apply(editDialog, arguments);
      },
      validationSchema: editDialog.validationSchema,
      data: data,
      onClose: function onClose() {
        return setIsEditingCard(false);
      }
    });
  }, [editDialog]);
  var contextData = (0, _react.useMemo)(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state]);
  return _react.default.createElement(_react.default.Fragment, null, isEditingCard && EditDialogComponent, _react.default.createElement(_ui.Card, {
    customClasses: {
      container: classes.container
    },
    elevation: 1,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, isEditingProfile && _react.default.createElement(_ui.Tooltip, {
    title: "Editer cette carte"
  }, _react.default.createElement("button", {
    type: "button",
    className: classes.editButton,
    onClick: enableEditingCard
  }, _react.default.createElement(EditIcon, {
    className: classes.editIcon
  }))), _react.default.createElement(ProfileCardContext.Provider, {
    value: contextData
  }, transitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;

    var SideComponent = sides[item] || function () {
      return null;
    };

    return _react.default.createElement(_profile_card_side.ProfileCardSide, {
      key: key,
      style: props
    }, _react.default.createElement(SideComponent, {
      data: data
    }));
  }))));
};

var ProfileCard = ProfileCardComponent;
exports.ProfileCard = ProfileCard;