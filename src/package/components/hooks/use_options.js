import { useContext } from 'react';
import get from 'lodash.get';

import { StaticDataContext } from '../../utils/context/contexts';

export const useOptions = (path = '', defaultValue = {}) => {
    const { options } = useContext(StaticDataContext);
    return [get(options, path, defaultValue)];
};
