# アルファベットを大文字、小文字に変換する
## medium
```
ランダムな英単語 word とアルファベット alphabet を受け取り、もしそのアルファベットが英単語に含まれていたら、そのアルファベットより前の文字をすべて大文字にし、後ろの文字をすべて小文字に変換する toUpperheadLowerTail を作成してください。もしアルファベットが複数含まれている場合は、最後に登場したものよりも前の部分をすべて大文字に変換し、それ以降を小文字に変換してください。アルファベットが 1 つも使われていない場合はすべての文字を大文字にしてください。
```
```
関数の入出力例
入力のデータ型： string word, char alphabet
出力のデータ型： string

toUpperHeadLowerTail("difficULty",'i') --> DIFFiculty
toUpperHeadLowerTail("liBrarY",'r') --> LIBRAry
toUpperHeadLowerTail("EcoNomIcs",'u') --> ECONOMICS
toUpperHeadLowerTail("AAAAAAAAA",'A') --> AAAAAAAAa
toUpperHeadLowerTail("ABABABA",'A') --> ABABABa
toUpperHeadLowerTail("ABABABA",'B') --> ABABAba
toUpperHeadLowerTail("A",'A') --> a
toUpperHeadLowerTail("a",'A') --> A
```