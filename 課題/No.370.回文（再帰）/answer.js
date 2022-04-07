function recursiveIsPalindromeHelper(string, rightIndex, leftIndex){
  const centerIndexFlag = (string.length / 2) === rightIndex;
  if(centerIndexFlag)return true;
  const centerOfOddStringFlag = rightIndex === leftIndex;
  if(centerOfOddStringFlag)return true;
  const palindromeFlag = string[rightIndex] !== string[leftIndex];
  if(palindromeFlag)return false;
  const carryOverRightIndex = rightIndex + 1;
  const carryOverLeftIndex = leftIndex - 1;
  return recursiveIsPalindromeHelper(string, carryOverRightIndex, carryOverLeftIndex);
}

function recursiveIsPalindrome(s){
  const processedString = s.split(/\s/).join("").toLowerCase();
  const rightIndex = 0;
  const leftIndex = processedString.length - 1;
  return recursiveIsPalindromeHelper(processedString, rightIndex, leftIndex);
}