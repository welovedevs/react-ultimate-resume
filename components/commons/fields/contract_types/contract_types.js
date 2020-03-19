"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractType = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _contract_types_translations = _interopRequireDefault(require("./contract_types_translations"));

var ContractType = function ContractType(_ref) {
  var _ref$contractTypes = _ref.contractTypes,
      contractTypes = _ref$contractTypes === void 0 ? [] : _ref$contractTypes;

  var _useIntl = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl.formatMessage;

  var contracts = (0, _toConsumableArray2.default)(contractTypes);
  var lastContract = contracts.pop();

  if (!lastContract) {
    return null;
  }

  console.log({
    contracts: contracts
  });

  if (contracts.length <= 1) {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.WorkContract.single",
      defaultMessage: 'Looking for a {contractType} contract',
      values: {
        contractType: formatMessage(_contract_types_translations.default[lastContract])
      }
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.WorkContract.multi",
    defaultMessage: 'Looking for a {contracts} or {lastContract} contract',
    values: {
      lastContract: formatMessage(_contract_types_translations.default[lastContract]),
      contracts: contracts.map(function (key) {
        return formatMessage(_contract_types_translations.default[key]);
      }).join(', ')
    }
  });
};

exports.ContractType = ContractType;