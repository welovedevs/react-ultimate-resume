import { useContext, useMemo } from 'react';

import { DeveloperProfileContext } from '../../utils/context/contexts';

export const useMode = () => {
    const { mode } = useContext(DeveloperProfileContext);
    const memoizedValue = useMemo(() => mode, [mode.toString()]);
    return [memoizedValue];
};
