function maximumPeople(x,y){
  // 関数を完成させてください
  while(x % y !== 0){
      let prex = x;
      x = y;
      y = prex % y;
  };
  return y;
}