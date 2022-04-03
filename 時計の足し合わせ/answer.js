function sumOfDigits(minute){
  // hourに直す
  const HALF_DAY_HOURS = 12;
  const hour = (Math.floor(minute / 60) % HALF_DAY_HOURS).toFixed(0);
  const digitsHour = hour.padStart(2, '0');
  const digitsMinute = (minute % 60).toString(10).padStart(2, '0');

  const oneDigitOfdigitsHour = Number(digitsHour[0]);
  const twoDigitOfdigitsHour = Number(digitsHour[1]);
  const oneDigitOfdigitsMinute = Number(digitsMinute[0]);
  const twoDigitOfdigitsMinute = Number(digitsMinute[1]);

  return oneDigitOfdigitsHour + twoDigitOfdigitsHour + oneDigitOfdigitsMinute + twoDigitOfdigitsMinute;
}