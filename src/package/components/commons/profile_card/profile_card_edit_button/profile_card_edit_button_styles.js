import { flex, getHexFromPaletteColor } from '../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        editButton: ({
            zIndex: 2,
            position: 'absolute',
            top: spacing * 2,
            right: spacing * 2,
            height: 50,
            width: 50,
            borderRadius: '50%',
            backgroundColor: getHexFromPaletteColor(theme, 'light'),
            ...center
        }),
        editIcon: ({
            height: 24,
            fill: getHexFromPaletteColor(theme, 'dark')
        })
    });
};
