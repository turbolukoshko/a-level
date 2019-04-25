var chooseTask = prompt('Выберите одно из заданий', '');

switch(chooseTask) {
  case 'switch: sizes':
    var size = prompt('Введите размер одежды USA', '');
    switch(size) {
      case "XXS":
        alert('42');
        break;
      case "XS":
        alert('44');
        break;
      case "S":
        alert('46');
        break;
      case "M":
        alert('48');
        break;
      case "L":
        alert('50');
        break;
      case "XL":
        alert('52');
        break;
      case "XXL":
        alert('54');
        break;
      case "XXXL":
        alert('56');
        break;
    }
  break;
  case 'switch: if':
    var color = prompt("Введите цвет","");
    if(color === "red") {
      document.write("<div style='background-color: red;'>красный</div>");
    } if((color === "red") || (color === "black")) {
      document.write("<div style='background-color: black; color: white;'>черный</div>");
    } if(color === "blue") {
      document.write("<div style='background-color: blue;'>синий</div>");
    } if((color === "blue") || (color === "green")){
      document.write("<div style='background-color: green;'>зеленый</div>");
    } if(color === '') {
      document.write("<div style='background-color: gray;'>Я не понял</div>");
    }
  break;
  case 'prompt: or':
    var age = +prompt('Сколько вам лет?', '');
    var presentYear = new Date().getFullYear();
    if((age == 0) || null) {
      alert('Вы ввели некорректный возраст')
    } else {
      alert(age);
    }
  break;
  case 'confirm: or this days':
    var shopping = confirm('шопинг?', '');
    if((shopping == 0) || null) {
      alert('ты бяка');
    }
  break;
  case 'triple prompt':
    var lastName = prompt('Введите Вашу фамилию', '');
    var firstName = prompt('Введите Ваше имя', '');
    var patronymic = prompt('Введите Ваше отчество', '');
    alert(lastName + ' ' + firstName + ' ' + patronymic);
  break;
  case 'default: or':
    var fName = prompt('Введите имя', '');
    var lName = prompt('Введите фамилию', '');
    if((fName == '') || (fName == null)) {
    fName = 'Василий';
    } if((lName == '') || (lName == null)){
    lName = 'Иванов';
    }
    alert(fName + ' ' + lName);
  break;
  case 'default: if':
    var fiName = prompt('Введите имя', '');
    var laName = prompt('Введите фамилию', '');
    if((fiName == '') || (fiName == null)) {
      fiName = 'Василий';
    }
    if((laName == null) || (laName == '')) {
      laName = 'Иванов';
    }
    alert(fiName + ' ' + laName);
  break;
  case 'login and password':
    var rightUser = {
      'user': 'admin',
      'password': 'qwerty', 
    }

    btn.onclick = function() {
      if((rightUser.user === login.value) && (rightUser.password === password.value)) {
        alert('Hello, admin!');
      }else {
        alert('Login or password are invalid')
      }
    }
  break;
  case 'currency calc':
      var currency = prompt('usd или eur', '').toLowerCase();
      var amount = +prompt('Введите сумму в гривне?', '');
      var dollarRate = 26.60;
      var euroRate = 29.70;
      var resultRate;

    switch(currency) {
      case 'usd':
        resultRate = amount / dollarRate; 
        alert('Ваша сумма: ' + resultRate.toFixed(2) + '$');
        break;
      case 'eur':
        resultRate = amount / euroRate;
        alert('Ваша сумма: ' + resultRate.toFixed(2) + '€');
        break;
      default:
        alert('Что-то пошло не так');
    }
  break;
  case 'currency calc: two rates':
    var curr = prompt('usd или eur?', '').toLowerCase();
    var confirmOperation;
    var course;
    var youAmount;
    var res;

    switch(curr) {
      case 'usd':
        confirmOperation = confirm('Покупка или продажа?');
        course = (confirmOperation) ? 26.60 : 26.88; 
        youAmount = +prompt('Сумма для обмена (в гривне)?');
        res = youAmount / course;
        alert('Ваша сумма: ' + res.toFixed(2) + '$');
        break;
      case 'eur':
        confirmOperation = confirm('Покупка или продажа?');
        course = (confirmOperation) ? 29.70 : 30.21;
        youAmount = +prompt('Сумма для обмена (в гривне)?');
        res = youAmount / course;
        alert('Ваша сумма: ' + res.toFixed(2) + '€');
        break;
      default: 
        alert('Ошибка');
    }
  break;
  case 'currency calc: if':
    var cur = prompt('usd или eur?').toLowerCase();
    var confOperation;
    var yourAmount;
    var amountRes;

    if(cur == 'usd') {
      confOperation = confirm('Покупка или продажа?');
      if(confOperation) {
        yourAmount = +prompt('Введите сумму для обмена (в гривне)');
        amountRes = yourAmount / 26.60;
        alert('Ваша сумма: ' + amountRes.toFixed() + '$'); 
      }else {
        yourAmount = +prompt('Введите сумму для обмена (в гривне)');
        amountRes = yourAmount / 26.88;
        alert('Ваша сумма: ' + amountRes.toFixed() + '$'); 
      }
    } if(cur == 'eur') {
        confOperation = confirm('Покупка или продажа?');
        if(confOperation) {
          yourAmount = +prompt('Введите сумму для обмена (в гривне)');
          amountRes = yourAmount / 29.70;
          alert('Ваша сумма: ' + amountRes.toFixed() + '€'); 
        }else {
          yourAmount = +prompt('Введите сумму для обмена (в гривне)');
          amountRes = yourAmount / 30.21;
          alert('Ваша сумма: ' + amountRes.toFixed() + '€'); 
        }
      } if(!cur){
        alert('Ошибка');
      }
  break;
  case 'scissors':
    var choiceUser = prompt('Камень-ножницы-бумага?').toLowerCase();
    var choiceOponent = Math.round(Math.random() * 2);

    // Transfer value random to string
    if(choiceOponent == 0){
      choiceOponent = 'камень';
    }if(choiceOponent == 1){
      choiceOponent = 'ножницы';
    }if(choiceOponent == 2){
      choiceOponent = 'бумага'
    }

    // Comparison of user value and math random value
    if(choiceUser == choiceOponent) {
      alert('Рандом выбрал - ' + choiceOponent);
      alert('Ничья, попробуй еще!');
    }else if((choiceUser == 'камень' && choiceOponent == 'ножницы') || (choiceUser == 'ножницы' && choiceOponent == 'бумага') || (choiceUser == 'бумага' && choiceOponent == 'камень')){
      alert('Рандом выбрал - ' + choiceOponent);
      alert('Поздравляю, ты выиграл!');
    }else {
      alert('Рандом выбрал - ' + choiceOponent);
      alert('Увы, ты проиграл!');
    }
  break;
  case 'blue belt':
    var ratios = {
      usd: 25.6,
      eur: 29,
      sellUsd: 26.7,
      sellEur: 29.94
    };
    
    var operation,
        resultRate,
        course,
        amount;
    
    var user = prompt('В какую валюту хотите обменять? USD или EUR', 'usd').toLowerCase();
    if(user == 'usd'){
      operation = confirm('Покупка или продажа?');
      course = (operation) ? ratios['usd'] : ratios['sellUsd'];
      amount = +prompt('Сумма для обмена', '');
      resultRate = amount / course;
      alert('Сумма обмена: ' + resultRate.toFixed(2) + '$');
    }else if(user == 'eur'){
      operation = confirm('Покупка или продажа?');
      course = (operation) ? ratios['eur'] : ratios['sellEur'];
      amount = +prompt('Сумма для обмена?', '');
      resultRate = amount / course;
      alert('Сумма обмена: ' + resultRate.toFixed(2) + '€');
    }else {
      alert('Введите корректную валюту для обмена');
    }
  break;
  default: 
    alert('Убедитесь, что Вы правильно выбрали задание!');
}