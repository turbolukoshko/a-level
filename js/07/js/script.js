/* Таблица умножения */
var table = document.createElement("table");
var th, tr, td;
table.setAttribute("border", 1);
table.setAttribute("cellspacing", 3);
table.setAttribute("cellpadding", 12);

for(var i = 0; i <= 9; i++){
  tr = document.createElement("tr");
  tr.setAttribute("align", "center");
  if(i % 2 !== 0) {
    tr.style.backgroundColor = "lightgrey";
  }else{
    tr.style.backgroundColor = "white";
  }
  table.appendChild(tr);
  for(var j = 0; j <= 9; j++){
    td = document.createElement("td");
    td.onmouseover = function(event){
      // highlights row
      for(var c = 0; c < this.parentElement.children.length; c++){
        this.parentElement.children[c].style.backgroundColor = "cyan";
      }
      // highlights element
      this.style.backgroundColor = "blue";
    };
    td.onmouseout = function(event){
      // removes highlighting from the row
      for(var c = 0; c < this.parentElement.children.length; c++){
        this.parentElement.children[c].style.backgroundColor = "";
      }
      // removes highlighting from an element 
       event.target.style.backgroundColor = "";
    };
    if(i == 0){
      td.innerHTML = j;
    }else if(j == 0){
      td.innerHTML = i;
    }else{
      td.innerText = i * j;
    }
    tr.appendChild(td);
  }
}
document.body.appendChild(table);
console.log(table);

/* Calc */
// Exchange Rates
var buy = 26.10;
var sell = 26.38;

// input + label for buy a usd
var labelBuy = document.createElement("label");
labelBuy.setAttribute("for", "buyUSD");
labelBuy.innerText = "Покупка USD: ";

var inputBuy = document.createElement("input");
inputBuy.setAttribute("id", "buyUSD");
inputBuy.setAttribute("type", "number");

// input + label for sell a usd
var labelSell = document.createElement("label");
labelSell.setAttribute("for", "inputSell");
labelSell.innerText = "Продажа USD";

var inputSell = document.createElement("input");
inputSell.setAttribute("id", "inputSell");
inputSell.setAttribute("type", "number");

// button
var btn = document.createElement("button");
btn.setAttribute("id", "calc");
btn.innerText = "Рассчитать сумму";

btn.onclick = function(){
  var result;
  if((inputBuy.value) && (inputBuy.value != 0)){
    result = inputBuy.value / buy;
    result = result.toFixed(2) + '$';
    alert(result);
  }
  if((inputSell.value) && (inputSell.value != 0)){
    result = inputSell.value * sell;
    result = result.toFixed(2) + 'UAH';
    alert(result);
  }
};

// render
document.body.appendChild(labelBuy);
document.body.appendChild(inputBuy);
document.body.appendChild(labelSell);
document.body.appendChild(inputSell);
document.body.appendChild(btn);

/* Calc Live */

function calc() {
  if((inputBuy.value) && (inputBuy.value != 0)){
    result = inputBuy.value / buy;
    result = result.toFixed(2) + '$';
    alert(result);
  }
  if((inputSell.value) && (inputSell.value != 0)){
    result = inputSell.value * sell;
    result = result.toFixed(2) + 'UAH';
    alert(result);
  }
}

inputBuy.oninput = calc;
inputSell.oninput = calc;