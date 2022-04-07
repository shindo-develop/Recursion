# カラーコードのチェック
## medium
```
Jordan は、CSS の一部の機能として、入力されるカラーコードが有効かどうかチェックするプログラムの作成を任されました。文字列 colorCode が与えられるので、それが有効かどうかチェックする関数、isValid という関数を作成してください。カラーコードが有効になる条件は以下の通りです。
- # で始まる。
- # 以外は 6 文字。
- 6 文字はアルファベットおよび数字のみでされる。
- アルファベットは A-F、a-f のみ。
```
```
関数の入出力例
入力のデータ型： string colorCode
出力のデータ型： bool

isValid("#9E348B") --> true
isValid("#9E348B0") --> false
isValid("#9E348Z") --> false
isValid("#9K3489") --> false
isValid("#9G348B") --> false
isValid("#63 482") --> false
isValid("#6390%2") --> false
isValid("#63#0E2") --> false
isValid("#ABCDEF") --> true
```