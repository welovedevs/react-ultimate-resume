import { useContext } from 'react';
import { get } from 'lodash';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useAdditionalNodes = (path = '') => {
    const { additionalNodes } = useContext(DeveloperProfileContext);
    return [get(additionalNodes, path)];
};
