


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

// 配列から順番に値を出力
function pop(array) {
    var cnt = 0;
    var len = array.length;

    return function() {
	if (cnt >= len) {
	    cnt = 0;
	}
	var val = array[cnt];
	cnt++;
	return val; 
    }
}


//times回だけ、fを実行
function loopTimes(times, f) {
    var arr = new Array();

    for(var i = 1; i <= times; i++) {
	arr.push(f(i));
    }
    return arr;
}

//arrayの個数分だけ、fを実行
function loopArray(array, f) {
    var arr = new Array();

    array.forEach(function(item) {
	arr.push(f(item));
    });
    return arr;
}

module.exports = {

    random: random,
    counter: counter,
    pop: pop,

    loopTimes: loopTimes,
    loopArray: loopArray,

    uniform: uniform
};
