function getSlug(url){
  // 関数を完成させてください
  const reverseUrl = url.split("").reverse().join("");
  const lastSlashFlag = /\//.test(url[url.length -1]);
  if(lastSlashFlag){
      const removeLastSlash = reverseUrl.replace("/", "");
      const slugIndex = removeLastSlash.length - removeLastSlash.indexOf("/");
      return url.substr(slugIndex, removeLastSlash.length - slugIndex);
  }else{
      const slugIndex = url.length - reverseUrl.indexOf("/");
      return url.substr(slugIndex, url.length - slugIndex);
  };
}