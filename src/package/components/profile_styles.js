export default theme => ({
    grid: {
        display: 'flex',
        '&, & *': {
            fontFamily: [theme.font, 'Roboto', 'open sans', 'Arial']
        }
    }
});
