const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const yargs = require('yargs').argv;
const ora = require('ora');
const rimraf = require('rimraf');
require('colors');

const isVerbose = yargs.verbose === 'true' || yargs.verbose === true;
const TO_PRESERVE_DURING_CLEAN_UP = [
    'package.json',
    '.git',
    '.gitignore',
    'node_modules',
    'LICENSE.md',
    'README.md',
    'tailwind.config.js'
];

const run = async () => {
    const srcPath = __dirname + '/src/package';
    const srcFiles = fs.readdirSync(srcPath);
    const buildingPackageSpinner = ora(`Building fresh package...`).start();
    try {
        console.log('Generating package...');
        await exec('npm run package');
        console.log('Package generated with success');
    } catch (error) {
        buildingPackageSpinner.fail('Package build failed.');
        if (isVerbose) {
            console.error(error);
        }
        process.exit(-1);
    }
    buildingPackageSpinner.succeed('Package built.');

    const postBuildCleanUpSpinner = ora('Doing post-build clean-up...').start();
    const rootNewFiles = fs.readdirSync(__dirname);

    rootNewFiles
        .filter((name) => !srcFiles.includes(name) && !TO_PRESERVE_DURING_CLEAN_UP.includes(name))
        .forEach((fileName) => {
            rimraf.sync(__dirname + `/${fileName}`, {}, () => {});
        });
    postBuildCleanUpSpinner.succeed('Did post-build clean up.');
};

run();
