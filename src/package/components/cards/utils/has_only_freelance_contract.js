const AVERAGE_DAILY_RATE_CONTRACT_TYPE = 'freelance';

export const hasOnlyFreelanceContract = contractTypes =>
    (!Array.isArray(contractTypes) && contractTypes === AVERAGE_DAILY_RATE_CONTRACT_TYPE) ||
    (contractTypes && contractTypes.length === 1 && contractTypes[0] === AVERAGE_DAILY_RATE_CONTRACT_TYPE);
