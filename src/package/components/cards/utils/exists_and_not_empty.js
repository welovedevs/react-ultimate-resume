export const existsAndNotEmpty = (value) => {
    if (!value) {
        return false;
    }
    if (Array.isArray(value)) {
        return Boolean(value.length);
    }
    if (typeof value === 'object') {
        return Boolean(Object.entries(value).filter(([, value]) => value).length);
    }
    return Boolean(value);
};
