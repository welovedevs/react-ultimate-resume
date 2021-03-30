export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        sectionText: {
            margin: [spacing * 3, 0]
        },
        details: {
            marginLeft: -(spacing * 1.5),
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        detail: {
            display: 'flex',
            alignItems: 'center',
            margin: spacing * 1.5
        },
        link: {
            color: ['inherit', '!important'],
            display: 'flex',
            alignItems: 'center'
        },
        detailIcon: {
            height: 20,
            width: 'auto',
            marginRight: spacing * 1.5,
            '&:not($detailDeleteIcon) > path': {
                fill: 'currentColor'
            }
        },
        detailDeleteIcon: {
            extend: 'detailIcon',
            '& > g > path': {
                stroke: 'currentColor'
            }
        },
        detailTypography: {
            color: ['inherit', '!important']
        },
        salary: {
            extend: 'detailTypography',
            display: 'flex',
            alignItems: 'center'
        }
    };
};
