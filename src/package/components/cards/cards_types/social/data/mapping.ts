// @ts-ignore
import uuid from 'uuid/v4';
import { DeveloperResume } from '../../../../../types/resume/resume';

interface BaseSocialAccount {
    id: string;
}
export interface CustomSocialAccount extends BaseSocialAccount {
    network: string;
    url: string;
}
export interface TwitterSocialAccount extends BaseSocialAccount {
    network: 'twitter';
    username: string;
}
export interface CodingameSocialAccount extends BaseSocialAccount {
    network: 'codingame';
    username: string;
}
export interface GithubSocialAccount extends BaseSocialAccount {
    network: 'github';
    username: string;
}
export interface LinkedinSocialAccount extends BaseSocialAccount {
    network: 'linkedin';
    url: string;
}
const predeterminedNetworks = ['twitter', 'linkedin', 'codingame', 'github'];
export interface SocialCardData {
    profiles: {
        twitter?: TwitterSocialAccount & { index: number };
        linkedin?: LinkedinSocialAccount & { index: number };
        codingame?: CodingameSocialAccount & { index: number };
        github?: GithubSocialAccount & { index: number };
    } & {
        [customKey: string]: CustomSocialAccount & { index: number };
    };
    phone?: string;
    email?: string;
}

const getId = (network: string, id: string) => {
    if (predeterminedNetworks.includes(network)) {
        return network;
    }
    return id;
};
export const mapProfilesFromJsonResume = (
    jsonResume: DeveloperResume,
    showContactInformations: boolean
): SocialCardData => ({
    profiles: (jsonResume?.basics?.profiles ?? []).reduce((acc, profile, index) => {
        const id = profile.id || uuid();
        const key = getId(profile?.network || '', id);
        return {
            ...acc,
            [key]: {
                ...profile,
                network: profile.network ?? '',
                url: profile.url ?? '',
                id,
                index
            }
        };
    }, {} as SocialCardData['profiles']),
    ...(showContactInformations && {
        phone: jsonResume.basics?.phone,
        email: jsonResume.basics?.email
    })
});

export const mapProfilesToJsonResume = (data: SocialCardData): Partial<DeveloperResume> => ({
    basics: {
        profiles: Object.values(data.profiles)
            .filter(Boolean)
            .filter((item) => {
                if (!predeterminedNetworks.includes(item.network)) {
                    return true;
                }
                if (item.network === 'twitter') {
                    return !!(item as TwitterSocialAccount).username;
                }
                if (item.network === 'linkedin') {
                    return !!(item as LinkedinSocialAccount).url;
                }
                if (item.network === 'codingame') {
                    return !!(item as CodingameSocialAccount).username;
                }
                if (item.network === 'github') {
                    return !!(item as GithubSocialAccount).username;
                }
                return true;
            })
            .map(({ index, ...item }) => ({ ...item, id: item.id || uuid() }))
    } as Partial<DeveloperResume['basics']>
});
