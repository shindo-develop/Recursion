function reverseWords(sentence){
  // 関数を完成させてください
  const spaceSplitArray = sentence.split(/\s/);
  let returnWords = "";
  for(let i = 0; i < spaceSplitArray.length; i++){
      let reverseWord = spaceSplitArray[i].split("").reverse().join("");
      returnWords = returnWords.concat(`${reverseWord} `);
  }
  return returnWords.slice(0, -1);
}