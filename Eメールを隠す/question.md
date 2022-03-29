# Eメールを隠す
## easy
    入力された E メールアドレスの 4 文字目から @ までを「...」で隠して表示する、hideAddress という関数を作成してください。@ の前が 4 文字以下の場合は、与えられたメールアドレスをそのまま返してください。
```
関数の入出力例
入力のデータ型： string address
出力のデータ型： string

hideAddress("recursion@info.com") --> rec...@info.com
hideAddress("bird@gmail.com") --> bird@gmail.com
hideAddress("apple@example.com") --> app...@example.com
```