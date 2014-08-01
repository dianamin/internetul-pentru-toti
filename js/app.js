
var changePage = function() {
	id = "urlBar"
	url = document.getElementById(id).value;
	document.getElementById("page").setAttribute("src", url);
}

var check = true;

var app = angular.module('app', []);
app.controller('ctrl', function ($scope) {
  $scope.items = [
    {'name': 'Nutella'},
    {'name': 'Apă minerală'},
    {'name': 'Biscuiți'},
    {'name': 'Ciocolată'},
    {'name': 'Cafea'},
    {'name': 'Căni'},
    {'name': 'Agende'}
  ];
});



var item = [
{
	'tip': 1,
	'enunt': 'Intră pe pagina "http://w3schools.com"!',
	'rezultat': "http://w3schools.com",
	'pus': false
},
{
	'tip': 2,
	'enunt': 'Caută ceva.',
	'src': "pages/search1.html",
	'pus': false
},
{
	'tip': 1,
	'enunt': 'Intră pe pagina "http://infoeducatie.ro/"!',
	'rezultat': "http://infoeducatie.ro/",
	'pus': false
},
{
	'tip': 1,
	'enunt': 'Abia aștepți rezultatele! Intră pe "http://infoeducatie.ro/rezultate.php"!',
	'rezultat': "http://infoeducatie.ro/rezultate.php",
	'pus': false
}
	
]


var crt = 0;
var puneItem = function (x) {
	console.log(item[x].src);
	if (item[x].tip == 2) {
		document.getElementById("page").setAttribute("src", item[x].src);
	}
	document.getElementById("task").innerHTML = item[x].enunt;

}


var alegeItem = function () {
	var x = Math.floor(Math.random() * item.length);
	while (item[x].pus == true) x = Math.floor(Math.random() * item.length);
	puneItem(x);
}

alegeItem();


var f = function() {
	var ok = true;
	if (item[crt].tip == 1) {
		changePage();
		if (item[crt].rezultat != document.getElementById("urlBar").value) ok = false;
	}
	console.log(ok);
}


