"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCard = exports.ProfileCardContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@wld/ui");

var _core = require("@material-ui/core");

var _profile_card_side = require("./profile_card_side/profile_card_side");

var _profile_card_edit_button = require("./profile_card_edit_button/profile_card_edit_button");

var _profile_card_edit_dialog = require("./profile_card_edit_dialog/profile_card_edit_dialog");

var _profile_card_incomplete_popper = require("./profile_card_incomplete_popper/profile_card_incomplete_popper");

var _profile_card_actions_types = require("../../../store/profile_card/profile_card_actions_types");

var _profile_card_reducer = require("../../../store/profile_card/profile_card_reducer");

var _profile_card_styles = require("./profile_card_styles");

var _profile_card_spring_props = require("./profile_card_spring_props");

var _side = require("./profile_card_side/side");

var _contexts = require("../../../utils/context/contexts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var id = _ref.id,
      children = _ref.children,
      data = _ref.data,
      sides = _ref.sides,
      kind = _ref.kind,
      variant = _ref.variant,
      _ref$isTransitionUniq = _ref.isTransitionUnique,
      isTransitionUnique = _ref$isTransitionUniq === void 0 ? true : _ref$isTransitionUniq,
      isEditingProfile = _ref.isEditingProfile,
      editDialog = _ref.editDialog,
      customTransitionsSpringProps = _ref.customTransitionsSpringProps,
      customEditAction = _ref.customEditAction,
      _ref$isComplete = _ref.isComplete,
      isComplete = _ref$isComplete === void 0 ? true : _ref$isComplete,
      sideProps = _ref.side;
  var changeSideTimeout = (0, _react.useRef)();

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      mode = _useContext.mode;

  var classes = useStyles({
    variant: variant
  });
  var theme = (0, _reactJss.useTheme)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      containerElement = _useState2[0],
      setContainerElement = _useState2[1];

  var containerReference = (0, _react.useRef)();

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      openEditDialog = _useState4[0],
      setOpenEditDialog = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      forceOpenEditDialog = _useState6[0],
      setForceOpenEditDialog = _useState6[1];

  var setEditDialogOpened = (0, _react.useCallback)(function () {
    return setOpenEditDialog(true);
  }, []);
  var setEditDialogClosed = (0, _react.useCallback)(function () {
    setOpenEditDialog(false);
    setForceOpenEditDialog(false);
  }, []);

  var _useReducer = (0, _react.useReducer)(_profile_card_reducer.profileCardReducer, (0, _profile_card_reducer.getProfileCardInitialState)({
    variant: variant,
    side: sideProps
  })),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    dispatch({
      type: _profile_card_actions_types.SET_VARIANT,
      variant: variant
    });
  }, [variant]);
  (0, _react.useEffect)(function () {
    dispatch({
      type: _profile_card_actions_types.SET_SIDE,
      side: sideProps || _side.SIDES.FRONT
    });
  }, [sideProps]);
  var side = state.side,
      hasDialogOpened = state.hasDialogOpened;
  (0, _react.useEffect)(function () {
    setContainerElement(containerReference.current);
  }, []);
  var isSmall = (0, _core.useMediaQuery)("(max-width: ".concat(theme.screenSizes.small, "px)"), {
    defaultMatches: true
  });
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
    if (sideProps) {
      return;
    }

    if (changeSideTimeout.current) {
      clearTimeout(changeSideTimeout.current);
    }

    changeSideTimeout.current = setTimeout(function () {
      return dispatch({
        type: _profile_card_actions_types.SET_SIDE,
        side: newSide
      });
    }, 200);
  }, [sideProps]);
  var handleMouseEnter = (0, _react.useCallback)(function () {
    return setSide(_side.SIDES.BACK);
  }, [setSide]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    if (hasDialogOpened) {
      return;
    }

    setSide(_side.SIDES.FRONT);
  }, [hasDialogOpened, setSide]);
  (0, _react.useEffect)(function () {
    if (hasSideChanged.current) {
      return;
    }

    hasSideChanged.current = true;
  }, [side]);
  var transitions = (0, _reactSpring.useTransition)(side, function (item) {
    return "card_side_".concat(item, "_").concat(kind);
  }, _objectSpread({}, transitionsSpringProps, {
    unique: isTransitionUnique,
    immediate: !hasSideChanged.current
  }));
  var handleAddButtonClick = (0, _react.useCallback)(function () {
    setOpenEditDialog(true);
    setForceOpenEditDialog(true);
  }, []);
  var editButtonTransitions = (0, _reactSpring.useTransition)(isEditingProfile, function (item) {
    return item ? 'visible_editing_button' : 'invisible_editing_button';
  }, _objectSpread({}, _profile_card_spring_props.PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_SPRING_PROPS, {
    unique: true
  }));
  var contextData = (0, _react.useMemo)(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state]);
  return _react.default.createElement(_react.default.Fragment, null, mode === 'edit' && (isEditingProfile || forceOpenEditDialog) && _react.default.createElement(ProfileCardContext.Provider, {
    value: contextData
  }, _react.default.createElement(_profile_card_edit_dialog.ProfileCardEditDialog, {
    editDialog: editDialog,
    open: openEditDialog,
    onClose: setEditDialogClosed,
    data: data,
    isEditing: isEditingProfile || forceOpenEditDialog
  })), _react.default.createElement(_profile_card_incomplete_popper.ProfileCardIncompletePopper, {
    open: isComplete !== true,
    anchorElement: containerElement
  }), _react.default.createElement(_ui.Card, (0, _extends2.default)({
    containerRef: containerReference,
    customClasses: {
      container: classes.container
    },
    id: id,
    elevation: 1
  }, !isSmall && !sideProps && {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }), mode === 'edit' && editButtonTransitions.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item && _react.default.createElement(_reactSpring.animated.div, {
      className: classes.editButtonContainer,
      key: key,
      style: props
    }, _react.default.createElement(EditAction, {
      customEditAction: customEditAction,
      setEditDialogOpened: setEditDialogOpened
    }));
  }), _react.default.createElement(ProfileCardContext.Provider, {
    value: contextData
  }, children, transitions.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;

    var SideComponent = sides[item] || function () {
      return null;
    };

    return _react.default.createElement(_profile_card_side.ProfileCardSide, {
      key: key,
      style: props
    }, _react.default.createElement(SideComponent, {
      data: data,
      handleAddButtonClick: handleAddButtonClick
    }));
  }))));
};

var EditAction = function EditAction(_ref4) {
  var customEditAction = _ref4.customEditAction,
      setEditDialogOpened = _ref4.setEditDialogOpened;
  var onCustomClick = (0, _react.useCallback)(function () {
    return setEditDialogOpened();
  }, []);

  if (customEditAction) {
    var Component = customEditAction;
    return _react.default.createElement(Component, {
      onClick: onCustomClick
    });
  }

  return _react.default.createElement(_profile_card_edit_button.ProfileCardEditButton, {
    setEditDialogOpened: setEditDialogOpened
  });
};

var ProfileCard = ProfileCardComponent;
exports.ProfileCard = ProfileCard;