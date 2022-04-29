class Calorie{
  static exerciseObjects = {
      "running": 8,
      "walking": 3,
      "tennis": 5,
      "rope jump": 9,
  };

  static REQUIRED_CALORIES = 7700;

  constructor(weight, exercise, minutes){
      this.weight = weight;
      this.exercise = exercise;
      this.minutes = minutes;
  };

  getFloor(digits){
      return Math.floor(digits * 10) / 10;
  }

  getResultWeight(){
      const calorieBurned = Calorie.exerciseObjects[this.exercise] * 3.5 * this.weight / 200 * this.minutes;
      const weightLoss = calorieBurned / Calorie.REQUIRED_CALORIES;
      return Math.floor((this.weight - weightLoss) * 10) / 10;
  };
}

function calcWeightByExercise(exercise,minutes){
  const carly = new Calorie(85.5, exercise, minutes);
  return carly.getResultWeight();
}