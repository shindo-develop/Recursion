function oppositeSeat(seat,len){
  // 配列のインデックスを使用し返す
  const seatRow = 2;
  // 1 ~ len * 2 の配列を作成
  const totalSeat = len * seatRow;
  const totalSeatArray = [...Array(totalSeat)].map((_, i) => i + 1)
  // 奇数偶数の配列を作成する
  const oddSeat = totalSeatArray.filter(seat => seat % 2 === 1);
      // 偶数の配列は大きい数値から配置する
  const evenSeat = totalSeatArray.filter(seat => seat % 2 === 0);
  const reverseEvenSeat = evenSeat.reverse();
  // seatの数値が奇数か偶数か判別する
  if (seat % 2 === 1) {
      // 奇数の時
      const oppositeTargetSeat = oddSeat.indexOf(seat);
      const targetSeat = reverseEvenSeat[oppositeTargetSeat];
      return targetSeat;
  } else if (seat % 2 === 0) {
      // 偶数の時
      const oppositeTargetSeat = evenSeat.indexOf(seat);
      const targetSeat = oddSeat[oppositeTargetSeat];
      return targetSeat;
  } else {
      return "error";
  };
}