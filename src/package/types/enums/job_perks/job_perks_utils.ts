export const JobPerksEnum = {
    MOOD: 'mood',
    CHALLENGE: 'challenge',
    SALARY: 'salary',
    WORK_HOURS: 'work_hours',
    TRAINING: 'training',
    RESPONSIBILITIES: 'responsibilities',
    PERKS: 'perks',
    OTHER: 'others'
};
export type JobPerks = typeof JobPerksEnum[keyof typeof JobPerksEnum];
