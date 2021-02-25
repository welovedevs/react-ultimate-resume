export const styles = (theme) => {
    const { palette } = theme;
    return {
        container: {
            '& > *:not($underLayerContainer):not($darkenLayer)': {
                zIndex: 2
            }
            // position: 'relative'
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
        },
        credits: {
            left: 16,
            bottom: 12
        }
    };
};
