import { useContext, useMemo } from 'react';

import { StaticDataContext } from '../../utils/context/contexts';

export const useCustomization = () => {
    const { customization } = useContext(StaticDataContext);
    const memoizedValue = useMemo(() => customization, [JSON.stringify(customization)]);
    return [memoizedValue];
};
