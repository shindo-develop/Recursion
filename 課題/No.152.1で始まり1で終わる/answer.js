function countSubstring(bits){
  // 関数を完成させてください
  const caseOne = /(1.*1+)/;
  const caseZero = /^0+/;
  let removeHeadZero = bits.replace(caseZero, "");
  let totalCount = 0;
  while(caseOne.test(removeHeadZero)){
      let count = 0;
      // search
      let bitsOneIndex = removeHeadZero.search(caseOne);

      for(let i = 1; i < removeHeadZero.length; i++){
          // 1の組み合わせ
          if(removeHeadZero[bitsOneIndex] === removeHeadZero[i])count += 1;
      };
      totalCount += count;
      removeHeadZero = removeHeadZero.substr(bitsOneIndex + 1);
      removeHeadZero = removeHeadZero.replace(caseZero, "");
  };
  return totalCount;
}