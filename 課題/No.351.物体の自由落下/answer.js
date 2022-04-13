function fallingDistance(planet,time){
  // 関数を完成させてください
  let gravitationalAcceleration;
  switch(planet){
      case 'Earth' :
          gravitationalAcceleration = 9.8;
          return fallMileCalculation(gravitationalAcceleration, time);
          break;
      case 'Jupiter' :
          gravitationalAcceleration = 24.79;
          return fallMileCalculation(gravitationalAcceleration, time);
          break;
      case 'Mercury' :
          gravitationalAcceleration = 3.7;
          return fallMileCalculation(gravitationalAcceleration, time);
          break;
      default :
          return 0;
  }
}

function fallMileCalculation(gravity, time){
  const ONE_MILE = 0.000621371;
  meter = 0.5 * gravity * (time ** 2);
  console.log(meter);
  mile = Math.floor(meter * ONE_MILE);
  console.log(mile);
  return mile;
}