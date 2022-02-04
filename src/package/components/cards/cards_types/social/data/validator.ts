import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';
import { IntlFormatters } from 'react-intl';
import { SocialCardData } from './mapping';

export const socialValidationSchema = (formatMessage: IntlFormatters['formatMessage']) =>
    Yup.object<SocialCardData>({
        interestedBy: Yup.string()
            .min(15, formatMessage(validationTranslations.min, { min: 15 }))
            .required(formatMessage(validationTranslations.required))
    });

export const validateSocialCardComplete = (data: SocialCardData) => {
    try {
        Yup.object({
            interestedBy: Yup.string().required()
        }).validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
