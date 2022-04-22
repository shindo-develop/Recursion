// for文版
function recursiveDigitsAdded(digits){
  if(digits < 10)return digits;
  return recursiveDigitsAddedHelper(digits, 0);
}

function recursiveDigitsAddedHelper(digits, total){
  if(digits < 10)return total;
  const digitsString = String(digits);
  let carryOverDigits = 0;
  for(let i = 0; i < digitsString.length; i++){
      carryOverDigits = carryOverDigits + Number(digitsString[i]);
  };
  return recursiveDigitsAddedHelper(carryOverDigits, carryOverDigits + total);
}

//-------------------------------------------------------------------------------------- 

// while文版
function recursiveDigitsAdded(digits){
  if(digits < 10)return digits;
  const totalCount = 0;
  return recursiveDigitsAddedHelper(digits, totalCount);
}

function recursiveDigitsAddedHelper(digits, totalCount){
  if(digits < 10)return totalCount;
  const NUMBER_OF_ADJUSTMENTS = 10;
  let count = 0;
  let checkOfDigits = String(digits).length;
  let numberToDivide = 10 ** checkOfDigits;
  while(checkOfDigits >= 0){
      count = count + Math.floor(digits / numberToDivide) % NUMBER_OF_ADJUSTMENTS;
      numberToDivide /= 10;
      checkOfDigits--;
  };
  totalCount = count + totalCount;
  return recursiveDigitsAddedHelper(count, totalCount);
}