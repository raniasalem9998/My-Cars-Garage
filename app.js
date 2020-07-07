'use strict'
var allCars = [];


function Car(modle, year, origin) {
    this.modle = modle;
    this.year = year;
    this.origin = origin;
    this.price = randomPrice();
    // allCars.push(this);
}

function randomPrice() {
    var random = Math.floor(Math.random() * (100000 - 7000) + 7000);
    return random;
}




var addedCar = document.getElementById('addedCar')
addedCar.addEventListener('submit', newCar)
function newCar(event) {
    event.preventDefault();
    var modle = event.target.modle.value;
    var year = event.target.year.value;
    var origin = event.target.origin.value;
    var newCar = new Car(modle, year, origin);
    allCars.push(newCar);
   
    localStorage.setItem('cars', JSON.stringify(allCars));
    renderTable();
}

function renderTable() {
  
    allCars = JSON.parse(localStorage.getItem('cars'));
    var tBody = document.getElementById('carsList');
    for (var i = 0; i < allCars.length ; i++) {
        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        td1.textContent = allCars[i].modle;
        var td2 = document.createElement('td');
        td2.textContent = allCars[i].year;
        var td3 = document.createElement('td');
        td3.textContent = allCars[i].price;
        var td4 = document.createElement('td');
        td4.textContent = allCars[i].origin;
        var td5 = document.createElement('td');
        td5.innerHTML = 'X';
        td5.setAttribute('id',remove);

        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tBody.appendChild(tr);
    }
}
// var remove = document.getElementById('remove');
// remove.addEventListener('click',deleatRow);
// function deleatRow(rowNumber){

// }
