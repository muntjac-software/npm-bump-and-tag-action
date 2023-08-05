import each from 'jest-each';
import { run } from '../bump';
const packageJson = require('../../package.json')

describe('Bump Tests', () => {
    each([
        ['0.0.1-SNAPSHOT', '0.0.2-SNAPSHOT'],
        ['0.1.0-SNAPSHOT', '0.1.1-SNAPSHOT'],
        ['1.0.0-SNAPSHOT', '1.0.1-SNAPSHOT'],
        ['1.0.0', '1.0.1-SNAPSHOT'],
    ]).it('should bump the version and append -SNAPSHOT', (startVersion, endVersion) => {
        // given:
        packageJson.version = startVersion;

        // when:
        run()

        // then:
        expect(packageJson.version).toEqual(endVersion);
    });
});