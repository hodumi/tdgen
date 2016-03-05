#!/usr/bin/env node
'use strict';

var tdgen = require('../tdgen.js');
var program = require('commander');
var path = require('path');


program
    .version('0.0.1')
    .usage('<template> <data>')
    .parse(process.argv);


if (program.args.length == 2) {
    // run generate file

    var formatFile = path.resolve(program.args[0]);
    var dataFile = path.resolve(program.args[1]);

    tdgen.generate(formatFile, dataFile);
} else {
    program.help();
}
