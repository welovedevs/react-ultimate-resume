export const last = (array: any[] | null) => {
    if (!array?.length) {
        return null;
    }
    return array[array.length - 1];
};
