# 二次方程式の解
## easy
    天才 Ian 君は学校の課題として出された、二次方程式の解の種類を判別するクイズをプログラムを使って自動的に解く方法を思いつきました。二次方程式 ax2 + bx + c = 0 の各係数である整数 a, b, c が与えられるので、以下の条件の整数を返す、quadraticEquationAnswer という関数を作成してください。
    二次の係数が 0 のとき、0 を返してください。
    重解を持つとき、1 を返してください。
    実数解を 2 つ持つとき、2 を返してください。
    虚数解を 2 つ持つとき、-2 を返してください。

```
関数の入出力例

入力のデータ型： integer a, integer b, integer c
出力のデータ型： integer

quadraticEquation(0,3,2) --> 0
quadraticEquation(0,4,5) --> 0
quadraticEquation(5,10,5) --> 1
quadraticEquation(4,10,8) --> -2
quadraticEquation(4,13,5) --> 2
quadraticEquation(1,6,9) --> 1
quadraticEquation(1,-8,12) --> 2
quadraticEquation(1,2,5) --> -2
```