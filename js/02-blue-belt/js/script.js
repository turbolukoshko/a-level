/* Синий пояс Number: flats */

var apartmentNum = +prompt('Введите номер квартиры', '1');
var floorNum = 9; // Number of floors in the house
var apartmentOnFloor = 4; // Number of apartments per floor
var apartmentOnEntrance = floorNum * apartmentOnFloor; // Number of apartments in entrance
var numberEntrace = Math.ceil(apartmentNum / apartmentOnEntrance); // Number entrance
// Formula for finding apartment on the floor
var numberFloor = Math.ceil((apartmentOnEntrance + apartmentNum - numberEntrace * apartmentOnEntrance) / apartmentOnFloor);
// check on NaN
if(isNaN(apartmentNum)) {
  alert('Введите корректный номер квартиры');
} else {
  alert('Ваша квартира находится на ' + numberFloor + ' этаже, ' + numberEntrace + '-го подъезда');
}