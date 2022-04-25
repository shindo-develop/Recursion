// 再帰版
function howLongToReachFundGoal(capitalMoney,goalMoney,interest){
    if(capitalMoney > goalMoney)return 0;
    const elapsedYearsCount = 0;
    return howLongToReachFundGoalHelper(capitalMoney, interest, goalMoney, elapsedYearsCount);
}

function howLongToReachFundGoalHelper(capitalMoney, interest, goalMoney, count){
    let rate = 0;
    if(count >= 80)return 80;
    if(capitalMoney >= goalMoney){
        return count;
    }else{
        if(count % 2 === 0)rate = 0.02;
        if(count % 2 !== 0)rate = 0.03;
        const carryOverMoney = capitalMoney + capitalMoney * interest / 100;
        const carryOverGoalMoney = goalMoney + goalMoney * rate;
        const carryOverYearsCount = count + 1;
        return howLongToReachFundGoalHelper(carryOverMoney, interest, carryOverGoalMoney, carryOverYearsCount);
    };
}

// while版
function howLongToReachFundGoal(capitalMoney, goalMoney, interest){
  let count = 0;
  if(capitalMoney >= goalMoney)return count;
  let rate = 0.02;
  let fundNotGoalFlag = true;
  while(fundNotGoalFlag){
      if(count % 2 === 0) {
          rate = 0.02;
      } else {
          rate = 0.03;
      };
      capitalMoney = capitalMoney + capitalMoney * interest / 100;
      goalMoney = goalMoney + goalMoney * rate;
      count++;
      if(count >= 80 | capitalMoney >= goalMoney) fundNotGoalFlag = false;
  };
  return count;
}