const packageJson = require('../package.json')
const SNAPSHOT = '-SNAPSHOT';

export async function dropSnapshot() {
    try {
        const currentVersion = packageJson.version;

        let updatedVersion: string;
        if (isSnapshot(currentVersion)) {
            updatedVersion = currentVersion.substring(0, currentVersion.length - SNAPSHOT.length);

        } else {
            updatedVersion = currentVersion;
        }

        console.log(updatedVersion); // log?
        packageJson.version = updatedVersion;

    } catch (error) {
        // log? and kill action?
    }
}

function isSnapshot(version: string): boolean {
    return version.substring(version.length - SNAPSHOT.length) === SNAPSHOT;
}

dropSnapshot();