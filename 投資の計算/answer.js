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