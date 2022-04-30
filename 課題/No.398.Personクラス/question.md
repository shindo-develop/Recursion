# Personクラス
## very easy
```
与えられたユーザー名に基づいて、そのイニシャルをアプリ内で表示させるように実装指示が出ました。以下に従って、Person クラスを作成し、テストケースを出力してください。

String firstName	ユーザーの名
String lastName	ユーザーの姓
String getFullName()	ユーザーのフルネームを返します。
String getInitial()	ユーザーのイニシャルを返します。
```
```
テストケース

mike = new Person("Michael", "Johnson")
mike.getFullName() --> Michael Johnson
mike.getInitial() --> M.J


carly = new Person("Carly", "Angelo")
carly.getFullName() --> Carly Angelo
carly.getInitial() --> C.A


jessie = new Person("Jessie", "Raelynn")
jessie.getFullName() --> Jessie Raelynn
jessie.getInitial() --> J.R
```