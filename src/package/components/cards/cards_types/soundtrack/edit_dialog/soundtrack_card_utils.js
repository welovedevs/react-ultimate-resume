const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const SPOTIFY_DOMAIN = 'https://open.spotify.com';
const DEEZER_DOMAIN = 'https://www.deezer.com';
const DEEZER_EMBEDDED_BASE = 'https://widget.deezer.com/widget/dark/playlist';
const SOUNDCLOUD_DOMAIN = 'https://soundcloud.com';
const AUTHORIZED_DOMAIN = [SPOTIFY_DOMAIN, DEEZER_DOMAIN, SOUNDCLOUD_DOMAIN];

const startsWith = (testValue) => (value) => testValue.startsWith(value);

export const isValidEmbeddedUrl = (url) =>
    URL_REGEX.test(url) && (url?.includes('/embed') || url?.includes('/widget') || url?.includes('/player'));

export const getEmbeddedUrl = (url) => {
    if (!URL_REGEX.test(url) || !AUTHORIZED_DOMAIN.some(startsWith(url))) {
        return;
    }

    let domain = AUTHORIZED_DOMAIN.find(startsWith(url));
    if (domain === SPOTIFY_DOMAIN && !url.includes('/embed')) {
        return getEmbeddedUrlSpotify(url);
    } else if (domain === SOUNDCLOUD_DOMAIN) {
        return getEmbeddedUrlSoundCloud(url);
    } else if (domain === DEEZER_DOMAIN) {
        return getEmbeddedUrlDeezer(url);
    }
    return url;
};

const getEmbeddedUrlSpotify = (url) => {
    if (url.includes('/embed')) {
        return url;
    }

    return `${url.substring(0, SPOTIFY_DOMAIN.length)}/embed/${url.substring(SPOTIFY_DOMAIN.length + 1, url.length)}`;
};

const getEmbeddedUrlSoundCloud = (url) => {
    const lastIndex = url.indexOf('?') === -1 ? url.length : url.indexOf('?');
    return `https://w.soundcloud.com/player/?url=${url.substring(0, lastIndex)}`;
};

const getEmbeddedUrlDeezer = (url) => {
    return `${DEEZER_EMBEDDED_BASE}/${/[^/]*$/.exec(url)}`;
};
