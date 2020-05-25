export const styles = (theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: [8, 0]
    },
    icon: {
        height: 20,
        width: 'auto',
        fill: `rgba(${theme.palette.light.rgbShades[500].join(', ')}, .75)`
    },
    typography: {
        marginLeft: 8 * 2
    },
    button: {
        display: 'flex'
    }
});
