import each from 'jest-each';
const packageJson = require('../../package.json')

describe('NPM Version Tests', () => {

    each([
        ['0.0.1-SNAPSHOT', '0.0.2-SNAPSHOT'],
        ['0.1.0-SNAPSHOT', '0.1.1-SNAPSHOT'],
        ['1.0.0-SNAPSHOT', '1.0.1-SNAPSHOT'],
        ['1.0.0', '1.0.1-SNAPSHOT'],
    ]).it('should bump the version and append -SNAPSHOT', (startVersion, endVersion) => {
        // given:
        packageJson.version = startVersion;

        // when:
        // exercise the github action...

        // then:
        expect(packageJson.version).toEqual(endVersion);

    });

});