function countSubstring(string){
  if(string.length <= 1)return string.length;
  const count = 0;
  const checkCounts = 0;
  return countSubstringHelper(string, count, checkCounts);
}

function countSubstringHelper(s, count, checkCounts){
  if(checkCounts >= s.length)return count;
  for(let i = checkCounts; i < s.length; i++){
      if(s[checkCounts] === s[i])count += 1; 
  };
  return countSubstringHelper(s, count, checkCounts + 1);
}