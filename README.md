# tdgen --- Test Data Generator(仮)
テストデータを作成するツール

## TODO
- [ ] シェルコマンドとして実行可能とする。(現在コード内に直接かかれているため)
- [ ] ランダム出力を一様分布以外の確率分布で出力できるようにする。(正規分布とか、指数分布とか)


## 使い方(予定)
1. 以下の2つのファイルを作成する。

``` javascript:data.js
var gen = require('/path/to/test-data-generater/generater.js');
var res = require('/path/to/test-data-generater/resource.js');

module.exports = {
    id: counter(1) // 自動インクリメント(start, step=1)
    name: gen.random(res.fromFile("resource/names.txt")),// ファイル内の行からランダム出力
    age: gen.random(res.range(10, 20)) // 範囲からランダム(min, max, step=1)
    note: "test test test" // 固定値
}
```

``` sql:template.sql
insert into user (id, name, age, score) values ( {{id}}, '{{name}}', {{age}}, '{{note}}' );
insert into user (id, name, age, score) values ( {{id}}, '{{name}}', {{age}}, '{{note}}' );
```

2. コマンドを実行する。(未実装)

``` shell
$ tdgen --template template.sql --data data.js
```

3. 標準出力に出力される。

``` sql
insert into user (id, name, age, score) values ( 1, 'John Doe', 15, 'test test test');
insert into user (id, name, age, score) values ( 2, 'Jane Doe', 13, 'test test test');
```

