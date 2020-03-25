"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DreamJobPerks = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _job_perks_utils = require("../../../../../../utils/enums/job_perks/job_perks_utils");

var _job_perks_translations = require("../../../../../../utils/enums/job_perks/job_perks_translations");

var _dream_job_perks_styles = require("./dream_job_perks_styles");

var useStyles = (0, _reactJss.createUseStyles)(_dream_job_perks_styles.styles);

var DreamJobPerksComponent = function DreamJobPerksComponent(_ref) {
  var _ref$perks = _ref.perks,
      perks = _ref$perks === void 0 ? {} : _ref$perks;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  return _react.default.createElement("ul", {
    className: classes.list
  }, Object.entries(perks).filter(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        value = _ref3[1];

    return Boolean(value);
  }).map(function (_ref4) {
    var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
        perkId = _ref5[0],
        value = _ref5[1];

    if (perkId === _job_perks_utils.JobPerks.OTHER) {
      return value;
    }

    return _react.default.createElement("li", {
      className: classes.listItem,
      key: "dream_job_perk_".concat(perkId)
    }, formatMessage(_job_perks_translations.jobPerksTranslations[perkId.toLowerCase()] || _job_perks_translations.jobPerksTranslations.others));
  }));
};

var DreamJobPerks = DreamJobPerksComponent;
exports.DreamJobPerks = DreamJobPerks;