function splitAndAdd(digits){
  const NUMBER_OF_ADJUSTMENTS = 10;
  let count = 0;
  let checkOfDigits = String(digits).length;
  let numberToDivide = 10 ** checkOfDigits;
  while(checkOfDigits >= 0){
      count = count + Math.floor(digits / numberToDivide) % NUMBER_OF_ADJUSTMENTS;
      numberToDivide /= 10;
      checkOfDigits--;
  };
  return count;
}

// 再帰
function splitAndAdd(digits){
  if ((digits / 10) < 1){
  // ベースケース
      return digits;
  } else {
  // 再帰部分
      return splitAndAdd(Math.floor(digits / 10)) + (digits % 10);
  };
}