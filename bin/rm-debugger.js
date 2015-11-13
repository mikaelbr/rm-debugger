#!/usr/bin/env node

'use strict';

var path = require('path');
var Runner = require('jscodeshift/dist/Runner');

var opts = require('nomnom')
  .script('rm-debugger')
  .options({
    path: {
      position: 0,
      help: 'Files or directory to transform',
      list: true,
      metavar: 'FILE',
      required: true
    },
    cpus: {
      abbr: 'c',
      help: '(all by default) Determines the number of processes started.'
    },
    verbose: {
      abbr: 'v',
      choices: [0, 1, 2],
      default: 0,
      help: 'Show more information about the transform process'
    },
    dry: {
      abbr: 'd',
      flag: true,
      help: 'Dry run (no changes are made to files)'
    },
    print: {
      abbr: 'p',
      flag: true,
      help: 'Print output, useful for development'
    },
    babel: {
      flag: true,
      default: true,
      help: 'Apply Babel to transform files'
    },
    extensions: {
      default: 'js',
      help: 'File extensions the transform file should be applied to'
    }
  })
  .parse();

Runner.run(
  path.join(__dirname, '../index.js'),
  opts.path,
  opts
)
