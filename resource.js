'use strict';
var fs = require('fs');

// minからmaxまでの整数を返す。
function range(min, max, step) {
    var s = step === undefined ? 1 : step;

    var arr = new Array();

    for(var i = min; i <= max; i+=s) {
	arr.push(i);
    }
    return arr;
}

// ファイルから取得
function fromFile(path) {
    return fs.readFileSync(path, 'utf8')
	     .split(/\r?\n/)
	     .filter(function(t){ return t !== '' });
}


module.exports = {
    range: range,
    fromFile: fromFile,
};
