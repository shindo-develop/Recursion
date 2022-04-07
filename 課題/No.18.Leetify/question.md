# Leetify
## medium
```
主に英語圏においてインターネット上で使われるアルファベットの表記法として Leet と呼ばれるものがあります。これは一部のアルファベットを、一定の規則に基づき形の似た数字や記号などに置き換える表記法です。Leet は単純に遊び心で使われる他、当局や著作権関連機関または初心者などの検索を回避する目的で使われることがありました。ここでは、ある文字列 string が渡されるので、それを Leet で書き換える leetify という関数を作成してください。ただし変換するのは以下の文字が入力された際のみに限ります。

- a/A = 4
- b/B = 8
- e/E = 3
- l/L = 1
- o/O = 0
- s/S = 5
- t/T = 7
- z/Z = 2
```
```
関数の入出力例

入力のデータ型： string stringInput
出力のデータ型： string

leetify("leetcode") --> 1337c0d3
leetify("LEETCODE") --> 1337C0D3
leetify("LeeTCoDE") --> 1337C0D3
leetify("apple") --> 4pp13
leetify("APPLE") --> 4PP13
leetify("ApPlE") --> 4pP13
```
