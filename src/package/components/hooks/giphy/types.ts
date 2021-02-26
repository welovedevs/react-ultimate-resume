export interface GiphyAuthor {
    name: string;
    profileUrl: string;
    isVerified?: boolean;
    profileAvatarUrl: string;
}

export interface GiphySearchResult {
    id: string;
    url: string;
    title: string;
    user?: GiphyAuthor;
}
