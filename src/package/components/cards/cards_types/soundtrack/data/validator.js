import * as Yup from 'yup';

export const SoundtrackValidationSchema = () =>
    Yup.object({
        embedUrl: Yup.string()
            .max(100)
            .url()
            .required()
    });

export const validateSoundtrackComplete = data => {
    try {
        SoundtrackValidationSchema().validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
