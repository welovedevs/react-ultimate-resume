const { DEFAULT_THEME } = require('./dist/index');

const init = async () => {
    console.log('Salut');
    console.log(DEFAULT_THEME)
}

init()
    .then(() => {
        console.log('Drop it.');
        process.exit(0);
    })
    .catch((error) => {
        console.log('Catched a wild error:', error);
        process.exit(-1);
    });
