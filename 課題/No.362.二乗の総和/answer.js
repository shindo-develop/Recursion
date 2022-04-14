function squareSummation(n){
  // 関数を完成させてください
  let total = 0;
  for(let i = 1; i <= n; i++){
      total = total + i ** 2;
  };
  return total;
}