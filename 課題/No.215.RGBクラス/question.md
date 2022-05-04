# RGBクラス
##medium
```
開発中のアプリケーションで色を実装することになりました。色は一般的に RGB（Red-Green-Blue）カラーモデルを使って定義されます。RGB の各色は、0 から 255 までの数値で表されます。以下の構造に沿った、色の設計図を作成し、テストケースを出力してください。

int red	0 から 255 までの数値
int green	0 から 255 までの数値
int blue	0 から 255 までの数値
String getHexCode()	カラーコードを 16 進数（文字列）で返します。文字列の先頭には # をつけてください。
Striing getBits()	カラーコードを 2 進数で返します。取得した 16 進数を 2 進数へ変換してください。
String getColorShade()	赤、青、緑の中でどの色が濃いのかを文字列で返します。全ての色の強さが同じ場合、grayscale と返してください。
```
```
テストケース

color1 = new RGB(0, 153, 255)
color1.getHexCode() --> #0099ff
color1.getBits() --> 1001100111111111
color1.getColorShade() --> blue

color2 = new RGB(255, 153, 204)
color2.getHexCode() --> #ff99cc
color2.getBits() --> 111111111001100111001100
color2.getColorShade() --> red

color3 = new RGB(0, 87, 0)
color3.getHexCode() --> #005700
color3.getBits() --> 101011100000000
color3.getColorShade() --> green

gray = new RGB(123, 123, 123)
gray.getHexCode() --> #7b7b7b
gray.getBits() --> 11110110111101101111011
gray.getColorShade() --> grayscale
```