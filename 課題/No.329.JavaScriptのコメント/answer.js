function isCommentOutValid(s){
  const isCommentOutValidPattern = /(\/\/)|(\/\*\*\/)/g;
  const isCommentOutNotValid = isCommentOutValidPattern.test(s);
  if(!(isCommentOutNotValid))return false;
  const matchCommentOut = s.match(isCommentOutValidPattern).join("");
  const isCommentOutValidFlag = (s === matchCommentOut);
  return isCommentOutValidFlag;
}