# ランニング
## medium
```
Karen の初期地点 x1、Michael の初期地点 x2、Karen の速さ v1、Michael の速さ v2 が与えられるので、時間が経った時に 2 人が同じ位置にいることができるかどうか判定する、isSameLocation という関数を作成してください。ただし時間は整数のみで 4.7 秒というような小数は考えないものとしてください。以下の例を参考にしてください。

例えば、Karen の初期地点：3m、速さ 5m / 秒、Michael の初期地点：7m、速さ 2m / 秒としましょう。1 秒ごとの流れは以下のようになります。
1 秒後 -> Karen の位置：8m 、Michael の位置：9m
2 秒後 -> Karen の位置：13m、Michael の位置：11m
3 秒後 -> Karen の位置：18m、Michael の位置：13m
この例では Karen のスピードが Michael より速いので、どれだけ時間が経過しても 2 人が同じ位置にいることはできません。
```
```
関数の入出力例
入力のデータ型： integer x1, integer v1, integer x2, integer v2
出力のデータ型： bool

isSameLocation(0,0,0,0) --> true
isSameLocation(0,3,5,2) --> true
isSameLocation(0,2,8,2) --> false
isSameLocation(0,2,8,3) --> false
isSameLocation(0,5,1000,3) --> true
isSameLocation(0,5,1000,2) --> false
isSameLocation(14,4,98,2) --> true
isSameLocation(42,3,94,2) --> true
isSameLocation(43,5,49,3) --> true
isSameLocation(3,2,0,3) --> true
isSameLocation(9,2,9,7) --> true
```