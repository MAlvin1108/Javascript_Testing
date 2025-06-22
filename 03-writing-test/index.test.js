import { sum } from './index.js';
import assert from 'node:assert';
import { test } from 'node:test';

test('Uji jika menjumlahkan dua bilangan positif', () => {
  assert.strictEqual(sum(2, 2), 4);
});

