var fs = require('fs');
var handlebars = require('handlebars');

// load template
var source = fs.readFileSync('./sample/template.sql', 'utf8');

// load data
var data = require('./sample/data.js');
	
// compile template by handlebars.js
var tmp = handlebars.compile(source);

// output test-data

// console.log(data);
console.log(tmp(data));
