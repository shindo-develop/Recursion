# 電卓
## very easy
```
Haslip は家計簿アプリを作成しており、電卓機能を実装することになりました。1 つ目の入力値 op1、2 つ目の入力値 op2、演算子 operator が与えられるので、2 つの入力値に演算子を作用させた時の処理を返す関数 calculator を作成してください。ただし、0 で割る場合は op1 を返すようにしてください。
```
```
関数の入出力例
入力のデータ型： string op1, string op2, char operatorChar
出力のデータ型： double-float

calculator("3","7",'+') --> 10
calculator("3","7",'-') --> -4
calculator("3","7",'*') --> 21
calculator("3","7",'/') --> 0.42857
calculator("3","0",'+') --> 3
calculator("3","0",'-') --> 3
calculator("3","0",'*') --> 0
calculator("3","0",'/') --> 3
```
