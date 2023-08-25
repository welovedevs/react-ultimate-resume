export const REMOTE_FREQUENCY = {
    FULL_TIME: 'fullTime',
    REGULARLY: 'regularly',
    OCCASIONALY: 'occasionally',
    NEVER: 'never'
} as const;

export type RemoteFrequencies = typeof REMOTE_FREQUENCY[keyof typeof REMOTE_FREQUENCY];

export const RemoteFrequenciesV2 = {
    fullTime: 'fullTime',
    hybrid: 'hybrid',
    no: 'no'
} as const;

export declare type RemoteFrequenciesV2keys = typeof RemoteFrequenciesV2[keyof typeof RemoteFrequenciesV2];
