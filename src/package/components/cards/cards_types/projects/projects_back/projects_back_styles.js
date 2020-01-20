import { flex } from '../../../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        title: {
            position: 'relative',
            '& > *:not($background)': {
                zIndex: 2,
                position: 'relative'
            }
        },
        typography: {
            color: ['#fff', '!important']
        },
        background: {
            zIndex: 0,
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            ...center,
            '&::after': {
                zIndex: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, .4)',
                content: "''"
            }
        },
        backgroundImage: {
            height: '190%',
            width: '110%',
            objectFit: 'cover',
            transform: 'rotate(-10deg)'
        }
    });
};
