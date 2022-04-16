function divideByWords(alphabet){
  const upperWord = /[A-Z]/;
  let returnAlphabet = alphabet[0];

  for(let i = 1; i < alphabet.length; i++){
      if(upperWord.test(alphabet[i])){
          returnAlphabet += " " + alphabet[i].toLowerCase()
      }else{
          returnAlphabet += alphabet[i];
      }
  }

  return returnAlphabet;
}