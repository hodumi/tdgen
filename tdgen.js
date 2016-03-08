var fs = require('fs-extra');
var handlebars = require('handlebars');

module.exports = {
    init: function(template, directory) {
	var tmp = template === undefined ? "default" : template;

	fs.copySync(__dirname + '/template/' + tmp + '', './');

	console.log('Initialize ' + tmp);
    },

    make: function(template, data, size) {
	size = size % 1 == 0 ? size : 1;


	// load template
	var source = fs.readFileSync(template, 'utf8');

	// load data
	var data = require(data);

	// compile template by handlebars.js
	var tmp = handlebars.compile(source);

	// output test-data

	// console.log(data);
	var dataArray = data(require('./generater.js'), require('./resource.js'));
	for(var i = 1; i <= size; i++) {
	    console.log(tmp(dataArray));
	}
    }
};
