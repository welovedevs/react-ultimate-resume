import { flex } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = theme => {
    const {
        palette,
        miscellaneous: { spacing }
    } = theme;
    return {
        background: {
            height: '50%',
            minHeight: '50%',
            width: '100%',
            backgroundColor: palette.dark[50],
            overflow: 'hidden',
            ...center
        },
        backgroundImage: {
            height: '140%',
            width: '110%',
            objectFit: 'cover',
            transform: 'rotate(-10deg)'
        },
        content: {
            height: `calc(50% - ${spacing * (7 + 1)}px)`,
            padding: [spacing * 3, spacing * 12, 0],
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            color: 'inherit',
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.4
        }
    };
};
