export const JobPerks = {
    MOOD: 'mood',
    CHALLENGE: 'challenge',
    SALARY: 'salary',
    WORK_HOURS: 'work_hours',
    TRAINING: 'training',
    RESPONSIBILITIES: 'responsibilities',
    PERKS: 'perks'
} as const;

type JobPerksType = keyof typeof JobPerks;
export type JobPerksKeys = typeof JobPerks[JobPerksType];
