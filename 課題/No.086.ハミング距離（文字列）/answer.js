function hammingDistanceInString(string1,string2){
  // 関数を完成させてください
  let notMatchStrings = [];
  for(let i = 0; i < string1.length; i++){
      if(string1[i] !== string2[i])notMatchStrings.push(string1[i]);
  };
  return notMatchStrings.length;
}