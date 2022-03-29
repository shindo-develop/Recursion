function quadraticEquation(a,b,c){
  // 関数を完成させてください
  if (a === 0)return 0;
  const discriminant = b ** 2 + (-4 * a * c);
  if (discriminant > 0){
      return 2;
  } else if (discriminant === 0){
      return 1;
  } else if (discriminant <0){
      return -2;
  } else {
      return "error"
  };
}