var someTree = {
  tagName: "table", //html tag
  subTags: [ //вложенные тэги
      {
                  tagName: "tr",
                  subTags: [
                      {
                          tagName: "td",
                          text: "some text",
                      },
                      {
                          tagName: "td",
                          text: "some text 2",
                      }
                  ]
      }
  ],
  attrs: 
  {
      border: 1,
  },
};

var str = "";
if(someTree.tagName) {
  str = `<${someTree.tagName}`;
}
if(someTree.attrs){
  for(var attr in someTree.attrs) {
    str += ` ${attr}="${someTree.attrs[attr]}"`;
  }
  str += `>`;
}
if(someTree.subTags) {
  for(var i in someTree.subTags){
      str += `<${someTree.subTags[i].tagName}>`;
      if(someTree.subTags[i].subTags){
        for(var sub in someTree.subTags[i].subTags){
          str += `<${someTree.subTags[i].subTags[sub].tagName}>`;
          if(someTree.subTags[i].subTags[sub].text){
              str += `${someTree.subTags[i].subTags[sub].text}`;
              str += `</${someTree.subTags[i].subTags[sub].tagName}>`;
            }
          }
        }
        str += `</${someTree.subTags[i].tagName}>`;
      }
      str += `</${someTree.tagName}`;
  }

console.log(str);


document.write(str);