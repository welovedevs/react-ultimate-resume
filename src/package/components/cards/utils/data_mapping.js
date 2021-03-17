import get from 'lodash.get';
import set from 'lodash.set';

export const JsonResumeToFlatObject = (source, dataMapping) =>
    Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, key, get(source, path));
        return acc;
    }, {});

export const FlatObjectToJsonResume = (data, dataMapping) =>
    Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, path, get(data, key));
        return acc;
    }, {});
