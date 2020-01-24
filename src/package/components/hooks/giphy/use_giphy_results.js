import { DeveloperProfileContext } from '../../profile';
import { useContext, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

const GIPHY_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';
export const GIPHY_RATINGS = { G: 'G', PG: 'PG', 'PG-13': 'PG-13', R: 'R' };

export const useGiphyResults = (input, page = 0, limit = 20, rating = GIPHY_RATINGS.PG, timeout = 800) => {
    const debounceSearch = useRef();
    const { locale } = useIntl();
    const { apiKeys } = useContext(DeveloperProfileContext);
    const [lastLoaded, setLastLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!input || !apiKeys.giphy) {
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
                lang: locale,
                apiKey: apiKeys.giphy,
                q: input,
                offset: page * limit,
                limit
            };
            // eslint-disable-next-line no-undef
            fetch(
                encodeURI(
                    GIPHY_API_ENDPOINT +
                        Object.entries(params)
                            .map(([key, value]) => `${key}=${value}`)
                            .join('&')
                )
            )
                .then(res => {
                    if (res.status.toString().startsWith('2')) {
                        return res.json();
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then(({ data }) => {
                    setResults(
                        data.map(({ id, title }) => ({
                            id,
                            url: `https://media.giphy.com/media/${id}/giphy.gif`,
                            title
                        }))
                    );
                })
                .catch(e => {
                    console.warn('Failed to fecth from giphy', e.message);
                    setError(e.message);
                })
                .finally(() => {
                    setLastLoaded({ input, page });
                    debounceSearch.current = null;
                    setLoading(false);
                });
        }, timeout);
    }, [input, lastLoaded, page]);

    return { gifs: results, loading };
};
