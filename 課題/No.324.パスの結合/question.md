# パスの結合
## easy
```
2 つのパス path1、path2 を受け取り、それらを結合する、twoPaths という関数を作成してください。
```
```
関数の入出力例
入力のデータ型： string path1, string path2
出力のデータ型： string

twoPaths("path1","path2") --> path1/path2
twoPaths("path1/","path2") --> path1/path2
twoPaths("path1","/path2") --> path1/path2
twoPaths("path1/","/path2") --> path1/path2
twoPaths("et","/quisquam") --> et/quisquam
twoPaths("nam/","/recusandae") --> nam/recusandae
twoPaths("expedita/","non") --> expedita/non
twoPaths("pariatur","/dolor") --> pariatur/dolor
```