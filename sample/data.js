module.exports = function(gen, res) {
    return {
	id: gen.counter(1),
	name: gen.random(res.fromFile('./sample/names.txt')),
	age: gen.random(res.range(2, 10, 2)),
    }
};
