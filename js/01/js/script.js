var a = prompt('Геометрические расчеты - Прямоугольника. Введите значение для стороны А', '0'); 
// getting from user value for side A
var b = prompt('Геометрические расчеты - Прямоугольника. Введите значение для стороны Б', '0'); 
// getting from user value for side B

var parseIntSideA = parseInt(a); // prompt - string. For mathematical operation need to convert
var parseIntSideB = parseInt(b); // to the type of number

var powForSideA = Math.pow(parseIntSideA, 2); // exponentiation side A 
var powForSideB = Math.pow(parseIntSideB, 2); // exponentiation side B

var diagonalLength = Math.sqrt(powForSideA + powForSideB); // calc diagonal of a rectangle

var perimeter = 2*(parseIntSideA + parseIntSideB); // calc perimeter of a rectangle

var area = parseIntSideA * parseIntSideB; // calc area of a rectangle

// insert result of diagonal in HTML
document.getElementById("diagonal").innerHTML = diagonalLength.toFixed(2); 
document.getElementById("perimeter").innerHTML = perimeter;
document.getElementById("area").innerHTML = area;