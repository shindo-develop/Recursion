class Product{
  constructor(title, price){
      this.title = title;
      this.price = price;
  };
}

class InvoiceItem{
  constructor(product, quantity){
      this.product = product;
      this.quantity = quantity;
      this.next = null;
  };

  getTotalPrice(){
      return this.product.price * this.quantity;
  };
}

class Invoice{
  constructor(invoiceNumber, invoiceItemHead){
      this.invoiceNumber = invoiceNumber;
      this.invoiceItemHead = invoiceItemHead;
  };

  amountDue(taxes){
      // for文でlistの合計金額を出し、引数によって税込み、税抜きを返す。
      // 消費税は10%とする
      const tax = 1.1;
      let sumPrice = 0;
      let invoiceItemObject = this.invoiceItemHead;
      while(invoiceItemObject !== null){
          sumPrice = sumPrice + invoiceItemObject.getTotalPrice();
          invoiceItemObject = invoiceItemObject.next;
      };
      if(taxes)return sumPrice * tax;
      return sumPrice;
  };
}

product1 = new Product ("shampoo", 10)
product2 = new Product ("conditioner", 5)
product3 = new Product ("tooth brush", 3)

firstItem = new InvoiceItem(product1, 7)
secondItem = new InvoiceItem(product2, 9)
thirdItem = new InvoiceItem(product3, 10)

firstItem.next = secondItem
secondItem.next = thirdItem

invoice = new Invoice ("UC1234567890", firstItem)

console.log(invoice.amountDue(false));
console.log(invoice.amountDue(true));