import test from 'ava';
import {freshness} from '../../util/freshness';

test('Freshness test', t => {
  const now = Date();
  const a = freshness(now, now);
  t.deepEqual(a, 0);
});
