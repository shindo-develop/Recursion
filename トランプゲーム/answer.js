function whoIsWinner(hisCard){
  // 関数を完成させてください
  const WINNING_CARD = /[3456789]/;
  const checkCard = new RegExp(hisCard);
  if (hisCard === 10){
      return "draw";
  } else if (checkCard.test(WINNING_CARD)){
      return "you win";
  } else {
      return "you lose";
  }
}