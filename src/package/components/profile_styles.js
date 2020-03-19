export const styles = theme => ({
    '@global': {
        '*': {
            'box-sizing': 'border-box'
        },
        a: {
            textDecoration: 'none',
            color: 'inherit'
        },
        '*:focus': {
            outline: 'none'
        },
        textarea: {
            resize: 'none'
        },
        button: {
            background: 'none',
            color: 'inherit',
            border: 'none',
            padding: 0,
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit'
        },
        'h1, h2, h3, h4, h5, h6': {
            margin: 0
        }
    },
    container: {
        minHeight: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        ...['fontFamily', 'backgroundColor', 'color'].reduce(
            (acc, key) => ({
                ...acc,
                [key]: theme.miscellaneous[key]
            }),
            {}
        )
    }
});
