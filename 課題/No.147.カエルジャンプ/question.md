# カエルジャンプ
## easy
```
Blade はカエルをコマとしたすごろくゲームの開発で、葉っぱ（＝マス）が円形で一つなぎになっているステージを作成しています。ステージ上のカエルはルーレットの数字分だけ移動します（マイナス方向の時もあります）。葉っぱの数 leaves とルーレットの値 jumps、現在位置 start が与えられるので、ルーレットの数値分移動した後のカエルの位置を返す関数 frogPosition を作成してください。
```

```
関数の入出力例
入力のデータ型： integer leaves, integer jumps, integer start
出力のデータ型： integer

frogPosition(4,3,1) --> 4
frogPosition(4,6,2) --> 4
frogPosition(4,-3,1) --> 2
frogPosition(4,-5,1) --> 4
frogPosition(4,7,1) --> 4
frogPosition(4,7,2) --> 1
frogPosition(11,25,11) --> 3
frogPosition(23,-90,1) --> 3
frogPosition(9,-4,3) --> 8
frogPosition(105,-3,8) --> 5
```