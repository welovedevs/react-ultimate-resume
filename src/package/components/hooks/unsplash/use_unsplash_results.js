import { useContext, useEffect, useRef, useState } from 'react';

import { DeveloperProfileContext } from '../../../utils/context/contexts';

const UNSPLASH_API = 'https://api.unsplash.com/search/photos?';

export const useUnsplashResults = (input, page = 0, limit = 12, timeout = 800) => {
    const debounceSearch = useRef();
    const { apiKeys } = useContext(DeveloperProfileContext);
    const [lastLoaded, setLastLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!input || !apiKeys.unsplash) {
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
            // eslint-disable-next-line no-undef
            fetch(
                encodeURI(
                    UNSPLASH_API +
                        Object.entries(params)
                            .map(([key, value]) => `${key}=${value}`)
                            .join('&')
                ),
                {
                    headers: {
                        Authorization: `Client-ID ${apiKeys.unsplash}`
                    }
                }
            )
                .then(res => {
                    if (res.status.toString().startsWith('2')) {
                        return res.json();
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then(data => {
                    setResults(
                        data.results.map(({ id, user, description, urls, links }) => ({
                            id,
                            urls,
                            user,
                            description,
                            links
                        }))
                    );
                })
                .catch(e => {
                    console.warn('Failed to fecth from unsplash', e.message);
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
