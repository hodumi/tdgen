module.exports = function(gen, res) {
    return {	 
        id: gen.counter(1), // 自動インクリメント(start, step=1)
            name: gen.random(res.fromFile("name.txt")),// ファイル内の行からランダム出力
            age: gen.random(res.range(10, 20)), // 範囲からランダム(min, max, step=1)
            note: "test test test" // 固定値
    };
};


