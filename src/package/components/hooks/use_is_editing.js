import { useContext, useMemo } from 'react';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useIsEditing = () => {
    const { isEditing } = useContext(DeveloperProfileContext);
    const memoizedValue = useMemo(() => isEditing, [isEditing]);
    return [memoizedValue];
};
