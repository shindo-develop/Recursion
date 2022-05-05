class BankAccount{
  constructor(bankName, ownerName, savings){
      this.bankName = bankName;
      this.ownerName = ownerName;
      this.savings = savings;
  };

  depositMoney(depositAmount){
      if(this.savings <= 20000){
          const commission = 100;
          this.savings = this.savings + depositAmount - commission;
          return this.savings;
      }else{
          this.savings += depositAmount;
          return this.savings;
      };
  };

  withdrawMoney(withdrawAmount){
      if(withdrawAmount < this.savings * 0.2){
          this.savings = Math.floor(this.savings - withdrawAmount);
          return this.savings;
      }else{
          this.savings -= Math.floor(this.savings * 0.2);
          return this.savings;
      };
  };

  pastime(days){
      return this.savings + (days * 0.25);
  };
}

user1 = new BankAccount("Chase", "Claire Simmmons", 30000)
console.log(user1.withdrawMoney(2000));
console.log(user1.depositMoney(10000));
console.log(user1.pastime(93));

user2 = new BankAccount("Bank Of America", "Remy Clay", 10000)
console.log(user2.withdrawMoney(5000));
console.log(user2.depositMoney(12000));
console.log(user2.pastime(505));