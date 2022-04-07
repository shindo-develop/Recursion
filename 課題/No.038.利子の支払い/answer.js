function interestsPaid(initialLoan,didPayOnTime){
  // 関数を完成させてください
  const COMMSION = 2.5;
  const INTEREST = 1.02;
  const DELINQUENT_INTEREST = 1.15;
  if (didPayOnTime){
      return initialLoan * INTEREST + COMMSION;
  } else {
      return initialLoan * DELINQUENT_INTEREST + COMMSION;
  };
}