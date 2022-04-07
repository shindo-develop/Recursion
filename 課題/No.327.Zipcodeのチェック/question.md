# Zipcodeのチェック
## easy
```
アメリカ合衆国では郵便番号として Zipcode が使われています。文字列 zipcode が与えられるので、それが有効かどうか確かめる、isZipcodeValid という関数を作成してください。 有効な Zipcode の条件は以下になります。

- 5 桁であること
- 空白を含まないこと
- 文字を含まないこと
```
```
関数の入出力例
入力のデータ型： string zipcode
出力のデータ型： bool

isZipcodeValid("92039") --> true
isZipcodeValid("91373") --> true
isZipcodeValid("913734") --> false
isZipcodeValid("91 73") --> false
isZipcodeValid("913#3") --> false
isZipcodeValid("9L373") --> false
isZipcodeValid("aa373") --> false

isZipcodeValid("57760-9396") --> false
```