import { getEmbeddedUrl, isValidEmbeddedUrl } from './soundtrack_card_utils';

test('it should format embedded soundcloud url', () => {
    const url = 'https://soundcloud.com/lukasm1/sets/chill-mix-high-on-chill';
    const expected = `https://w.soundcloud.com/player/?url=https://soundcloud.com/lukasm1/sets/chill-mix-high-on-chill`;
    expect(getEmbeddedUrl(url)).toBe(expected);
});

test('it should format embedded deezer url', () => {
    const url = 'https://www.deezer.com/us/playlist/1479458365';
    const expected = `https://widget.deezer.com/widget/dark/playlist/1479458365`;
    expect(getEmbeddedUrl(url)).toBe(expected);
});

test('it should format embedded spotify url', () => {
    const url = 'https://www.deezer.com/us/playlist/1479458365';
    const expected = `https://widget.deezer.com/widget/dark/playlist/1479458365`;
    expect(getEmbeddedUrl(url)).toBe(expected);
});

test('it should be a valid url', () => {
    const urlEmbed = 'https://truc.com/embed';
    const urlWidget = 'https://truc.com/widget';
    const urlPlayer = 'https://truc.com/player';
    expect(isValidEmbeddedUrl(urlEmbed)).toBe(true);
    expect(isValidEmbeddedUrl(urlWidget)).toBe(true);
    expect(isValidEmbeddedUrl(urlPlayer)).toBe(true);
});

test('it should not be a valid url', () => {
    const url = 'https://truc.com/wrong';
    expect(isValidEmbeddedUrl(url)).toBe(false);
});
