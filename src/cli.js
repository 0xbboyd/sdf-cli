#! /usr/bin/env node

import meow from 'meow';
import sdfCli from './lib/';

const cli = meow({
  help: [
    'Usage',
    '  $ sdf-cli [input]',
    '',
    'Options',
    '  --foo  Lorem ipsum. [Default: false]',
    '',
    'Examples',
    '  $ sdf-cli',
    '  unicorns & rainbows',
    '  $ sdf-cli ponies',
    '  ponies & rainbows'
  ]
});

const input = cli.input || [];
const flags = cli.flags || {};

console.log(cli.help); // eslint-disable-line

sdfCli(input, flags);
