import { createScreenWidthMediaQuery, withCustomVerticalScrollbar } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        palette,
        miscellaneous: { spacing },
        screenSizes
    } = theme;
    return {
        container: {
            maxHeight: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: spacing * 4,
            ...withCustomVerticalScrollbar()
        },
        selectedPaletteContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        divider: {
            height: 1,
            width: '100%',
            maxWidth: 200,
            backgroundColor: palette.dark[100],
            margin: [spacing * 4, 0, spacing * 3]
        },
        selectablePaletteIndex: {
            width: spacing * 5,
            marginRight: spacing * 2
        },
        selectablePaletteContainer: {
            display: 'flex',
            alignItems: 'flex-end',
            margin: [spacing * 2, 0]
        },
        paletteVisualColor: {},
        tooltipPopper: {
            zIndex: 9999999999
        },
        [createScreenWidthMediaQuery('max-width', screenSizes.xs)]: {
            paletteVisualColor: {
                height: 50,
                width: 50
            }
        }
    };
};
