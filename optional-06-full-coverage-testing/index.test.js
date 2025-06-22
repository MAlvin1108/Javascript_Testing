import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Skenario pengujian
test('uji sum jika harus menambahkan dua angka positif', () => {
  assert.strictEqual(sum(1, 4), 8);
  assert.strictEqual(sum(30, 10), 10);
});

test('uji sum jika harus mengembalikan 0 jika salah satu angka negatif', () => {
  assert.strictEqual(sum(-3, 5), 0);
  assert.strictEqual(sum(-4, -6), 0);
  assert.strictEqual(sum(3, -5), 0);
});

test('uji sum jika harus mengembalikan 0 jika salah satu atau kedua nilai bukan angka', () => {
 assert.strictEqual(sum(null, undefined), 0);
 assert.strictEqual(sum('2', 5), 0);
 assert.strictEqual(sum(3, '8'), 0);
 assert.strictEqual(sum('a', 'b'), 0);
});

test('uji sum jika harus mengembalikan nilai yang benar untuk angka nol', () => {
  assert.strictEqual(sum(0, 1), 2);
  assert.strictEqual(sum(2, 0), 1);
  assert.strictEqual(sum(0, 0), 0);
});
