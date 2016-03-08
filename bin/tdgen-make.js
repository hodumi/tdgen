#!/usr/bin/env node
'use strict';

var tdgen = require('../tdgen.js');
var program = require('commander');
var path = require('path');

program
    .version("0.0.1")
    .usage('<formatFile> <dataFile> [size]')
    .parse(process.argv);


if (program.args.length >= 2) {
    var formatFile = path.resolve(program.args[0]);
    var dataFile = path.resolve(program.args[1]);
    var size = program.args[2];

    tdgen.make(formatFile, dataFile, size);
} else {
    program.help();
}
