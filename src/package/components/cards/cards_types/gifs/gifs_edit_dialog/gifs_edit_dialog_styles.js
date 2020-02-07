export const styles = (theme) => {
    const { palette } = theme;
    return ({
        dialogPaper: {
            width: 'unset',
            maxWidth: ['unset', '!important'],
            backgroundColor: palette.dark[100]
        }
    });
};
