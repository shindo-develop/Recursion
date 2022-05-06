# Invoiceクラス
## medium
```
問題 404 で 以下の Product クラスを作成しました。

String title	製品名
double price	製品の価格（ドル）
問題 405 で 以下の InvoiceItem クラスを作成しました。

int quantity	購入する製品の数
Product product	製品オブジェクト
InvoiceItem next	請求書の次の項目
double getTotalPrice()	購入する数量に基づいて、製品の合計価格を計算します。
あなたのチームは、開発したソフトウェアのすべての Q&A チェックに合格し、リリースの準備が整いました。支払いシステムを追加したので、顧客の請求書の発行システムを開発する必要があります。以下に従って、Invoice クラスを作成し、テストケースを出力してください。

String invoiceNumber	請求書番号
InvoiceItem invoiceItemHead	購入したアイテムのリストの開始（連結リストの先頭）を表す InvoiceItem
double amountDue(bool taxes)	請求書の支払総額を計算します。InvoiceItemHead から始まるすべてのリスト項目を反復処理し、数量も考慮して計算する必要があります。入力が true に設定されている場合は、合計金額に、消費税分の 10% を加算してください。
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

invoice = new Invoice ("UC1234567890", firstItem)

invoice.amountDue(false) --> 145
invoice.amountDue(true) --> 159.5
```