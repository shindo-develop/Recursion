# Dogクラス
## easy
```
開発中のアプリケーション内で犬をデータとして表すことにしました。以下に従って、Dog クラスを作成し、テストケースを出力してください。

String name	犬の種類の名前
int size	犬のサイズ
int age	犬の年齢
String bark()	犬の鳴き声を文字列として返します。犬のサイズが 50 以上の時、Wooof! Woof!、サイズが 20 以上の時、Ruff! Ruff!、それ以外の時は、Yip! Yip! と返します。
int calcHumanAge()	犬の年齢から人間の年齢に換算します。人間の年齢＝ 12 +（犬の年齢 - 1）× 7 を使用してください。
```
```
テストケース
goldenRetriever = new Dog("Golden Retriever", 60, 10)
goldenRetriever.bark() --> Wooof! Woof!
goldenRetriever.calcHumanAge() --> 75

siberianHusky = new Dog("Siberian Husky", 55, 6)
siberianHusky.bark() --> Wooof! Woof!
siberianHusky.calcHumanAge() --> 47

poodle = new Dog("poodle", 10, 1)
poodle.bark() --> Yip! Yip!
poodle.calcHumanAge() --> 12

shibaInu = new Dog("shibaInu", 35, 4)
shibaInu.bark() --> Ruff! Ruff!
shibaInu.calcHumanAge() --> 33
```