export const styles = (theme) => {
    const { palette } = theme;
    return ({
        paper: {
            width: ['100%', '!important'],
            maxWidth: ['unset', '!important'],
            backgroundColor: [palette.light[800], '!important']
        }
    });
};
