import { useContext, useEffect, useRef, useState } from 'react';

import { StaticDataContext } from '../../../utils/context/contexts';

const UNSPLASH_API = 'https://api.unsplash.com/search/photos?';

export const useUnsplashResults = (input, page = 0, limit = 12, timeout = 800) => {
    const debounceSearch = useRef();
    const { endpoints } = useContext(StaticDataContext);
    const [lastLoaded, setLastLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!input || !endpoints.unsplashProxy) {
            setResults([]);
            return;
        }
        if (input === lastLoaded?.input && page === lastLoaded?.page) {
            return;
        }
        setError(null);
        if (debounceSearch.current) {
            clearTimeout(debounceSearch.current);
        }
        debounceSearch.current = setTimeout(() => {
            setLoading(true);
            const params = {
                query: input,
                page: page * limit,
                per_page: limit
            };
            const url = encodeURI(
                UNSPLASH_API +
                    Object.entries(params)
                        .map(([key, value]) => `${key}=${value}`)
                        .join('&')
            );
            // eslint-disable-next-line no-undef
            fetch(`${endpoints.unsplashProxy}?url=${url}`, {
                method: 'GET'
            })
                .then(async (res) => {
                    if (`${res.status}`.startsWith('2')) {
                        const functionResult = await res.json();
                        if (`${functionResult?.unsplashStatus}`.startsWith('2')) {
                            return functionResult;
                        }
                        throw new Error(`${functionResult.unsplashStatus}`);
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then((res) => {
                    setResults(
                        res?.data?.results.map(({ id, user, description, urls, links }) => ({
                            id,
                            urls,
                            user,
                            description,
                            links
                        }))
                    );
                })
                .catch((e) => {
                    console.warn('Failed to fetch from unsplash', e.message);
                    setError(e.message);
                })
                .finally(() => {
                    setLastLoaded({ input, page });
                    debounceSearch.current = null;
                    setLoading(false);
                });
        }, timeout);
    }, [input, lastLoaded, page]);

    return { results, loading, error };
};
