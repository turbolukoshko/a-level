/* fetch basic */

let table = document.createElement("table");
table.setAttribute('border', '1px');

let jsonPeople = 'https://swapi.co/api/people/1/';

function fetchBasic(table, jsonPeople){
  fetch(jsonPeople)
  .then(res => res.json())
  .then(luke => {
    console.log(table);
    for(let key in luke){
      let tr = document.createElement("tr");
      let tdKey = document.createElement("td");
      let tdValue = document.createElement("td");
      tdKey.innerText = key;
      tdValue.innerText = luke[key];
      tr.appendChild(tdKey);
      tr.appendChild(tdValue);
      table.appendChild(tr);
    }
  });
}

fetchBasic(table, jsonPeople);
document.body.appendChild(table);

/* fetch improved */

let table = document.createElement("table");
table.setAttribute('border', '1px');

let jsonPeople = 'https://swapi.co/api/people/1/';

function fetchImproved(table, jsonPeople){
  fetch(jsonPeople)
  .then(res => res.json())
  .then(luke => {
    console.log(table);
    for(let key in luke){
      let tr = document.createElement("tr");
      let tdKey = document.createElement("td");
      let tdValue = document.createElement("td");
      tdKey.innerText = key;
      let button = document.createElement("button");
      // check on array
      if(typeof luke[key] == 'object'){
        for(let href of luke[key]){
          let link = document.createElement("a");
          let button = document.createElement("button");
          link.innerHTML = href;
          link.setAttribute('href', href);
          button.appendChild(link);
          tdValue.appendChild(button);
          // event for render table on click
          button.addEventListener('click', function(event){
            fetchImproved(table, href);
            event.preventDefault();
          });
        }
        // check on string
      }else if(key == 'url' || key == 'homeworld'){
          let link = document.createElement("a");
          link.setAttribute('href', luke[key]);
          link.innerHTML = luke[key];
          button.appendChild(link);
          tdValue.appendChild(button);
        }else{
        tdValue.innerText = luke[key];
      }
      // event for render table on click
      button.addEventListener('click', function(event){
        fetchImproved(table, luke[key]);
        event.preventDefault();
      });
      tr.appendChild(tdKey);
      tr.appendChild(tdValue);
      table.appendChild(tr);
    }
  });
}

fetchImproved(table, jsonPeople);
document.body.appendChild(table);

/* myfetch */

function myfetch(url){
  return new Promise(function (resolve, reject){
	  const xhr = new XMLHttpRequest();
	  xhr.open('GET', url, true);
	  xhr.onreadystatechange = function(){
		  if(xhr.readyState != 4){
			  return;
		  }
		  if(xhr.status == 200){
			  alert('Status 200 - OK');
			  resolve(JSON.parse(xhr.responseText));
		  }else{
			  alert('Shit happens');
			  reject('shit happens: ' + xhr.status + ', ' + xhr.statusText);
		  }
	  };
	  xhr.send();
  });
}

myfetch('https://swapi.co/api/people/1/')
  .then(luke => console.log(luke));

/* race */

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

let myFunc = myfetch('https://swapi.co/api/people/1/');
let myDelay = delay(1000);

Promise.race([myFunc, myDelay]).then(res => console.log(res));