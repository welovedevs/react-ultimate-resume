/* eslint-disable no-bitwise */
export const hashCode = (str = '') =>
    Array.from(str ?? '').reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0);
