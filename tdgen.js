var fs = require('fs-extra');
var handlebars = require('handlebars');

module.exports = {
    init: function(template, directory) {
	var tmp = template === undefined ? "default" : template;

	fs.copySync(__dirname + '/template/' + tmp + '', './');

	console.log('Initialized ' + tmp);
    },

    make: function(template, data) {

	// load template
	var source = fs.readFileSync(template, 'utf8');

	// load data
	var data = require(data);

	// compile template by handlebars.js
	var tmp = handlebars.compile(source);

	// output test-data

	// console.log(data);
	console.log(tmp(data(require('./generater.js'), require('./resource.js'))));
    }
};
