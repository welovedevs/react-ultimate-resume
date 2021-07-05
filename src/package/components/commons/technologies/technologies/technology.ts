export interface Technology {
    name: string;
    url: string;
    id: string;
    handle: string;
    tags: string[];
}

export interface DevTechnology extends Technology {
    value: number;
    index: number;
}
