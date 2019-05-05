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

// for(var key in a) {
//   if((key != "name") && (key != "surname")){
//     alert('Необязательные поля в массиве a: ' + key);
//   }
// }

// for(var key in b) {
//   if((key != "name") && (key != "surname")){
//     alert('Необязательные поля в массиве b: ' + key);
//   }
// }

// for(var key in c) {
//   if((key != "name") && (key != "surname")){
//     alert('Необязательные поля в массиве c: ' + key );
//   }
// }

/* array of persons */

var persons = [a, b, c, { name: 'Anne', 
                          surname: 'Hopkins', 
                          hairColor: "black", 
                          eyesColor: "blue", }
              ];
// console.log(persons);

/* loop of persons */

for(var i = 0; i < persons.length; i++){
  console.log(persons[i]);
}

for(var i in persons) {
  console.log(persons[i]);
}

/* loop of name and surname */
for(var i in persons) {
  for(var j in persons[i]){
    if((j.indexOf('name') && j.indexOf('surname') === - 1)) {
      delete persons[i][j];
    }
  }
  console.log(persons[i]);
}