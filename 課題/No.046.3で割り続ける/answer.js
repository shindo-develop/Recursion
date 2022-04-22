function divideBy3Count(n){
  // 関数を完成させてください
  let count = 0;
  while(n >= 3){
      count++;
      n = n / 3;
  };
  return count;
}