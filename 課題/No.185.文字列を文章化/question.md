# 文字列を文章化
## easy
```
Adam は自動で文章を単語ごとに区切るシステムを開発しています。空白がない文章 alphabet が与えられるので、単語ごとに区切る divideByWords という関数を作成してください。以下の条件に従ってください。
- 大文字の前を単語の区切りとしてください。
- 単語間にはスペースを挿入してください。
- 先頭以外は小文字に直してください。
```
```
関数の入出力例
入力のデータ型： string alphabet
出力のデータ型： string

divideByWords("HelloNiceToMeetYou") --> Hello nice to meet you
divideByWords("neverGiveUp") --> never give up
divideByWords("HaveYOUHeard?") --> Have y o u heard?
```