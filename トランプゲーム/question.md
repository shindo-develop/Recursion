# トランプゲーム
## easy
    あなたはトランプゲーム、大富豪を Bob と play していて、今お互いの手札が 1 枚ずつという局面になりました。相手のカード hisCard が与えられるので、あなたの手持ちのカード 10 と比較して勝利を判定してくれる、whoIsWinner という関数を作成してください。今回ジョーカーは存在しないものとします。
    引き分けの場合、draw と出力されます。
    あなたが勝った場合、you win と出力されます。
    あなたが負けた場合、you lose と出力されます。

```
関数の入出力例
入力のデータ型： integer hisCard

出力のデータ型： string
whoIsWinner(1) --> you lose
whoIsWinner(2) --> you lose
whoIsWinner(3) --> you win
whoIsWinner(9) --> you win
whoIsWinner(10) --> draw
whoIsWinner(11) --> you lose
```