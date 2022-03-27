function divisor(number){
  let returnDivisor = "";
  let divisorCount = number;
// concat(`1-${addDivisor}`);
// 1から出力したいから29から１に向けて再帰関数を組む
  return divisorHelper(number, divisorCount, returnDivisor);
}

function divisorHelper (number, count, returnString){
  if (count <= 1) {
      return returnString.concat(`${number}`);
  } else if (number % count === 0) {
      let addDivisor = number / count;
      returnString = returnString.concat(`${addDivisor}-`);
      return divisorHelper(number, count - 1, returnString);
  } else {
      return divisorHelper(number, count - 1, returnString);
  };
};