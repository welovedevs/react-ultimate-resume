import { useContext } from 'react';
import { get } from 'lodash';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useAdditionalNodes = (path = '', defaultValue = {}) => {
    const { additionalNodes } = useContext(DeveloperProfileContext);
    return [get(additionalNodes, path, defaultValue)];
};
