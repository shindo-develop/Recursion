// 車のガソリンが空になるまで何時間かかるか計算す
class Car {
  constructor(velocity,fuelEconomy,tankCapacity){
      this.velocity = velocity,
      this.fuelEconomy = fuelEconomy,
      this.tankCapacity = tankCapacity
  };
  // tankCapacityの走行距離を取得
  getMileage(){
      return this.fuelEconomy * this.tankCapacity;
  };
  // ガソリンの使い切る時間を取得
  getTime(){
      const ONE_HOUR_SECONDS = 3600;
      const useUpSecond = this.getMileage() / this.velocity;
      return Math.floor((useUpSecond / ONE_HOUR_SECONDS) * 10 ) / 10;
  };
}

function hoursToEmpty(velocity,fuelEconomy,tankCapacity){
  // 関数を完成させてください
  const leoCar = new Car(velocity, fuelEconomy, tankCapacity);
  return leoCar.getTime();
}