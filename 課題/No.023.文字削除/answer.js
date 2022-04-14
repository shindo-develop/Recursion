function deleteAt(s,i){
  // 関数を完成させてください
  const returnString = i > s.lengh ? s : removeString(s, i);
  return returnString;
}

function removeString(string, index){
  const fixedStringHead = string.substr(0, index - 1);
  const fixedStringTail = string.substr(index, string.length - index);
  console.log(`${fixedStringHead}${fixedStringTail}`)
  return `${fixedStringHead}${fixedStringTail}`;
}