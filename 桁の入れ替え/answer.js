function isSwapBigger(n){
  // 関数を完成させてください
  const numberString = String(n);
  const swapNumberStringIndex0 = numberString[1];
  const swapNumberStringIndex1 = numberString[0];
  const swapNumberString = `${swapNumberStringIndex0}${swapNumberStringIndex1}`;
  const swapNumber = Number(swapNumberString);
  return n <= swapNumber;
}