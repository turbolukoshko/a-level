var a = prompt('Геометрические расчеты - Прямоугольника. Введите значение для стороны А', '0'); 
// getting from user value for side A
var b = prompt('Геометрические расчеты - Прямоугольника. Введите значение для стороны Б', '0'); 
// getting from user value for side B

var parseSideA = parseFloat(a); // prompt - string. For mathematical operation need to convert
var parseSideB = parseFloat(b); // to the type of number float

var powForSideA = Math.pow(parseSideA, 2); // exponentiation side A 
var powForSideB = Math.pow(parseSideB, 2); // exponentiation side B

var diagonalLength = Math.sqrt(powForSideA + powForSideB); // calc diagonal of a rectangle

var perimeter = 2*(parseSideA + parseSideB); // calc perimeter of a rectangle

var area = parseSideA * parseSideB; // calc area of a rectangle

// insert result of diagonal in HTML
document.getElementById("diagonal").innerHTML = diagonalLength.toFixed(2); 
document.getElementById("perimeter").innerHTML = perimeter;
document.getElementById("area").innerHTML = area;