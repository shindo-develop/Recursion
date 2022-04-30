class Person{
  // ここからクラス記述してください
  constructor(firstName, lastName){
     this.firstName = firstName,
     this.lastName = lastName
  };

  getFullName(){
     return `${this.firstName} ${this.lastName}`;
  };

  getInitial(){
     return `${this.firstName[0]}.${this.lastName[0]}`;
  };
}

let mike = new Person("Michael", "Johnson");
console.log(mike.getFullName());
console.log(mike.getInitial());

let carly = new Person("Carly", "Angelo");
console.log(carly.getFullName());
console.log(carly.getInitial());

let jessie = new Person("Jessie", "Raelynn");
console.log(jessie.getFullName());
console.log(jessie.getInitial());