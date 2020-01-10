export const styles = ({ palette }) => ({
    container: {
        height: 110,
        width: 110,
        borderRadius: '50%',
        backgroundColor: palette.dark[50],
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    }
});
