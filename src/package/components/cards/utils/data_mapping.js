import get from 'lodash/get';
import set from 'lodash/set';

export const JsonResumeToFlatObject = (data, dataMapping) => {
    return Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, key, get(data, path));
        return acc;
    }, {});
};

export const FlatObjectToJsonResume = (data, dataMapping) => {
    return Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, path, get(data, key));
        return acc;
    }, {});
};
