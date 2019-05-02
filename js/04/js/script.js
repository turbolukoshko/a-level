/* html tree */

var body = {
  tagName: 'body',
  paired: true,
  children: [{
    tagName: 'div',
    paired: true,
    children: [{
      tagName: 'span',
      paired: true,
      content: 'Enter a data please:'
    },
    {
      tagName: 'br',
      paider: false,
    },
    {
      tagName: 'input',
      paired: false,
      attrs: {
        type: 'text',
        id: 'name'
      }
    },
    {
      tagName: 'input',
      paired: false,
      attrs: {
        type: 'text',
        id: 'surname'
      }

    },
    ]
  },
  {
    tagName: 'div',
    paired: true,
    children: [
      {
        tagName: 'button',
        paired: true,
        content: 'OK',
        attrs: {
          id: 'ok'
        }
      },
      {
        tagName: 'button',
        paired: true,
        content: 'Cancel',
        attrs: {
          id: 'cancel'
        }
      }
    ]
  }]
}

alert(body.children[1].children[1].content);
alert(body.children[0].children[3].attrs.id);

// /* declarative fields */

var laptop = {
  brand: prompt('Enter laptop brand'),
  type: prompt('Enter laptop type'),
  model: prompt('Enter laptop model'),
  ram: +prompt('Enter amount laptop ram'),
  size: prompt('Enter laptop size'),
  weight: +prompt('Enter laptop weight'),
  resolution: {
      width: +prompt('Enter laptop width'),
      height: +prompt('Enter laptop height'),
  },
};

var smartphone = {
  brand: prompt('Enter smartphone brand'),
  model: prompt('Enter model smartphone'),
  ram: +prompt('Enter smartphone ram'),
  color: prompt('Enter smartphone color'),
};

var person = {
  name: prompt('Enter person name'),
  surname: prompt('Enter person surname'),
  married: confirm('Is the person married?'),
}

/* object links */

person.smartphone = smartphone;
smartphone.owner = person;
person.laptop = laptop;
laptop.owner = person;

/* imperative array fill 3 */

var arr = [];

for(i = 0; i < 3; i++) {
  arr[i] = prompt('Enter element for array');
}

console.log(arr);

/* while confirm */

while(!confirm('Цикл While')){
  alert('Для выхода из цикла нажмите - ОК,');
}

/* array fill */

var arrayFill = [];
var fill;
while(arrayFill){
  fill = prompt('Enter element for array', '');
  if(fill || fill == ''){
    arrayFill.push(fill);
    alert(arrayFill);
  }else{
    break;
  }
}

/* array fill nopush */

var arrFill = [];
var fillElem;

while(arrFill){
  fillElem = prompt('Enter element for fill array', '');
  if(fillElem || fillElem == ''){
    arrFill[arrFill.length] = fillElem;
    alert(arrFill);
  }else{
    break;
  }
}

/* infinite probability */

var count = 0;

while(1){
  if(Math.random() > 0.9){
    count++;
    break;
  }else{
    count++;
  }
}

alert('Количество иттераций - ' + count);

/* empty loop */

while(prompt('Enter anything') == null){}

/* progression sum */

var sum = 0;
var n = 11;
var step = 3;
var arr = [];

for(var i = 1; i < n; i+=step) {
  arr.push(i); 
  sum += i;
}

alert(sum);

/* progression sum (with reduce) */

var newArr = [];
var sum = 0;
var n = 100;

for(var i = 1; i < n; i+=3){
  newArr.push(i);
  sum = newArr.reduce(function(a, b){
    return a + b;
  }, 0);
}

alert(sum);

/* chess one line */

var gate = '#';
var space = ' ';
var n = +prompt('Enter length string');
var result = '';

for(var i = 0; i < n; i++){
  if(i % 2 == 0){
    result += space;
    // alert(result);
  }else {
    result += gate;
    // alert(result);
  }
}
// document.write(result);
alert(result);

/* numbers */

var str = "";
for(var i = 0; i < 10; i++){
  for(var j = 0; j < 10; j++){
    str += j;
  }
  str = str +  "\n";
}

console.log(str);

/* chess */

var oneChar = '.#';
var res = "";
var twoChar = '#.';
var heightBoard = +prompt('Enter height board', '10');
var widthBoard = +prompt('Enter width board', '6');

for(var i = 0; i < heightBoard; i++){
    for(var j = 0; j < widthBoard; j++){
      if(i % 2 ==0) {
        res +=oneChar;
      }else{
        res += twoChar;
      }
    }
    res = res + '\n';
}

console.log(res);

/* cubes */

var arr = [];
k = +prompt('Enter count elem for array', '1');

for(var i = 0; i < k; i++){
  arr[i] = Math.pow(i, 3);
}
console.log(arr);

/* cubes (variant 2) */

var i = +prompt('Enter lenght array', '');
/* fill elements in array */
var arr = [];
var r = [];
while (i >= 0) {
  arr.push(i);
  i--;
  console.log(i);
}

/* exp element */
for(var key of arr){
  key = Math.pow(key,3);
  r.push(key); 
}
console.log(r.reverse());

/* multiply table */

var countElemOnAxis = 20;
var arr = [];

for(var i = 0; i <= countElemOnAxis; i++ ){
  arr[i] = [];
  for(var j = 0; j <= countElemOnAxis; j++){
    arr[i][j] = i * j;
  }
}
console.log(arr);

/* matrix to html table */

var arr = [];
var table = `<table cellspacing="0" cellpadding="4" border="1">`
for(i = 0; i <= 20; i++) {
  arr[i] = [];
  table += `<tr align="center">`;
  for(j = 0; j <= 20; j++) {
    arr[i][j] = i * j;
    arr[i][0] = i;
    arr[0][j] = j;
    arr[0][0] = '*';
    table += `<td>${arr[i][j]}</td>`
  }
  table += `</tr>`;
}
table += `</table>`;

console.log(arr);

document.write(table);