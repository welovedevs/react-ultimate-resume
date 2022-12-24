export const JobIssuesEnum = {
    NO_TECH: 'no_tech',
    NO_RESPONSIBILITIES: 'no_responsibilities',
    NO_CHALLENGE: 'no_challenge',
    BORING_TEAM: 'boring_team',
    BORING_MANAGEMENT: 'boring_management',
    SALARY: 'salary',
    LOCATION: 'location',
    OTHER: 'other'
} as const;

export type JobIssues = typeof JobIssuesEnum[keyof typeof JobIssuesEnum];
