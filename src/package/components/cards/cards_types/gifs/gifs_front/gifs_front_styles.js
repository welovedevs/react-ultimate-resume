export const styles = (theme) => {
    const { palette } = theme;
    return ({
        container: {
            '& > *:not($background)': {
                zIndex: 2
            }
        },
        title: {
            position: 'relative'
        },
        titleTypography: {
            color: [palette.light[900], '!important']
        },
        background: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            '&::after': {
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: `rgba(${palette.dark.rgbShades[900].join(', ')}, .4)`,
                content: "''"
            }
        },
        backgroundImage: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            zIndex: 0
        }
    });
};
