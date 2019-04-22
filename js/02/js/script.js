/* assign: evaluation */

var a = 5;  
var b, c;

b = ((a) * (5));
b = ((c) = ((b)/(2)));

/* semicolon: error */

// var a = 4 b = 2; // syntax error

/* semicolon: mistake */

// var mistake = +prompt('Вам есть 18?', '');
// if(mistake > 18) {
//   alert('Проходи')
// }; else { // code doesn't run
//   alert('Еще рано')
// }

/* Number: age */

var ageQuestion = +prompt('Сколько вам лет?', '');
var presentYear = new Date().getFullYear(); // getting current year
if (isNaN(ageQuestion)) { // check on NaN
  alert('Вы ввели не число!');
}else {
  alert('Ваш год рождения - ' + ((+presentYear) - (+ageQuestion)));
}

/* Number: temperature */

// Convert Degree Celsius to Fahrenheit
var temperatureQuestionDegreeCelsius = +prompt('Введите значение температуры в градусах Цельсия', '');
var formulaForConvertDegreeCelsiusToFahrenheit = temperatureQuestionDegreeCelsius * 1.8 + 32; // Celsius Translation Formula to Fahrenheit
if(temperatureQuestionDegreeCelsius === 0) {
  alert(32 + ' Фаренгейт');
}else if(isNaN(temperatureQuestionDegreeCelsius)){
  alert('Вы ввели не число!');
}else {
  alert(temperatureQuestionDegreeCelsius + (' Цельсий = ') + ((+formulaForConvertDegreeCelsiusToFahrenheit)  + ' Фаренгейт'));
}

// Convert Fahrenheit to Degree Celsius
var temperatureQuestionFahrenheit = +prompt('Введите значение температуры в градусах Фаренгейт');
var formulaForConvertFahrenheitToDegreeCelsium = (temperatureQuestionFahrenheit - 32) / 1.8; // Fahrenheit Translation Formula to Celsius
if(temperatureQuestionFahrenheit === 32){
  alert(0 + ' Цельсий');
}else if(isNaN(temperatureQuestionFahrenheit)){
  alert('Вы ввели не число!');
}else{
  alert(temperatureQuestionFahrenheit + (' Фаренгейт = ') + (+formulaForConvertFahrenheitToDegreeCelsium + ' Градусов Цельсий'));
}

/* Number: divide */
var enterFirstNum = +prompt('Введите первое число', '');
var enterSecondNum = +prompt('Введите второе число', '');
var result = Math.floor(enterFirstNum / enterSecondNum);

if(isNaN(enterFirstNum && enterSecondNum)) {
  alert('Вы ввели не число!');
}else {
  alert(result);
}

/* Number: odd */

var enterNum = +prompt('Введите число', '');
if(isNaN(enterNum)) {
  alert('Вы ввели не число!');
}else if(enterNum % 2 == 0) {
  alert('Число четное');
}else {
  alert('Число нечетное');
}

/* String: greeting */

var enterName = prompt('Введите свое имя');
alert('Привет, ' + enterName);

/* String: lexics */

var word = prompt('Введите слово', '');
var match = 'а'; // cyrillic char
var matchWithIndexOf = word.indexOf(match);

if(matchWithIndexOf === -1) {
  alert('Совпадений не найдено!');
}else {
  alert('В слове - ' + word + ', есть буква - ' + match);
}

/* Boolean */

var verificationAdmin = confirm('Вы администратор?'); 

/* Boolean: if */
var questionConfirm = confirm('Ваш пол?');
if(questionConfirm == true) {
  alert('Вы женщина');
}else {
  alert('Вы мужчина');
}
var saveConfirmAnswer = questionConfirm; // save answer from confirm window

/* Array: real */

var cupBoard = ['верхняя полка', 'полка для мелких вещей', 'нижняя полка'];


/* Array: booleans */

var arrBoleans = [verificationAdmin, saveConfirmAnswer];

/* Array: plus */

var arrPlus = [1, 2, 3];
    arrPlus[2] = arrPlus[0] + arrPlus[1];

/* Array: plus string */

var arrPlusString = ['Привет ', 'мир', '!'];
    arrPlusString[2] = arrPlusString[0] + arrPlusString[1] + arrPlusString[2];

/* Object: real */

var turtle = {
  name: 'turtle',
  order: 'reptile',
  weight: 250,
}

/* Object: change */

turtle.name = 'testudines';
turtle["weight"] = 150;

/* Comparison if */

var age = +prompt("Сколько вам лет?","");
if(age <= 0){
  alert('такого не может быть')
}else{
  if (age <= 18){
    alert("школьник");
}else{
  if (age <= 30){
    alert("молодеж");
}else{
  if (age <= 45){
    alert("зрелость");
}else{
  if (age <= 60){
    alert("закат");
}else{
  if (age > 60){
    alert("как пенсия?");
}else {
    alert("то ли киборг, то ли ошибка"); 
}}}}}};

/* Comparison: sizes */

var chooseSizes = +prompt('Какой у вас размер? (минимальный размер - 40)', '');
var differenceSize = 34;
var transferSizeUaInUsa = chooseSizes - differenceSize;
var sizeS = 6;

if(transferSizeUaInUsa >= sizeS) {
  alert('Ваш размер: ' + transferSizeUaInUsa)
}else {
  alert('Вы ввели некорректный размер. Повторите попытку');
}

/* Comparison: object */

var chooseSizes = +prompt('Какой у вас размер? (минимальный размер - 40)', '');
var differenceSize = 34;
var transferSizeUaInUsa = chooseSizes - differenceSize;
var sizeS = 6;

var objSize = {
  's': 6,
  'm': 8,
  'l': 12,
  'xl': 16,
  'xxl': 20,
}

if(transferSizeUaInUsa === objSize.s) {
  alert('S');
}else if(transferSizeUaInUsa === objSize.m) {
  alert('M');
}else if(transferSizeUaInUsa === objSize.l) {
  alert('L');
}else if(transferSizeUaInUsa === objSize.xl) {
  alert('XL');
}else if(transferSizeUaInUsa === objSize.xxl) {
  alert('XXL');
}else if(transferSizeUaInUsa > sizeS) {
  alert('Ваш размер: ' + transferSizeUaInUsa)
}else {
  alert('Вы ввели некорректный размер. Повторите попытку');
}

/* Ternary */

var chooseGender = confirm('Ваш пол?') ? alert('Вы мужчина') : alert('Вы женщина');