import { createScreenWidthMediaQuery } from '../../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', theme.screenSizes.small);

    return {
        container: ({ isEditing }) => ({
            marginBottom: spacing * 4,
            ...(!isEditing && {
                textAlign: 'center'
            })
        }),
        typography: {
            fontSize: 32
        },
        datePicker: {
            cursor: 'pointer',
            marginLeft: spacing,
            [QUERY_SMALL]: {
                marginLeft: 'unset'
            }
        }
    };
};
