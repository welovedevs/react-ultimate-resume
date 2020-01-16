const getColorFromCardVariant = (theme, cardVariant) =>
    theme.palette[(theme.components.cards.variants[cardVariant] || theme.components.cards.default).color][500];

export const styles = (theme) => ({
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            marginRight: 0
        },
        typography: ({ cardVariant }) => ({
            textTransform: 'unset',
            fontSize: ['14px', '!important'],
            color: [getColorFromCardVariant(theme, cardVariant), '!important']
        }),
        arrowContainer: {
            display: 'flex'
        },
        arrow: ({ cardVariant }) => ({
            height: 28,
            '& > path': {
                stroke: getColorFromCardVariant(theme, cardVariant)
            }
        })
    });
