# JavaScriptのコメント
## medium
```
Jordan は、JavaScript の一部の機能として、入力されるコメントアウトが有効かどうかチェックするプログラムの作成を任されました。文字列 s が与えられるので、それが有効かどうかチェックする関数、isCommentOutValid という関数を作成してください。コメントアウトが有効になる条件は以下の通りです。

- 「/」「/」のセット「//」でコメントアウトを表す。

- 「/*」を使う場合は、直後に「*/」が置かれなければいけない。

- 文字列内の全てのコメントアウトが有効でなければならない。
```
```
関数の入出力例
入力のデータ型： string s
出力のデータ型： bool

isCommentOutValid("//") --> true
isCommentOutValid("///") --> false
isCommentOutValid("////") --> true
isCommentOutValid("/**/") --> true
isCommentOutValid("/*/*/") --> false
isCommentOutValid("/*//*/") --> false
isCommentOutValid("/**//////**/") --> true
isCommentOutValid("//////////////**") --> false
isCommentOutValid("//**////**/") --> false
```