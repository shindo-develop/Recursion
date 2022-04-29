class Calorie{
  static exerciseObjects = {
      "running": 8,
      "walking": 3,
      "tennis": 5,
      "rope jump": 9,
  };

  static CALORIES_NEEDED_TO_BURN = 7700;

  constructor(weight, exercise){
      this.weight   = weight;
      this.exercise = exercise;
  };

  // 1分あたりの消費カロリーを返す
  getCaloriesBurned(){
      return Calorie.exerciseObjects[this.exercise] * 3.5 * this.weight / 200;
  };

  // 1kg 体重が減るまでに何時間かかるのか
  getRequiredCalories(){
      const caloriesBurned = this.getCaloriesBurned();
      const caloriesBurnedOfMinute = Math.floor((Calorie.CALORIES_NEEDED_TO_BURN / caloriesBurned) * 10) / 10;
      return Math.floor((caloriesBurnedOfMinute / 60) * 10) / 10; 
  };
}

function hoursToLose1KgByExercise(exercise){
  // 関数を完成させてください
  const carly = new Calorie(85.5, exercise);
  return carly.getRequiredCalories();
}