import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { IntlFormatters } from 'react-intl';
import { SocialCardData } from './mapping';
import {
    CodingameSocialAccount,
    CustomSocialAccount,
    LinkedinSocialAccount,
    TwitterSocialAccount
} from '../../../../../types/resume/resume';

const twitterValidator = (formatMessage: IntlFormatters['formatMessage']) =>
    Yup.object<Partial<TwitterSocialAccount>>({
        id: Yup.string().notRequired(),
        network: Yup.string().equals(['twitter']).notRequired(),
        username: Yup.string()
    });

const linkedinValidator = (formatMessage: IntlFormatters['formatMessage']) =>
    Yup.object<Partial<LinkedinSocialAccount>>({
        id: Yup.string().notRequired(),
        network: Yup.string().equals(['linkedin']).notRequired(),
        url: Yup.string().url(formatMessage(validationTranslations.url)).notRequired()
    });

const codinGameValidator = (formatMessage: IntlFormatters['formatMessage']) =>
    Yup.object<Partial<CodingameSocialAccount>>({
        id: Yup.string().notRequired(),
        network: Yup.string().equals(['codingame']).notRequired(),
        username: Yup.string().notRequired()
    });

export const showSocialCard = (data: SocialCardData, showContactInformations: boolean) => {
    const profiles = data?.profiles || {};
    const { linkedin, twitter, codingame, ...other } = profiles;
    const hasOther = Object.values(other).some(({ url }) => !!url);
    return (
        !!linkedin?.url ||
        !!twitter?.username ||
        !!codingame?.username ||
        hasOther ||
        !!(showContactInformations && (data?.phone || data?.email))
    );
};
export const socialValidationSchema = (formatMessage: IntlFormatters['formatMessage']) =>
    Yup.object({
        profiles: Yup.lazy((value) => {
            const { twitter, linkedin, codingame, ...other } = value as SocialCardData['profiles'];

            return Yup.object({
                twitter: twitter ? twitterValidator(formatMessage) : twitterValidator(formatMessage).notRequired(),
                linkedin: linkedin ? linkedinValidator(formatMessage) : linkedinValidator(formatMessage).notRequired(),
                codingame: codingame
                    ? codinGameValidator(formatMessage)
                    : codinGameValidator(formatMessage).notRequired(),
                ...Object.entries(other).reduce(
                    (acc, [id]) => ({
                        ...acc,
                        [id]: Yup.object<CustomSocialAccount>({
                            id: Yup.string().required(),
                            network: Yup.string().required(formatMessage(validationTranslations.required)),
                            url: Yup.string()
                                .url(formatMessage(validationTranslations.url))
                                .required(formatMessage(validationTranslations.required))
                        }).nullable()
                    }),
                    {}
                )
            });
        })
    });
