// @ts-ignore
import uuid from 'uuid/v4';
import { DeveloperResume, DeveloperSocialAccounts } from '../../../../../types/resume/resume';

export interface SocialCardData {
    profiles: Array<DeveloperSocialAccounts & { index: number }>;
}
export const mapProfilesFromJsonResume = (jsonResume: DeveloperResume): SocialCardData => ({
    profiles: (jsonResume?.basics?.profiles ?? []).map((profile, index) => ({
        ...profile,
        // generating uuid for manipulating data if not present
        id: profile.id || uuid(),
        index
    }))
});

export const mapProfilesToJsonResume = (data: SocialCardData): Partial<DeveloperResume> => ({
    basics: {
        profiles: data.profiles.sort(({ index: a }, { index: b }) => a - b).map(({ index, ...item }) => item)
    } as Partial<DeveloperResume['basics']>
});
