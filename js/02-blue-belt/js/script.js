/* Синий пояс Number: flats */

var apartmentNum = +prompt('Введите номер квартиры', '1');
var floorNum = 9; // Number of floors in the house
var apartmentOnFloor = 4; // Number of apartments per floor
var apartmentOnEntrance = floorNum * apartmentOnFloor; // Number of apartments in entrance
var numberEntrace = Math.ceil(apartmentNum / apartmentOnEntrance); // Number entrance
// Formula for finding apartment on the floor
var numberFloor = Math.ceil((apartmentOnEntrance + apartmentNum - numberEntrace * apartmentOnEntrance) / apartmentOnFloor);
// check on NaN
if(isNaN(apartmentNum) || (apartmentNum == 0)) {
  alert('Введите корректный номер квартиры');
} else {
  alert('Ваша квартира находится на ' + numberFloor + ' этаже, ' + numberEntrace + '-го подъезда');
}


/* method 2 */

var apartment = +prompt('Введите номер квартиры', '1');
var floors = 9; // Count floors in house
var apartmentsOnFloor = 4; // Count apartments on floor

var apartmentsOnEntrance = floors * apartmentsOnFloor; // Count apartments in entrance
var entrance = Math.ceil(apartment / apartmentsOnEntrance); // Determinating entrance
var floor = Math.ceil((apartment/apartmentsOnFloor) % 9); // Determinating floor in entrance
// check on NaN
if(isNaN(apartment) || (apartment == 0)){
  alert('Вы ввели некорректные данные. Повторите попытку');
}else {
  alert('Подьезд №' + entrance + ' квартира на ' + floor + ' этаже');
}