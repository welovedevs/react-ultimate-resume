"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _gifs_sides_commons = require("../gifs_sides_commons/gifs_sides_commons");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _gifs_front_styles = require("./gifs_front_styles");

var _exists_and_not_empty = require("../../../utils/exists_and_not_empty");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var useStyles = (0, _reactJss.createUseStyles)(_gifs_front_styles.styles);

var GifsFrontComponent = function GifsFrontComponent(_ref) {
  var _ref3, _data$interests;

  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);

  var _ref2 = (_ref3 = (_data$interests = data.interests) === null || _data$interests === void 0 ? void 0 : _data$interests[0]) !== null && _ref3 !== void 0 ? _ref3 : {},
      gifUrl = _ref2.gifUrl,
      name = _ref2.name;

  var hasHobby = (0, _react.useMemo)(function () {
    return (0, _exists_and_not_empty.existsAndNotEmpty)(data === null || data === void 0 ? void 0 : data.interests);
  }, [data]);
  return _react.default.createElement(_gifs_sides_commons.GifsSidesCommons, {
    classes: {
      container: classes.container
    },
    underLayer: gifUrl && _react.default.createElement("img", {
      className: classes.image,
      src: gifUrl,
      alt: name
    })
  }, !gifUrl && _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, {
    customClasses: {
      container: classes.paddedFront
    }
  }, _react.default.createElement(Content, {
    hasHobby: hasHobby,
    name: name,
    handleAddButtonClick: handleAddButtonClick,
    classes: classes
  })), hasHobby && _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick,
    overrideColor: "light"
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Gifs.front.action",
    defaultMessage: "See all hobbies"
  }))));
};

var Content = function Content(_ref4) {
  var hasHobby = _ref4.hasHobby,
      name = _ref4.name,
      handleAddButtonClick = _ref4.handleAddButtonClick,
      classes = _ref4.classes;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isTypographyTruncated = _useState2[0],
      setIsTypographyTruncated = _useState2[1];

  var typographyReference = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var element = typographyReference.current;

    if (!element) {
      return;
    }

    if ((element === null || element === void 0 ? void 0 : element.offsetHeight) > (element === null || element === void 0 ? void 0 : element.scrollHeight) - 1) {
      setIsTypographyTruncated(false);
    }
  }, []);

  if (!hasHobby) {
    return _react.default.createElement("div", {
      className: classes.noHobby
    }, _react.default.createElement(_ui.Typography, {
      variant: "h3",
      component: "h3",
      customClasses: {
        container: classes.noHobbyTypography
      }
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Gifs.front.noHobby",
      defaultMessage: "Vous n'avez pas encore ajout\xE9 de hobbies !"
    })), _react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.addButton
      },
      color: "secondary"
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Gifs.noHobby.buttonLabel",
      defaultMessage: "Ajouter un hobby"
    })));
  }

  return _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    ref: typographyReference,
    classes: {
      container: (0, _classnames.default)(classes.withoutGifTypography, isTypographyTruncated && classes.truncatedTypography)
    }
  }, name);
};

var GifsFront = (0, _react.memo)(GifsFrontComponent);
exports.GifsFront = GifsFront;