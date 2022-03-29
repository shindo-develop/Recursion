function divideEmployees(num){
  const judgmentNumString = new RegExp(num % 10);
  const judgmentEmployeesA = /[01]/;
  const judgmentEmployeesB = /[29]/;
  const judgmentEmployeesC = /[38]/;
  const judgmentEmployeesD = /[47]/;
  const judgmentEmployeesE = /[56]/;
  if (judgmentNumString.test(judgmentEmployeesA)){
      return "A";
  } else if (judgmentNumString.test(judgmentEmployeesB)){
      return "B";
  } else if (judgmentNumString.test(judgmentEmployeesC)){
      return "C";
  } else if (judgmentNumString.test(judgmentEmployeesD)){
      return "D";
  } else if (judgmentNumString.test(judgmentEmployeesE)){
      return "E";
  } else {
      return "NaN";
  };
}