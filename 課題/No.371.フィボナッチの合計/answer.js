function fibonacciTotalHelper(fn1, fn2, n, total){
  if(n < 1)return total + fn1;
  return fibonacciTotalHelper(fn2, fn1 + fn2, n - 1, total + fn1);
}

function fibonacciTotal(n){
  return fibonacciTotalHelper(0, 1, n, 0);
}