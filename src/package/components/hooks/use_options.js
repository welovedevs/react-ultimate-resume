import { useContext } from 'react';
import { get } from 'lodash';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useOptions = (path = '', defaultValue = {}) => {
    const { options } = useContext(DeveloperProfileContext);
    return [get(options, path, defaultValue)];
};
