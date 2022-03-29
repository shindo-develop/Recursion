function hideAddress(address){
  // 関数を完成させてください
  const hideCheck = /@/;
  const addressIndex0To3 = address.substr(0, 5);
  if (hideCheck.test(addressIndex0To3)){
      return address;
  } else {
      const returnStringArray = address.split(/@/);
      const returnStringHead = returnStringArray[0].slice(0,3);
      const returnStringFoot = returnStringArray[1];
      return `${returnStringHead}...@${returnStringFoot}`;
  };
}