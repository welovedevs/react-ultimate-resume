import { createContext } from 'react';

export const DeveloperProfileContext = createContext({});
export const StoreContext = createContext({});
type StaticDataContextType = {
    apiKeys: { giphy: string; unsplash: string };
    endpoints: {
        devIcons: string;
        unsplashProxy: string;
    };
};
export const StaticDataContext = createContext<Partial<StaticDataContextType>>({});
