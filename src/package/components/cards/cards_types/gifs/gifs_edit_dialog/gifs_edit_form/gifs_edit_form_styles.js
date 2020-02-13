export const styles = theme => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        addButtonDashed: {
            height: 365,
            width: 300,
            margin: spacing * 2
        },
        sortableHelper: {
            zIndex: 2120
        },
        [`@media screen and (max-width: ${theme.screenSizes.small}px)`]: {
            addButtonDashed: {
                height: 75,
                minHeight: 75
            }
        }
    };
};
