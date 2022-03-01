const { ProfileCardPaddedFront } = require('./dist/cjs/index');

const init = async () => {
    console.log('Salut');
    console.log(ProfileCardPaddedFront)
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
