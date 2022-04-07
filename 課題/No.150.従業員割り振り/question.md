# 従業員割り振り
## easy
    ある企業の経営者の Jacob は社員の ID をもとに、以下の図のように社員をグループ分けするつもりです。
     A   B   C   D   E
     1   2   3   4   5
    10   9   8   7   6
    11  12  13  14  15
    ID の num が与えられるので、その番号の社員がどのグループに所属しているかを返す、divideEmployees という関数を作成してください。
```
関数の入出力例
入力のデータ型： integer num

出力のデータ型： char
divideEmployees(1) --> A
divideEmployees(5) --> E
divideEmployees(6) --> E
divideEmployees(8) --> C
divideEmployees(31) --> A
divideEmployees(100) --> A
divideEmployees(105) --> E
```