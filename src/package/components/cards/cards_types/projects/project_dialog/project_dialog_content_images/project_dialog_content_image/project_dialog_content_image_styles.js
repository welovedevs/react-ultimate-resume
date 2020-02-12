import { flex, getHexFromPaletteColor } from '../../../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        miscellaneous: { spacing },
        palette
    } = theme;
    return {
        container: {
            height: 125,
            width: 200,
            minHeight: 125,
            minWidth: 200,
            margin: spacing,
            borderRadius: 5,
            overflow: 'hidden',
            backgroundColor: palette.dark[50],
            position: 'relative'
        },
        image: {
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        },
        editLayer: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, .6)',
            content: "''",
            ...center
        },
        deleteButton: {
            display: 'flex'
        },
        deleteIcon: {
            fill: getHexFromPaletteColor(theme, 'light'),
            height: 40,
            width: 'auto'
        },
        button: {
            height: '100%',
            width: '100%'
        }
    };
};
