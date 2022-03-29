function redirectionUrl(language){
  // 関数を完成させてください
  let lang = '';
  const url = 'www.example.org/';
  switch(language){
      case 'English':
          lang = 'en';
          return `${url}${lang}`;
          break;
      case 'Japanese':
          lang = 'ja';
          return `${url}${lang}`;
          break;
      case 'Spanish':
          lang = 'es';
          return `${url}${lang}`;
          break;
      case 'Russian':
          lang = 'ru';
          return `${url}${lang}`;
          break;
      default:
          return `${url}${lang}`;
  };
}