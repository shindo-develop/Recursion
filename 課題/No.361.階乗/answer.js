function factorial(n){
  // 関数を完成させてください
  let total = 1;
  for(let i = 1; i <= n; i++){
      total *= i;
  };
  return total;
}

// while版
function factorial(n){
  let total = 1;
  while(n > 0){
      total *= n;
      n--;
  };
  return total;
}