function isValidPassword(password){
  // 関数を完成させてください
  if(password.length <6)return false;
  // 空白を含む
  const whiteSpace = /\s+/;
  // 大文字と小文字を含み、数字を含む
  const includingCaseAndNumber = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
  // 大文字小文字数字を含んでいればtrue
  const includingCaseAndNumberFlag = includingCaseAndNumber.test(password);
  // 空白がなければture
  const notWhiteSpaceFlag = !(whiteSpace.test(password));
  return notWhiteSpaceFlag && includingCaseAndNumberFlag;
}