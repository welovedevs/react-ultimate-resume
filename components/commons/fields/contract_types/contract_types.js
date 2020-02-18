"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractType = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reactIntl = require("react-intl");

var _react = _interopRequireDefault(require("react"));

var ContractType = function ContractType(_ref) {
  var _ref$contractTypes = _ref.contractTypes,
      contractTypes = _ref$contractTypes === void 0 ? [] : _ref$contractTypes;
  var contracts = (0, _toConsumableArray2.default)(contractTypes);
  var lastContract = contracts.pop();

  if (!lastContract) {
    return null;
  }

  if (!contracts.length) {
    return _react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.WorkContract.single",
      defaultMessage: 'Looking for a {contractType} contract',
      values: {
        contractType: lastContract
      }
    });
  }

  return _react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Basics.Back.WorkContract.multi",
    defaultMessage: 'Looking for a {contracts} or {lastContract} contract',
    values: {
      lastContract: lastContract,
      contracts: contracts.join(', ')
    }
  });
};

exports.ContractType = ContractType;