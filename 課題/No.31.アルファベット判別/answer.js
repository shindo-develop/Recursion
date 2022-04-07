function isVowel(alphabet){
  // 関数を完成させてください
  // const vowel = /[AIUEO]/i;
  // return vowel.test(alphabet);
  const vowel = new RegExp('[aiueo]', 'i');
  return vowel.test(alphabet);
}