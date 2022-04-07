function isZipcodeValid(zipcode){
  const is5DigitsValid = zipcode.length === 5;
  const isCaseValid = /\d\d\d\d\d/.test(zipcode);
  return is5DigitsValid && isCaseValid;
}