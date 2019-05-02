var str = "";
for(var i = 0; i < 6; i++){
  for(var j = 0; j < 5 - i; j++){
    str += '.';
  }
  for(var j = 0; j < 1 + i; j++){
    str += '#';
  }
  for(var j = 0; j < 0 + i; j++){
    str += '#';
  }
  for(var j = 0; j < 5 - i; j++){
    str += '.';
  }
  str += '\n';
}
console.log(str);