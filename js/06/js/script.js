// var choose = prompt('Введите название задания', 'a');

// switch(choose.toLowerCase()){
//   case "a":
//     function a(message){
//       return alert(message);
//     }
//     a("Привет!");
//   break;
//   case "cube":
//     function cube(num=0){
//       var result = Math.pow(num, 3);
//       return result;
//     }
//     console.log(cube(3));
//   break;
//   case "avg2":
//     function avg2(a=0, b=0){
//       var result = (a + b) / 2;
//       return result;
//     }
//     console.log(avg2(10));
//   break;
//   case "sum3":
//     function sum3(a=0, b=0, c=0){
//       var result = a + b +c;
//       return result;
//     }
//     console.log(sum3(1,2));
//   break;
//   case "intRandom":
//     function intRandom(min, max){
//       var result = Math.round(Math.random()*(max - min) + min);
//       return result;
//     }
//     console.log(intRandom(-1));
//   break;
//   case "greetAll":
//     function greetAll(){
//       var hello;
//       for(var i = 0; i < arguments.length; i++){
//         hello = alert("Hello, " + arguments[i]);
//       }
//       return hello;
//     }
//     greetAll("Superman", "SpiderMan", "Captain Obvious");
//   break;
//   case "sum":
//     function sum(){
//       var sum = 0;
//       for(i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//       }
//       return sum;
//     }
//     console.log(sum(10, 20, 40, 100));
//   break;
// }


/* a */
function a(message){
  return alert(message);
}

/* cube */
function cube(num=0){
  var result = Math.pow(num, 3);
  return result;
} 

/* avg2" */
function avg2(a=0, b=0){
  var result = (a + b) / 2;
  return result;
}

/* sum3 */
function sum3(a=0, b=0, c=0){
  var result = a + b +c;
  return result;
}

/* intRandom */
function intRandom(min, max){
  if(max == undefined){
    max = min;
    min = 0;
  }
  var result = Math.round(Math.random()*(max - min) + min);
  return result;
}

/* greetAll */
function greetAll(){
  var hello;
  for(var i = 0; i < arguments.length; i++){
    hello = alert("Hello, " + arguments[i]);
  }
}

/* sum */
function sum(){
  var sum = 0;
  for(i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

var arr = {
  "a": a,
  "cube": cube,
  "avg2": avg2,
  "sum3": sum3,
  "intRandom": intRandom,
  "greatAll": greetAll,
  "sum": sum,
};
