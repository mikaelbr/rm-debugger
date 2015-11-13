'use strict';

var path = require('path');
var fs = require('fs');
var test = require('tape');
var transform = require('../');
var jscodeshift = require('jscodeshift');

var fixture = path.join(__dirname, 'fixture', 'example.js');

test('remove DebuggerStatement', function (t) {
    t.plan(2);

    var source = fs.readFileSync(fixture).toString('utf-8');
    t.equal(source.split('debugger;').length, 5);

    var result = transform(
      { source: source },
      { jscodeshift: jscodeshift }
    );
    t.equal(result.split('debugger;').length, 1);
});
