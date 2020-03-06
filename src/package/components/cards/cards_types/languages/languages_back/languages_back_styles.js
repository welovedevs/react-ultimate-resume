import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = theme => {
    const { screenSizes } = theme;

    const QUERY_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.small);
    const QUERY_EXTRA_SMALL = createScreenWidthMediaQuery('max-width', screenSizes.xs);

    return {
        content: {
            padding: 0,
            position: 'relative',
            flex: 1,
            overflow: 'hidden',
            [QUERY_SMALL]: {
                paddingBottom: [0, '!important']
            },
            [QUERY_EXTRA_SMALL]: {
                width: '100%',
                padding: [theme.miscellaneous.spacing, '!important'],
                paddingBottom: [0, '!important']
            }
        },
        contentAnimated: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        cardTitle: {
            [QUERY_EXTRA_SMALL]: {
                fontSize: 28
            }
        },
        columnsContainer: ({ itemSize }) => ({
            height: '100%',
            width: itemSize > 1 ? '70%' : '40%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: [
                theme.miscellaneous.spacing * 5,
                theme.miscellaneous.spacing * 2,
                0,
                theme.miscellaneous.spacing * 2
            ],
            [QUERY_SMALL]: {
                width: itemSize > 1 ? '100%' : '70%',
                padding: [
                    theme.miscellaneous.spacing,
                    theme.miscellaneous.spacing * 2,
                    0,
                    theme.miscellaneous.spacing * 2
                ]
            }
        }),
        languageLettersButton: {
            display: 'flex'
        }
    };
};
