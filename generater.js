


// 一様分布でランダム
function uniform(len) {
    var min = 0;
    var max = len - 1;

    return Math.floor( Math.random() * (max - min + 1) ) + min;
}


// sourceを元に確率分布probDistから出力する。
function random(source, probDist) {
    var prob = probDist === undefined ? uniform : probDist;
   
    return function() {
	var i = prob(source.length);
	return source[i];
    };
}

// startからstepずつ出力
function counter(start, step) {
    var s = step === undefined ? 1 : step

    var cnt = start;

    return function() {
	var buf = cnt;
	cnt += s;
	return buf;
    }
}

module.exports = {

    random: random,
    counter: counter,

    uniform: uniform
};
