# パスワード判定
## medium
```
Lauren はアプリ開発のチームに所属され、新規登録のパスワードの実装を担当することになりました。パスワード password が与えられるので、それが正しいかフォーマットになっているかブーリアン値によって判定する、isValidPassword という関数を作成してください。パスワードの条件は以下の通りです。

- スペースがない
- 大文字と小文字を含む
- 数字を含む
- 文字列が 6 以上
```
```
関数の入出力例
入力のデータ型： string password
出力のデータ型： bool

isValidPassword("Aa 12E4") --> false
isValidPassword("abe12cd") --> false
isValidPassword("ABE12CD") --> false
isValidPassword("AaBbCcD") --> false
isValidPassword("Aa1") --> false
isValidPassword("AaBbcC23") --> true
isValidPassword("AaBbcC123") --> true
```