const packageJson = require('../../package.json')

async function run() {
    try {
        console.log(packageJson.version);
    } catch (error) {

    }
}

run();
