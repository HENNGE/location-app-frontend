import { describe, expect, test } from 'vitest';
import { getCountIcon, kasvotFetcher } from './utilities';

describe('kasvotFetcher', () => {
    test('throws error if no query', async () => {
        let err;

        try {
            await kasvotFetcher('');
        } catch (error) {
            err = error;
        }

        expect(err).toStrictEqual(new Error('No query'));
    });
});

describe('getCountIcon', () => {
    test('returns the correct icon if user count is 2', () => {
        const value = getCountIcon(2);

        expect(value).toBe('/src/assets/mid-count.svg');
    });
});
