function divideEmployees(num){
  const judgmentNum = num % 10;
  switch (judgmentNum){
      case 0:
      case 1:
          return "A";
          break;
      case 2:
      case 9:
          return "B";
          break;
      case 3:
      case 8:
          return "C";
          break;
      case 4:
      case 7:
          return "D";
          break;
      case 5:
      case 6:
          return "E";
          break;
  }
}