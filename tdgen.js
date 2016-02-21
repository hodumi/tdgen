var fs = require('fs');
var handlebars = require('handlebars');

module.exports = {
    generate: function(template, data) {

	// load template
	var source = fs.readFileSync(template, 'utf8');

	// load data
	var data = require(data);

	// compile template by handlebars.js
	var tmp = handlebars.compile(source);

	// output test-data

	// console.log(data);
	console.log(tmp(data));
    }
};
