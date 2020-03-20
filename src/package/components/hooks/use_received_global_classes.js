import { useContext } from 'react';
import { get } from 'lodash';

import { StaticDataContext } from '../../utils/context/contexts';

export const useReceivedGlobalClasses = (path = '', defaultValue = {}) => {
    const { receivedGlobalClasses } = useContext(StaticDataContext);
    return [get(receivedGlobalClasses, path, defaultValue)];
};
