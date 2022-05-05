class Files{
  constructor(fileName, fileExtension, content, parentFolder){
      this.fileName = fileName;
      this.fileExtension = fileExtension;
      this.content = content;
      this.parentFolder = parentFolder;
  };

  getLifetimeBandwidthSize(){
      const charDataSize = 25;
      if(this.content.length < 40){
          return `${this.content.length * charDataSize}MB`;
      }else{
          const dataSizeGB = 1000;
          return `${this.content.length * charDataSize / dataSizeGB}GB`;
      };
  };

  prependContent(data){
      this.content = `${data}${this.content}`;
      return this.content;
  };

  addContent(data, position){
      const headContent = this.content.slice(0, position);
      const tailContent = this.content.slice(position, this.content.length);
      this.content = `${headContent}${data}${tailContent}`;
      return this.content;
  };

  showFileLocation(){
      let isTxtFlag = false;
      let extension = this.fileExtension;
      const extensionRegExp = /[^(\.word)(\.png)(\.mp4)(\.pdf)]/;
      if(extensionRegExp.test(this.fileExtension))isTxtFlag = true;
      if(isTxtFlag)extension = ".txt";
      return `${this.parentFolder} > ${this.fileName}${extension}`;
  };
}

assignment = new Files("assignment", ".word", "ABCDEFGH", "homework");
console.log(assignment.getLifetimeBandwidthSize());
console.log(assignment.prependContent("MMM"));
console.log(assignment.addContent("hello world", 5));
console.log(assignment.showFileLocation());

blade = new Files("blade", ".ruby", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view");
console.log(blade.getLifetimeBandwidthSize());
console.log(blade.addContent("font-weight-bold ", 11));
console.log(blade.showFileLocation());