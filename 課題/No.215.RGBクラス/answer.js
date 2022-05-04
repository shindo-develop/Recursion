class RGB{
  constructor(red, green, bule){
      this.red = red;
      this.green = green;
      this.bule = bule;
  };

  getHexCode(){
      const colorArray = [this.red, this.green, this.bule];
      for(let i = 0; i < colorArray.length; i++){
          colorArray[i] = colorArray[i].toString(16).padStart(2, "0");
      };
      return `#${colorArray[0]}${colorArray[1]}${colorArray[2]}`;
  };

  getBits(){
      const hexCode = this.getHexCode();
      let bitsCodeString = "";
      for (let i = 1; i < hexCode.length; i += 2){
          let addBitCodeString = "";
          addBitCodeString += hexCode[i];
          addBitCodeString += hexCode[i + 1];
          // 16進数を10進数に変更し、2進数の文字列に変換し、不足分は０で補い格納
          bitsCodeString += parseInt(addBitCodeString, 16).toString(2).padStart(8, "0");
      };
      // 先頭の0を削除
      return bitsCodeString.replace(/^(0*)/, '');
  };

  getColorShade(){
      const isRedFlag = this.red > this.green && this.red > this.bule;
      const isGreenFlag = this.green > this.red && this.green > this.bule;
      const isBuleFlag = this.bule > this.red && this.bule > this.green;
      if(isRedFlag)return "red";
      if(isGreenFlag)return "green";
      if(isBuleFlag)return "blue";
      return "grayscale";
  };
}

color1 = new RGB(0, 153, 255)
console.log(color1.getHexCode());
console.log(color1.getBits());
console.log(color1.getColorShade());

color2 = new RGB(255, 153, 204)
console.log(color2.getHexCode());
console.log(color2.getBits());
console.log(color2.getColorShade());

color3 = new RGB(0, 87, 0)
console.log(color3.getHexCode());
console.log(color3.getBits());
console.log(color3.getColorShade());

gray = new RGB(123, 123, 123)
console.log(gray.getHexCode());
console.log(gray.getBits());
console.log(gray.getColorShade());