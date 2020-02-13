export const styles = theme => {
    const { palette } = theme;
    return {
        paper: {
            width: ['100%', '!important'],
            maxWidth: ['unset', '!important'],
            backgroundColor: [palette.light[800], '!important']
        },
        dialogRoot: {},
        [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
            dialogRoot: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }
        }
    };
};
