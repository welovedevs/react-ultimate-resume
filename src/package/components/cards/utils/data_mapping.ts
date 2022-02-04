import get from 'lodash/get';
import set from 'lodash/set';
import { DeveloperResume } from '../../../types/resume/resume';

export const JsonResumeToFlatObject = (source: DeveloperResume, dataMapping: { [key: string]: string }) =>
    Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, key, get(source, path));
        return acc;
    }, {});

export const FlatObjectToJsonResume = (data: any, dataMapping: { [key: string]: string }) =>
    Object.entries(dataMapping).reduce((acc, [key, path]) => {
        set(acc, path, get(data, key));
        return acc;
    }, {}) as DeveloperResume;
