function maxBread(money,price,sticker){
  // 関数を完成させてください
  const breadCount = 0;
  const getStickers = Math.floor(money / price);
  const exchangeBread = stickerExchange(sticker, getStickers, breadCount);
  let purchasedBread = Math.floor(money / price);
  return purchasedBread + exchangeBread;
}

function stickerExchange(sticker, getStickers, breadCount){
  if(getStickers < sticker){
      return breadCount;
  }else{
      breadCount++;
      getStickers++;
      return stickerExchange(sticker, getStickers - sticker, breadCount);
  };
}