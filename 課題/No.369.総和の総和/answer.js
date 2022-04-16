function summationOfSummation(n){
  // 関数を完成させてください
  let total = 0;
  for(let i = 1; i <= n; i++){
      let atSum = 0;
      for(let j = 1; j <= i; j++){
          atSum += j;
      }
      total += atSum;
  }
  return total;
}