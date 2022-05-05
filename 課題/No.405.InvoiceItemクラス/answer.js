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

product1 = new Product ("shampoo", 10)
product2 = new Product ("conditioner", 5)
product3 = new Product ("tooth brush", 3)

firstItem = new InvoiceItem(product1, 7)
secondItem = new InvoiceItem(product2, 9)
thirdItem = new InvoiceItem(product3, 10)

firstItem.next = secondItem
secondItem.next = thirdItem

console.log(firstItem.getTotalPrice());
console.log(secondItem.getTotalPrice());
console.log(firstItem.next.getTotalPrice());
console.log(firstItem.next.next.getTotalPrice());
console.log(firstItem.next.product.price);
console.log(firstItem.next.next.product.title);