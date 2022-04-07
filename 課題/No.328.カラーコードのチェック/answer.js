function isValid(colorCode){
  // 関数を完成させてください
  const validLength = colorCode.length === 7;
  console.log(validLength);
  const validPattern = /^#[A-Fa-f0-9]{6}/;
  const isCaseValid = validPattern.test(colorCode);
  console.log(isCaseValid);
  return validLength && isCaseValid;
}