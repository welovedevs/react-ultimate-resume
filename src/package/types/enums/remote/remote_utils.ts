export const REMOTE_FREQUENCY = {
    FULL_TIME: 'fullTime',
    REGULARLY: 'regularly',
    OCCASIONALY: 'occasionally',
    NEVER: 'never'
} as const;

export type RemoteFrequencies = typeof REMOTE_FREQUENCY[keyof typeof REMOTE_FREQUENCY];
