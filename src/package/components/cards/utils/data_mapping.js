import get from 'lodash/get';
import set from 'lodash/set';

export const JsonResumeToFlatObject = (data, dataMapping) => {
    return Object.keys(dataMapping).reduce((acc, [key, path]) => {
        acc[key] = get(data, path);
        return acc;
    }, {});
};

export const FlatObjectToJsonResume = (data, dataMapping) => {
    return Object.keys(dataMapping).reduce((acc, [key, path]) => {
        set(acc, path, data[key]);
        return acc;
    }, {});
};
