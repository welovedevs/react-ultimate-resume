import { useContext } from 'react';

import { DeveloperProfileContext } from '../profile';

export const useIsEditing = () => {
    const { isEditing } = useContext(DeveloperProfileContext);
    return [true];
};
