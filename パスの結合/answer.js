function twoPaths(path1,path2){
  // 関数を完成させてください
  const replacePath1 = path1.replace("/", "");
  const replacePath2 = path2.replace("/", "");
  return `${replacePath1}/${replacePath2}`;
}