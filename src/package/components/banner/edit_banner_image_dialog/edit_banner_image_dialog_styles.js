import { flex } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        content: {
            display: 'flex',
            flexDirection: 'column'
        },
        buttonContainer: {
            width: '100%',
            display: 'flex'
        },
        button: {
            width: '100%'
        },
        divider: {
            margin: [spacing * 4, 0],
            position: 'relative',
            ...center,
            '&::before': {
                height: 1,
                width: '100%',
                position: 'absolute',
                top: 'calc(50% - (1px / 2))',
                left: 0,
                backgroundColor: palette.dark[50],
                content: "''"
            }
        },
        dividerOr: {
            zIndex: 1,
            padding: [0, spacing * 2],
            backgroundColor: '#fff'
        }
    };
};
