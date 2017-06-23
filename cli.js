#! /usr/bin/env node
'use strict';

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _lib = require('./lib/');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)({
  help: ['Usage', '  $ sdf-cli [input]', '', 'Options', '  --foo  Lorem ipsum. [Default: false]', '', 'Examples', '  $ sdf-cli', '  unicorns & rainbows', '  $ sdf-cli ponies', '  ponies & rainbows']
});

var input = cli.input || [];
var flags = cli.flags || {};

console.log(cli.help); // eslint-disable-line

(0, _lib2.default)(input, flags);