function toUpperHeadLowerTail(word,alphabet){
  // 関数を完成させてください
  // 最後に登場したインデックスをどうにかして返す
  const NUMBER_OF_INDEX_ADJUSTMENTS = 1;
  const includedIndex = word.indexOf(alphabet);
  const reverseWord = word.split("").reverse().join("");
  const includedLastIndex = word.length - reverseWord.indexOf(alphabet) - NUMBER_OF_INDEX_ADJUSTMENTS;
  
  if(includedIndex === -1){
      return word.toUpperCase();
  }else{
      const headWord = word.slice(0, includedLastIndex);
      const tailWord = word.slice(includedLastIndex, word.length);
      return `${headWord.toUpperCase()}${tailWord.toLowerCase()}`;
  };
}