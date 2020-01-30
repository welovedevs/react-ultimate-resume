export const styles = theme => ({
    container: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
    },
    technologiesList: {
        overflow: 'scroll',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    technologyLogoWrapper: {
        position: 'relative',
        width: 60,
        height: 60,
        padding: 0,
        marginBottom: theme.miscellaneous.spacing
    },
    technologyLogo: {
        padding: theme.miscellaneous.spacing,
        width: '100%',
        height: '100%'
    },
    technologyItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.miscellaneous.spacing,
        padding: theme.miscellaneous.spacing
    },
    itemName: {
        width: 60,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textAlign: 'center'
    },
    selectedTechnologyStub: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary[500],
        color: theme.palette[theme.palette.primary.contrastDefaultColor][500]
    }
});
