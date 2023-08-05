import each from 'jest-each';
import { dropSnapshot } from '../release';
const packageJson = require('../../package.json')

describe('Release Tests', () => {
    each([
        ['0.0.1-SNAPSHOT', '0.0.1'],
        ['0.1.0-SNAPSHOT', '0.1.0'],
        ['1.0.0-SNAPSHOT', '1.0.0']
    ]).it('should drop -SNAPSHOT suffix when it exists', (startVersion, endVersion) => {
        // given:
        packageJson.version = startVersion;

        // when:
        dropSnapshot();

        // then:
        expect(packageJson.version).toEqual(endVersion);
    });

    each([
        ['1.0.1'],
        ['1010101.10101.101']
    ]).it('should return same version when -SNAPSHOT suffix does not exist', (version) => {
        // given:
        packageJson.version = version;

        // when:
        dropSnapshot();

        // then:
        expect(packageJson.version).toEqual(version);
    });
});