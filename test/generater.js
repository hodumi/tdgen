
var gen = require('../generater.js');
var assert = require('assert');

describe('generater.js', function() {

    describe('counter', function() {
	it('count up', function() {
	    var cnter = gen.counter(1);
	    assert.equal(cnter(), 1);
	    assert.equal(cnter(), 2);
	    assert.equal(cnter(), 3);
	});

	it('set initial value', function() {
	    var cnter = gen.counter(10);
	    assert.equal(cnter(), 10);
	    assert.equal(cnter(), 11);
	    assert.equal(cnter(), 12);
	});

	it('set step value', function() {
	    var cnter = gen.counter(1, 2);
	    assert.equal(cnter(), 1);
	    assert.equal(cnter(), 3);
	    assert.equal(cnter(), 5);
	});
    });

    describe('uniform', function() {
	before(function(done) {
	    Math.random = function() { return 0.5; };

	    done();
	});

	it('get random number by uniform distribution', function() {
	    assert.equal(gen.uniform(5), 2);
	});
    });

    describe('random', function() {
	before(function(done) {
	    Math.random = function() { return 0.5; };

	    done();
	});

	it('get random value by uniform distribution', function() {
	    assert.equal(gen.random([1,2,3,4,5])(), 3);
	});
    });
});
