import { useContext } from 'react';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useIsEditing = () => {
    const { isEditing } = useContext(DeveloperProfileContext);
    return [isEditing];
};
