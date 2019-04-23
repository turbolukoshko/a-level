/* Синий пояс Number: flats */

var apartment = +prompt('Введите номер квартиры', '1');
var floors = 9; // Count floors in house
var apartmentsOnFloor = 4; // Count apartments on floor

var apartmentsOnEntrance = floors * apartmentsOnFloor; // Count apartments in entrance
var entrance = Math.ceil(apartment / apartmentsOnEntrance); // Determinating entrance
var floor = Math.ceil((apartment/apartmentsOnFloor) % 9); // Determinating floor in entrance
// check on NaN
if(isNaN(apartment) || (apartment == 0)){
  alert('Вы ввели некорректные данные. Повторите попытку');
}else if(floor == 0) {
  /* 
    Error in calc. 
    Remainder from 36, 72, 108 and etc - will be equal 0.
    Therefore, changed the formula for calc floor.
  */
  floor = Math.ceil((apartment/apartmentsOnFloor) / entrance);
  alert('Подьезд №' + entrance + ' квартира на ' + floor + ' этаже');
}else{
  alert('Подьезд №' + entrance + ' квартира на ' + floor + ' этаже');
}