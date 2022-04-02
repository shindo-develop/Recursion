function frogPosition(leaves,jumps,start){
  // 総数の中でループするためあまり算で移動後のマス目を算出することが可能
  if((jumps + start) % leaves === 0)return leaves;
  if(jumps + start >= 0){
      return Math.abs((jumps + start) % leaves);
  }else{
      return leaves + ((jumps + start) % leaves);
  };
}