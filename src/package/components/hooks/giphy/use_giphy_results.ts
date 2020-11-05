import { useContext, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

import { StaticDataContext } from '../../../utils/context/contexts';
import { Giphy, MultiResponse } from 'giphy-api';
import { GiphySearchResult } from './types';

const GIPHY_API_ENDPOINT = 'https://api.giphy.com/v1/gifs/search?';

export const useGiphyResults = (input: string, page = 0, limit = 20, timeout = 800) => {
    const debounceSearch = useRef<number | null>(null);
    const { locale } = useIntl();
    const { apiKeys } = useContext(StaticDataContext);
    const [lastLoaded, setLastLoaded] = useState<{ input: string; page: number } | null>(null);
    const [results, setResults] = useState<Array<GiphySearchResult>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!input || !apiKeys?.giphy) {
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
        debounceSearch.current = window.setTimeout(() => {
            setLoading(true);
            const params = {
                lang: locale,
                api_key: apiKeys.giphy,
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
                .then((res) => {
                    if (res.status.toString().startsWith('2')) {
                        return res.json();
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then(({ data }: MultiResponse) => {
                    setResults(
                        data.map(({ id, title, images, user }) => ({
                            id,
                            url: images?.downsized?.url,
                            title,
                            user: user && {
                                name: user.display_name,
                                profileUrl: user.profile_url,
                                isVerified: (user as any).is_verified as boolean,
                                profileAvatarUrl: user.avatar_url
                            }
                        }))
                    );
                })
                .catch((e) => {
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

    return { gifs: results, loading, error };
};
