import test from 'ava';
import 'babel-core/register';

import sdfCli from '../src/lib/';

test('sdfCli', (t) => {
  t.is(sdfCli(), true);
});
