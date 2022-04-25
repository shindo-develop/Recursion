function intSquareRoot(n){
  // 関数を完成させてください
  let guessNumber = 1;
  let compareFlag = true;
  while(compareFlag){
      if((guessNumber + 1) ** 2 > n){
          compareFlag = false;
      }else if((guessNumber + 1) ** 2 === n){
          guessNumber++;
          compareFlag = false;
      }else{
          guessNumber++;
      };
  };
  return guessNumber;
}