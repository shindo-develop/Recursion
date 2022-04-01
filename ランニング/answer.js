function isSameLocation(x1,v1,x2,v2){
  // 関数を完成させてください
  // x1 > x2の時
  const time1 = (x1 - x2) / (v2 - v1);
  // x1 < x1の時
  const time2 = (x2 - x1) / (v1 - v2);
  // 整数かどうか判断するフラグ
  const time1IntegerFlag = time1 % 1 === 0;
  const time2IntegerFlag = time2 % 1 === 0;
  // 正の数かどうか判断するフラグ
  const time1PositiveFlag = time1 > 0 ;
  const time2PositiveFlag = time2 > 0 ;
  if (x1 === x2){
      return x1 === x2;
  }else if (x1 > x2){
      return time1IntegerFlag && time1PositiveFlag;
  }else if (x1 < x2){
      return time2IntegerFlag && time2PositiveFlag;
  }else{
      return "error";
  };
}