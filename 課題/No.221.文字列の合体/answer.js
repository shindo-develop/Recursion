function mergeString(s1,s2){
  // 関数を完成させてください
  let mergeStringArray = [];
  for(let i = 0; i < s1.length; i++){
      mergeStringArray.push(s1[i]);
      mergeStringArray.push(s2[i]);
  };
  return mergeStringArray.join("");
}