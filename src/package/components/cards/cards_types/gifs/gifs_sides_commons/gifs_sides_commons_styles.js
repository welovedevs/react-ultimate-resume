export const styles = theme => {
    const { palette } = theme;
    return {
        container: {
            '& > *:not($underLayerContainer)': {
                zIndex: 2
            }
        },
        underLayerContainer: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
        },
        title: {
            position: 'relative',
            backgroundColor: 'transparent'
        },
        darkenLayer: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: `rgba(${palette.dark.rgbShades[900].join(', ')}, .4)`,
            zIndex: 1
        }
    };
};
