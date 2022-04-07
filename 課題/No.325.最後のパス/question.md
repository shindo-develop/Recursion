# 最後のパス
## easy
```
文字列 url が与えられるので、slug を返す、getSlug という関数を作成してください。
```
```
関数の入出力例
入力のデータ型： string url
出力のデータ型： string

getSlug("recursionist.io/img") --> img
getSlug("recursionist.io/img/bear.png") --> bear.png
getSlug("http://recursionist.io/img/") --> img
getSlug("recursionist.io/img/bear.png") --> bear.png
getSlug("http://lemke.biz/dolores-vel-voluptate-quis-sapiente-beatae-quia.html") --> dolores-vel-voluptate-quis-sapiente-beatae-quia.html
```