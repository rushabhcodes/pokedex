import { describe, expect, test } from 'vitest'
import { Cache } from './pokecache.js';

describe('Cache', () => {
    test('should store and retrieve cached data', async (

    ) => {
        const cache = new Cache(1000);
        cache.add('key1', 'value1');
        const value = cache.get<string>('key1');
        expect(value).toBe('value1');
    })
})