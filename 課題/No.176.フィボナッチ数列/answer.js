function fibonacciHelper(fn1, fn2, count){
  if(count < 1)return fn1;
  return fibonacciHelper(fn2, fn1 + fn2, count - 1);
}

function fibonacci(n){
  return fibonacciHelper(0, 1, n);
}