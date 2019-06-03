// /* Замыкания */
// /* makeProfileTimer */
// function makeProfileTimer(){
//   let start = performance.now();
//   function calc(){
//     let end = performance.now();
//     let diff = end - start;
//     return diff; 
//   }
//   return calc;
// }

// function doSomething(){
//   alert('function doSomething has been started');
// }

// var timer = makeProfileTimer();
// doSomething();
// alert(timer());

// /* makeSaver */
// function makeSaver(funcRandom){
//   let statement = true;
//   let randomNumber;
//   function comparisonNumber(){
//     if(statement){
//       randomNumber = funcRandom();
//     }
//     statement = false;
//     return randomNumber;
//   }
//   return comparisonNumber;
// }

// var saver = makeSaver(Math.random);
// var value1 = saver();
// var value2 = saver();
// console.log(value1 == value2);

// var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)]);
// var value3 = saver2();
// var value4 = saver2();
// console.log(value3 === value4);

// /* Final Countdown */
// function countdown(num){
//   let delay = 0;
//   for(let i = num; i >= 0; i--){
//     (function(){
//       setTimeout(function(){
//         if(i == 0 ){
//           i = "поехали!";
//         }
//         console.log(i);
//       }, delay += 1000);
//     })();
//   }
// }

// countdown(5);

/* myBind */

/* Рекурсия */
/* Sum */

function recursion(n){
  if(n == 1){
    return 1;
  }else{
    return n + recursion(n-1);
  }
}

console.log(recursion(3));