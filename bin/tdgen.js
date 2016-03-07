#!/usr/bin/env node
'use strict';

var program = require('commander');

program
    .version('0.0.1')
    .command('init <template>', 'initialize current folder')
    .command('make <formatFile> <dataFile>', 'generate file from formatFile and dataFile')
    .parse(process.argv);
