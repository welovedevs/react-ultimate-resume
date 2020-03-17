import { useContext } from 'react';
import { get } from 'lodash';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useReceivedGlobalClasses = (path = '', defaultValue = {}) => {
    const { receivedGlobalClasses } = useContext(DeveloperProfileContext);
    return [get(receivedGlobalClasses, path, defaultValue)];
};
