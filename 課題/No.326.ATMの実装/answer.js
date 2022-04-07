function isPinValid(pin){
  // 関数を完成させてください
  const wordCount4Flag = pin.length === 4;
  const wordCount6Flag = pin.length === 6;
  const onlyNumber4Flag = /\d{4}/.test(pin);
  const onlyNumber6Flag = /\d{6}/.test(pin);
  if(wordCount4Flag){
      return wordCount4Flag && onlyNumber4Flag;
  }else if(wordCount6Flag){
      return wordCount6Flag && onlyNumber6Flag;
  }else{
      return false;
  };
}