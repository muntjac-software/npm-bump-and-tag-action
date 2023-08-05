const packageJson = require('../package.json')

export async function run() {
    try {
        const currentVersion = packageJson.version;

        const bumpedVersion = currentVersion + 1; // etc
        console.log(bumpedVersion); // log?

        packageJson.version = bumpedVersion;

    } catch (error) {

    }
}

function isSnapshot(currentVersion: string): boolean {
    return true;
}

run();
