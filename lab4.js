/* Lab4.js */

"use strict";
var JSONCars = [

	{"regnr" : "AAA111", "fabrikat" : "Volvo", "modell" : "V70", "mil" : "1000"},
	{"regnr" : "BBB222", "fabrikat" : "Saab", "modell" : "95", "mil" : "2000"},
	{"regnr" : "CCC333", "fabrikat" : "Audi", "modell" : "A4", "mil" : "3000"},
	{"regnr" : "DDD444", "fabrikat" : "Fiat", "modell" : "Freemont", "mil" : "4000"},
	{"regnr" : "EEE555", "fabrikat" : "Skoda", "modell" : "Octavia", "mil" : "5000"},
	{"regnr" : "FFF666", "fabrikat" : "Mazda", "modell" : "6", "mil" : "6000"},
	{"regnr" : "GGG777", "fabrikat" : "Kia", "modell" : "Optima", "mil" : "7000"},
	{"regnr" : "HHH888", "fabrikat" : "Honda", "modell" : "Civic", "mil" : "8000"},
	{"regnr" : "III999", "fabrikat" : "Suzuki", "modell" : "Swift", "mil" : "9000"}

];

window.addEventListener('load',createTable);
function createTable() {
	console.log('table created');
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	table.setAttribute('class','table table-striped table-hover');
	let container = document.getElementsByClassName('container-fluid')[0];
	createTableHead(tr,JSONCars[0]);
	thead.appendChild(tr);
	table.appendChild(thead);
	for(let i=0;i<JSONCars.length;i++){
		tr = document.createElement('tr');
		createTableRow(tr,JSONCars[i]);
		table.appendChild(tr);
	}
	container.appendChild(table);
}

function createTableHead(inTrRef, inJSONObject) {
	for(let i=0;i<Object.keys(inJSONObject).length;i++){
		let th = document.createElement('th');
		let thTextNode = document.createTextNode(Object.keys(inJSONObject)[i]);
		th.appendChild(thTextNode);
		inTrRef.appendChild(th);
		console.log(thTextNode);
	}
}

function createTableRow(inTrRef, inJSONObject) {
	for(let i=0;i<Object.values(inJSONObject).length;i++){
		let td = document.createElement('td');
		let tdTextNode = document.createTextNode(Object.values(inJSONObject)[i]);
		td.appendChild(tdTextNode);
		inTrRef.appendChild(td);
	}
}
