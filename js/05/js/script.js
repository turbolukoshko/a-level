/* 3 persons */

var a = {
  name: 'Michael',
  surname: 'Kolesnikov',
};

var b = {
  name: 'Marshall',
  surname: 'Hall',
};

var c = {
  name: 'Brandi',
  surname: 'Mendoza',
};

/* different fields */

a.age = 21;
a.fathername = 'Vladimirovich';
b.sex = 'male';
b.married  = false;
c.growth = '182';
c.weight = '70';

// /* fields check */

for(var key in a) {
  if((key != "name") && (key != "surname")){
    alert('Необязательные поля в объекте a: ' + key);
  }
}

for(var key in b) {
  if((key != "name") && (key != "surname")){
    alert('Необязательные поля в объекте b: ' + key);
  }
}

for(var key in c) {
  if((key != "name") && (key != "surname")){
    alert('Необязательные поля в объекте c: ' + key );
  }
}

/* array of persons */

var persons = [a, b, c, { name: 'Anne', 
                          surname: 'Hopkins', 
                          hairColor: "black", 
                          eyesColor: "blue", }
              ];
persons.push({
  name: 'Alex',
  surname: 'Mazaylo',
  skinColor: 'brown',
  fathername: 'Igorevich',
});
console.log(persons);

/* loop of persons */

for(var i = 0; i < persons.length; i++){
  console.log(persons[i]);
}

for(var i in persons) {
  console.log(persons[i]);
}

/* loop of name and surname */

for(var i in persons) {
  console.log(persons[i].name + ' ' + persons[i].surname);
}

// // Method 2. But, it will permanently remove unnecessary elements from the object.
// for(var i in persons) {
//   for(var j in persons[i]){
//     if((j.indexOf('name') && j.indexOf('surname') === - 1)) {
//       delete persons[i][j];
//     }
//   }
//   console.log(persons[i]);
// }

/* loop of loop of values */

for(var i in persons) {
  for(var j in persons[i]){
    console.log(persons[i][j]);
  }
}

/* fullName */

for(var i in persons) {
  for(var j in persons[i]){
    if(j == 'fathername') {
      persons[i].fullName = persons[i].name + ' ' +  persons[i].surname + ' ' +  persons[i].fathername;
    }
  }
  console.log(persons[i]);
}

/* serialize */

var serialize = JSON.stringify(persons);
console.log(serialize);

/* deserialize */

var deserialize = JSON.parse('{"name": "Sophie", "surname": "Colon", "nationality": "American", "age": 25}');
console.log(deserialize);
persons.push(deserialize);
console.log(persons);

// /* HTML */

var table = `<table cellspacing="2" border="1" cellpadding="5">`;

for(var i in persons) {
  table += `<tr align="center">`;
  table += `<td bgcolor="#FFEB3B">name</td><td>${persons[i].name}</td>`;
  table += `<td bgcolor="#FFEB3B">surname</td><td>${persons[i].surname}</td>`;
  table += `</tr>`;
}
table += `</table>`;
document.write(table);

// /* HTML optional fields */
// /* HTML tr color */

var table = `<table cellspacing="2" border="1" cellpadding="5">`;
for(var i in persons){
  table += `<tr align="center">`;
  for(var j in persons[i]) {
    if(i % 2 == 0){
      table += `<td bgcolor="#FFEB3B">${j}</td><td bgcolor="#FFEB3B">${persons[i][j]}</td>`;  
    }else {
      table += `<td>${j}</td><td>${persons[i][j]}</td>`;  
    }
  }
  table += `</tr>`;
}
table += `</table>`;
document.write(table);

/* HTML th optional */

arrKeys = [];

// get all keys in persons
for(var person in persons) {
  for(var key in persons[person]) {
    arrKeys.push(key); // push all keys in empty array
  }
}

// sort keys
var uniqueKeys = arrKeys.filter((item, i) => arrKeys.indexOf(item) == i);

// creating an object with unique keys of the array
var objUniqueKeys = {};
for(var i in uniqueKeys) {
  objUniqueKeys[uniqueKeys[i]] = i;
}

// build table
var table = `<table cellspacing="4" border="0" cellpadding="8">`;
table += `<tr>`;
// creating a <th> form from an array with unique keys
for(var key in uniqueKeys) {
  table += `<th bgcolor="#BDBDBD">${uniqueKeys[key]}</th>`;
}
table += `</tr>`;
// creating a <td> form from an object with unique keys
for(var i in persons){
  if(i % 2 == 0){
    table += `<tr bgcolor="#B3E5FC" align="center">`;
  }else{
    table += `<tr bgcolor="#C5CAE9" align="center">`;
  }
    for(var j in objUniqueKeys){
      // console.log(j);
      // console.log(persons[i]);
      // compatibility check the key with the property 
      if(j in persons[i]){
        table += `<td>${persons[i][j]}</td>`;
      }else{
        table += `<td>-</td>`;
    }
  }
}
table += `</tr>`;
table += `</table>`;
// render table
document.write(table);