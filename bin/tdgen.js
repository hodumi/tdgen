'use strict';

var tdgen = require('../tdgen.js');
var program = require('commander');


program
    .version('0.0.1')
    .usage('<template> <data>')
    .parse(process.argv);


if (program.args.length == 2) {
    // run generate file
    tdgen.generate(program.args[0], program.args[1]);
} else {
    program.help();
}
