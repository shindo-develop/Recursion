function leetify(stringInput){
  const convertFlag = /[OLZEASTB]/ig.test(stringInput);
  if(!(convertFlag))return stringInput;
  const convertNumber = ["0", "1", "2", "3", "4", "5", "7", "8"];
  const convertionConditionsArray = [
      /O/ig,
      /L/ig,
      /Z/ig,
      /E/ig,
      /A/ig,
      /S/ig,
      /T/ig,
      /B/ig,
  ];
  let convertString = stringInput;
  for(let i = 0; i < convertNumber.length; i++){
      convertString = convertString.replace(convertionConditionsArray[i], convertNumber[i]);
  };
  return convertString;
}