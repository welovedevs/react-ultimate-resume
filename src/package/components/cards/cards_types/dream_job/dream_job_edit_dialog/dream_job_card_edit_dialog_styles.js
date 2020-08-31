import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => ({
    currentCities: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    column: {
        flexDirection: 'column'
    },
    othersCheckbox: {
        display: 'flex',
        alignItems: 'center'
    },
    formGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5 * theme.miscellaneous.spacing,
        flexWrap: 'wrap'
    },
    formGroupField: {
        marginBottom: 'unset',
        marginTop: 'unset'
    },
    leftFormGroupField: {
        extend: 'formGroupField',
        marginRight: 3 * theme.miscellaneous.spacing
    },
    [createScreenWidthMediaQuery('max-width', theme.screenSizes.medium)]: {
        formGroup: {
            flexDirection: 'column'
        },
        formGroupField: {
            width: '100%',
            marginBottom: 5 * theme.miscellaneous.spacing
        },
        leftFormGroupField: {
            marginRight: 'unset',
            marginBottom: 5 * theme.miscellaneous.spacing
        }
    }
});
