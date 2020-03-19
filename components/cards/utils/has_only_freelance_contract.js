"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOnlyFreelanceContract = void 0;
var AVERAGE_DAILY_RATE_CONTRACT_TYPE = 'freelance';

var hasOnlyFreelanceContract = function hasOnlyFreelanceContract(contractTypes) {
  return !Array.isArray(contractTypes) && contractTypes === AVERAGE_DAILY_RATE_CONTRACT_TYPE || contractTypes && contractTypes.length === 1 && contractTypes[0] === AVERAGE_DAILY_RATE_CONTRACT_TYPE;
};

exports.hasOnlyFreelanceContract = hasOnlyFreelanceContract;