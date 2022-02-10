export const CONTRACT_TYPES = ['fixedTerm', 'permanent', 'internship', 'apprenticeship', 'freelance'] as const;

export type ContractTypes = typeof CONTRACT_TYPES[number];
