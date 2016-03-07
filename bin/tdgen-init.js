#!/usr/bin/env node
'use strict';

var tdgen = require('../tdgen.js');
var program = require('commander');
var path = require('path');

program
    .version("0.0.1")
    .usage('<template>')
    .parse(process.argv);


if (program.args.length >= 1) {
    tdgen.init(program.args[0]);
} else {
    tdgen.init();
}

