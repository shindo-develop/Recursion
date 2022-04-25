function isPalindrome(stringInput){
  const compareString = stringInput.split(" ").join("").toLowerCase();
  let compareFlag = true;
  let compareIndex = 0;
  let compareReverseIndex = compareString.length - 1;
  while(compareIndex < compareString.length){
      compareFlag = compareString[compareIndex] === compareString[compareReverseIndex];
      compareIndex++;
      compareReverseIndex--;
      if(!(compareFlag))compareIndex = compareString.length;
  };
  return compareFlag;
}