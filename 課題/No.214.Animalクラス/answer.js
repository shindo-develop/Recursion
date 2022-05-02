class Animal{
  static activityMultiplier = 1.2;

  constructor(name, weightKg, heightM, isPredator, speedKph){
      this.name = name;
      this.weightKg = weightKg;
      this.heightM = heightM;
      this.isPredator = isPredator;
      this.speedKph = speedKph;
  };

  getBmi(){
      return Math.floor((this.weightKg / (this.heightM ** 2)) * 100) / 100;
  };

  getDailyCalories(){
      const burnRequiredCalories = 70 * (this.weightKg ** 0.75)
      return Math.floor((burnRequiredCalories * Animal.activityMultiplier) * 100) / 100;
  };

  isDangerous(){
      return this.isPredator || this.heightM >= 1.7 || this.speedKph >= 35;
  };
}

rabbit = new Animal("rabbit", 10, 0.3, false, 20)
console.log(rabbit.getBmi())
console.log(rabbit.isDangerous())

snake = new Animal("snake", 30, 1, true, 30)
console.log(snake.isDangerous())
console.log(snake.getDailyCalories())

elephant = new Animal("elephant", 300, 3, false, 5)
console.log(elephant.getBmi())
console.log(elephant.getDailyCalories())

gazelle = new Animal("gazelle", 50, 1.5, false, 100)
console.log(gazelle.getDailyCalories())
console.log(gazelle.isDangerous())