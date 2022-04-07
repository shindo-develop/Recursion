function getCentury(year){
  // 関数を完成させてください
  const centuryJustFlag = year % 100 === 0;
  let centuryCount = 0;
  if(centuryJustFlag){
      centuryCount = Math.floor(year / 100);
  }else{
      centuryCount = Math.floor(year / 100) + 1;
  };
  const century11To19Flag = 11 <= centuryCount && centuryCount <= 19;
  if(century11To19Flag)return `${centuryCount}th century`;
  const centuryCountString = String(centuryCount);
  const centuryCount1DigitsString = centuryCountString[centuryCountString.length - 1];
  const centuryTailArray = {
      st: "1",
      nd: "2",
      rd: "3"
  };
  let centuryTail = "";
  for(key in centuryTailArray){
      const centuryTailFlag = centuryTailArray[key] === centuryCount1DigitsString;
      if(centuryTailFlag){
          centuryTail = key;
      };
  };
  if(centuryTail === ""){
      centuryTail = "th";
  };
  return `${centuryCount}${centuryTail} century`;
}