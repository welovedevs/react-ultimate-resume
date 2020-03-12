"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _use_card_side = require("../../../../commons/profile_card/profile_card_hooks/use_card_side");

var _remote_utils = require("../../../../../utils/enums/remote/remote_utils");

var _dream_job_front_styles = require("./dream_job_front_styles");

var HomeLogo = function HomeLogo(props) {
  return _react.default.createElement("svg", props, _react.default.createElement("path", {
    d: "M39.512 18.822L21.18.488a1.668 1.668 0 0 0-2.357 0L.488 18.822a1.668 1.668 0 0 0 1.179 2.845H3.75c.23 0 .417.187.417.417v16.25c0 .92.746 1.667 1.666 1.667h9.584c.23 0 .417-.187.417-.417v-7.917a4.166 4.166 0 1 1 8.333 0v7.917c0 .23.187.417.417.417h9.583c.92 0 1.667-.747 1.667-1.667v-16.25c0-.23.187-.417.417-.417h2.083a1.667 1.667 0 0 0 1.178-2.845zM20 20a4.166 4.166 0 1 1 0-8.333A4.166 4.166 0 1 1 20 20z",
    fill: "#fff"
  }));
};

HomeLogo.defaultProps = {
  viewBox: "0 0 40 40",
  xmlns: "http://www.w3.org/2000/svg"
};
var useStyles = (0, _reactJss.createUseStyles)(_dream_job_front_styles.styles);

var DreamJobFrontComponent = function DreamJobFrontComponent(_ref) {
  var data = _ref.data;
  var theme = (0, _reactJss.useTheme)();
  var classes = useStyles({
    theme: theme
  });
  var remoteFrequency = data.remoteFrequency,
      places = data.places;
  console.log({
    classes: classes
  });

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === 'front' ? 'back' : 'front');
  }, [side, setSide]);
  var andMore = (0, _react.useMemo)(function () {
    if (places.length < 2) {
      return '';
    }

    return " (+ ".concat(places.length - 1, ")");
  }, [places]);
  var content = (0, _react.useMemo)(function () {
    var _places$;

    if (remoteFrequency === _remote_utils.REMOTE_FREQUENCY.FULL_TIME) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
        customClasses: {
          container: classes.logo
        },
        vector: HomeLogo
      }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
        customClasses: {
          container: classes.typography
        }
      }, _react.default.createElement(_reactIntl.FormattedMessage, {
        id: "DreamJob.Front.RemoteFulltime",
        defaultMessage: "I want to work remotely"
      })));
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
      customClasses: {
        container: classes.logo
      },
      vector: HomeLogo
    }), _react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
      classes: {
        container: classes.typography
      }
    }, _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "DreamJob.Front.Cities",
      defaultMessage: "I want to work in {cities}{andMore}",
      values: {
        cities: places === null || places === void 0 ? void 0 : (_places$ = places[0]) === null || _places$ === void 0 ? void 0 : _places$.name,
        andMore: andMore
      }
    })));
  }, [remoteFrequency, places]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, _react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, content)), _react.default.createElement(_profile_card_actions.ProfileCardActions, null, _react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Dreamjob.front.action",
    defaultMessage: "Discover my dream job"
  }))));
};

var DreamJobFront = DreamJobFrontComponent;
exports.DreamJobFront = DreamJobFront;