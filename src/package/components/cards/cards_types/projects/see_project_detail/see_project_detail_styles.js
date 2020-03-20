export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        fillIcon: {
            extend: 'icon',
            '& > g': {
                fill: 'currentColor',
                transform: 'scale(1.33334)'
            }
        },
        icon: {
            height: 20,
            width: 'auto',
            marginRight: spacing * 1.5,
            '& > g': {
                stroke: 'currentColor'
            }
        },
        detailTypography: {
            color: ['inherit', '!important']
        },
        typography: {
            fontWeight: 500
        }
    };
};
