# tdgen --- Test Data Generator(仮)
mustacheのテンプレートファイルから、テストデータを作成するツール

## TODO
- [x] シェルコマンドとして実行可能とする。
- [ ] ランダム出力を一様分布以外の確率分布で出力できるようにする。(正規分布とか、指数分布とか)


## 使い方
以下の2つのファイルを作成する。

- data.js

```javascript
var gen = require('/path/to/test-data-generater/generater.js');
var res = require('/path/to/test-data-generater/resource.js');

module.exports = {
    id: gen.counter(1) // 自動インクリメント(start, step=1)
    name: gen.random(res.fromFile("resource/names.txt")),// ファイル内の行からランダム出力
    age: gen.random(res.range(10, 20)) // 範囲からランダム(min, max, step=1)
    note: "test test test" // 固定値
}
```


- template.sql

```sql
insert into user (id, name, age, score) values ( {{id}}, '{{name}}', {{age}}, '{{note}}' );
insert into user (id, name, age, score) values ( {{id}}, '{{name}}', {{age}}, '{{note}}' );
```

コマンドを実行する。

```shell
$ tdgen template.sql data.js
insert into user (id, name, age, score) values ( 1, 'John Doe', 15, 'test test test');
insert into user (id, name, age, score) values ( 2, 'Jane Doe', 13, 'test test test');
```

