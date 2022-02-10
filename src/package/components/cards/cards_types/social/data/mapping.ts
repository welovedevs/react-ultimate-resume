// @ts-ignore
import uuid from 'uuid/v4';
import {
    CodingameSocialAccount,
    CustomSocialAccount,
    DeveloperResume,
    DeveloperSocialAccounts,
    GithubSocialAccount,
    LinkedinSocialAccount,
    TwitterSocialAccount
} from '../../../../../types/resume/resume';

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
        const key = getId(profile?.network, id);
        return {
            ...acc,
            [key]: {
                ...profile,
                id,
                index
            }
        };
    }, {}),
    ...(showContactInformations && {
        phone: jsonResume.basics.phone,
        email: jsonResume.basics.email
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
