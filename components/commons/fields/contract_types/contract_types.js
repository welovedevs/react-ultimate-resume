"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractType = void 0;

var _reactIntl = require("react-intl");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ContractType = function ContractType(_ref) {
  var _ref$contractTypes = _ref.contractTypes,
      contractTypes = _ref$contractTypes === void 0 ? [] : _ref$contractTypes;

  var contracts = _toConsumableArray(contractTypes);

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