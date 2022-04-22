再帰
function fibonacciHelper(fn1, fn2, count){
    if(count < 1)return fn1;
    return fibonacciHelper(fn2, fn1 + fn2, count - 1);
}

function fibonacci(n){
    return fibonacciHelper(0, 1, n);
}

// -------------------------------------------------------------------

for文版
function fibonacci(n){
    let fn1 = 0;
    let fn2 = 1;
    for(let i = 0; i < n; i++){
        let preFn1 = fn1
        fn1 = fn2;
        fn2 = preFn1 + fn2;
    }
    return fn1;
}

// -------------------------------------------------------------

// while文版
function fibonacci(n){
  let fn1 = 0;
  let fn2 = 1;
  while(n >= 1){
      let preFn1 = fn1;
      fn1 = fn2;
      fn2 = preFn1 + fn2;
      n--;
  };
  return fn1;
}