function factorial(n){
  // 関数を完成させてください
  let total = 1;
  for(let i = 1; i <= n; i++){
      total *= i;
  };
  return total;
}