
var res = require('../resource.js');
var assert = require('assert');

describe('resource.js', function() {

    describe('range', function() {
	it('1 to 10', function() {
	    var arr = res.range(1, 10);

	    assert.equal(arr.toString(), [1,2,3,4,5,6,7,8,9,10].toString());
	});

	it('1 to 10, step by 2', function() {
	    var arr = res.range(1,10,2);
	    assert.equal(arr.toString(), [1,3,5,7,9].toString());
	});
    });


    describe('fromFile', function() {
	it('load a file', function() {
	    var arr = res.fromFile('./test/resources/name.txt');
	    assert.equal(arr.toString(), ['Yamada', 'Suzuki', 'Nakamura'].toString());
	});
    });
});
