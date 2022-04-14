function countWords(sentence){
  const space = /\s/g;
  const spaceArray = sentence.match(space);
  let spaceCount = 0;
  if(spaceArray !== null)spaceCount = spaceArray.length;
  return spaceCount + 1;
}