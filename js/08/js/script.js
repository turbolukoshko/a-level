/* Замыкания */
/* makeProfileTimer */
var makeProfileTimer = function(){
  var start = performance.now();
  function calc(){
    let end = performance.now();
    let result = end - start;
    return result;
  }
  return calc;
};

var doSomething = function(){
  alert('function doSomething has been started!');
};

var timer = makeProfileTimer();
doSomething();
alert(timer());

/* makeSaver */
function makeSaver(arg){
  var statament = true;
  var randomNumber;
  function comparisonValue(){
    if(statament){
      randomNumber = arg();
    }
    statament = false;
    return randomNumber;
  }
  return comparisonValue;
}

var saver = makeSaver(Math.random);
var value1 = saver();
var value2 = saver();

console.log(value1 === value2);

var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)]);
var value3 = saver2();
var value4 = saver2();
console.log(value3 == value4);

/* Final Countdown */
function countDown(arg){
  delay = 0;
  for(var i = arg; i >= 0; i--){
    (function(i){
      setTimeout(function(){
        if(i == 0){
          i = "поехали!";
        }
        console.log(i);
      }, delay += 1000);
    })(i);
  }
}

countDown(5);

/* myBind */

/* Рекурсия */
/* Sum */
// a1 - first num
// n - coefficient
// function sum(a1, n, step){
//   let an = a1 + (n - 1) * step; // find last 
//   let sum = (a1 + an) / 2 * n; 
//   return sum;
// }

// alert(sum(1,2,1));