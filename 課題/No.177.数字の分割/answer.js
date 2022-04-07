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