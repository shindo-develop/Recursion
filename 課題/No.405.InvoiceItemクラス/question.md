# Invoice Itemクラス
## medium
```
問題 404 で 以下の Product クラスを作成しました。

String title	製品名
double price	製品の価格（ドル）
Product をまとめて購入し、請求書に入れるため、請求書 1 つ 1 つの項目が必要になります。以下に従って、InvoiceItem クラスを作成し、テストケースを出力してください。

Product product	製品オブジェクト
int quantity	購入する製品の数
InvoiceItem next	請求書の次の項目
double getTotalPrice()	購入する数量に基づいて、製品の合計価格を計算します。
```
```
テストケース

product1 = new Product ("shampoo", 10)
product2 = new Product ("conditioner", 5)
product3 = new Product ("tooth brush", 3)

firstItem = new InvoiceItem(product1, 7)
secondItem = new InvoiceItem(product2, 9)
thirdItem = new InvoiceItem(product3, 10)

firstItem.next = secondItem
secondItem.next = thirdItem

firstItem.getTotalPrice() --> 70
secondItem.getTotalPrice() --> 45
firstItem.next.getTotalPrice() --> 45
firstItem.next.next.getTotalPrice() --> 30
firstItem.next.product.price --> 5
firstItem.next.next.product.title --> tooth brush
```