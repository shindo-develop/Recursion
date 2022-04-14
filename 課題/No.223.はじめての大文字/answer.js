function firstUppercase(s){
  // 関数を完成させてください
  const uppercase = /[A-Z]/;
  const includeUppercase = s.match(uppercase);
  if(includeUppercase === null){
      return "No upper"
  }else{
      return includeUppercase[0];
  }
  // const includeUppercase = s.match(uppercase)??'No upper';
  console.log(includeUppercase);
  // return includeUppercase.length > 0 ? includeUppercase[0] :includeUppercase; 
}