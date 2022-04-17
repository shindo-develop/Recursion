function countBetweenNumbers(digit,idStart,idEnd){
  let count = 0;
  const matchDigit = RegExp(digit);
  for(let i = idStart; i <= idEnd; i++){
      let iString = String(i);
      for(let j = 0; j < iString.length; j++){
          if(matchDigit.test(iString[j]))count += 1;
      }
  }
  return count;
}