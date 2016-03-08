# tdgen --- Test Data Generator(仮)
mustacheを利用したファイルの自動作成ツールです。  

汎用性や自由度を優先したため、テストデータやキャラクターシート等

## TODO
- [x] シェルコマンドとして実行可能とする。
- [ ] ランダム出力を一様分布以外の確率分布で出力できるようにする。(正規分布とか、指数分布とか)

## インストール方法
1. [Node.js公式](https://nodejs.org/en/)もしくは、[nvm](https://github.com/creationix/nvm)や[Nodist](https://github.com/marcelklehr/nodist)を利用してNode.jsをインストールする。
2. `npm install -g github:hodumi/tdgen` を実行する。

## 使い方
1. 任意のフォルダに移動する。

``` shell
$ cd /path/to/folder/
```

2. 初期化コマンドを実行する。

``` shell
$ tdgen init
```

3. 以下の2つのファイルを編集する。
- data.js(データ定義ファイル)

```javascript
module.exports = function(gen, res) {
    return {
        id: gen.counter(1) // 自動インクリメント(start, step=1)
        name: gen.random(res.fromFile("resource/names.txt")),// ファイル内の行からランダム出力
        age: gen.random(res.range(10, 20)) // 範囲からランダム(min, max, step=1)
        note: "test test test" // 固定値
	};
}
```

- format.sql(ファイルフォーマット定義ファイル)

```sql
insert into user (id, name, age, score) values ( {{id}}, '{{name}}', {{age}}, '{{note}}' );
```

4. コマンドを実行すると、標準出力に出力される。なお、コマンドの末尾に数字を入力すると、その回数分繰り返し実行する。

```shell
$ tdgen make template.sql data.js 2
insert into user (id, name, age, score) values ( 1, 'John Doe', 15, 'test test test');
insert into user (id, name, age, score) values ( 2, 'Jane Doe', 13, 'test test test');
```

