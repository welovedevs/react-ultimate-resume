"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardIncompletePopper = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@wld/ui");

var _profile_card_incomplete_popper_styles = require("./profile_card_incomplete_popper_styles");

var _contexts = require("../../../../utils/context/contexts");

var WarnIcon = function WarnIcon(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M19.972 0A20.345 20.345 0 0 0 5.788 6.088 19.668 19.668 0 0 0 0 20.345c-.013 10.842 8.767 19.642 19.609 19.656h.415C31.154 39.886 40.09 30.782 40 19.652 40.026 8.822 31.267.022 20.437-.005c-.155 0-.31.002-.465.005zM17.5 27.57a2.46 2.46 0 0 1 2.369-2.548l.046-.001h.045a2.547 2.547 0 0 1 2.539 2.45 2.459 2.459 0 0 1-2.365 2.548l-.05.002h-.045a2.549 2.549 0 0 1-2.539-2.45zm.834-6.736v-10a1.667 1.667 0 0 1 3.333 0v10a1.667 1.667 0 0 1-3.333 0z"
  }));
};

WarnIcon.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_profile_card_incomplete_popper_styles.styles);

var ProfileCardIncompletePopperComponent = function ProfileCardIncompletePopperComponent(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      anchorElement = _ref.anchorElement;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hasBeenMounted = _useState2[0],
      setHasBeenMouneted = _useState2[1];

  var _useContext = (0, _react.useContext)(_contexts.DeveloperProfileContext),
      mode = _useContext.mode;

  (0, _react.useEffect)(function () {
    return setHasBeenMouneted(true);
  }, []);

  if (mode !== 'edit' || !open || !hasBeenMounted) {
    return null;
  }

  return _react.default.createElement(_ui.PopperCard, {
    customClasses: {
      container: classes.container,
      arrowContainer: classes.arrowContainer
    },
    open: open,
    onClose: onClose,
    anchorElement: anchorElement,
    popperProps: {
      placement: 'top-start',
      disablePortal: true,
      modifiers: {
        preventOverflow: {
          enabled: false
        },
        hide: {
          enabled: false
        },
        flip: {
          behavior: ['top-start']
        }
      }
    }
  }, _react.default.createElement(WarnIcon, {
    className: classes.icon
  }), _react.default.createElement(_ui.Typography, {
    color: "light"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "ProfileCardIncompletePopper.label.value",
    defaultMessage: "This card is missing data"
  })));
};

var ProfileCardIncompletePopper = (0, _react.memo)(ProfileCardIncompletePopperComponent);
exports.ProfileCardIncompletePopper = ProfileCardIncompletePopper;