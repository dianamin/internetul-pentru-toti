var scrieElement = function (id, text) {
	document.getElementById(id).innerHTML = text;
}

var arataElement = function (id, height) {
	document.getElementById(id).setAttribute("style", "height: " + height + "px;");
}

var rezultatOreOnline = function () {
	var id = "rezultatOreOnline"
	var rezultat;
	var x = document.getElementById("timpOnlineRange").value;
	if (x == 0) rezultat = "Chiar nu petreci timp online?";
	if (x < 3) rezultat = "Petreci mai puțin timp online decât media.";
	else if (x < 5) rezultat = "Ești în medie.";
	else if (x < 9) rezultat = "Petreci mai mult timp online decât media.";
	else if (x < 14) rezultat = "Petreci foarte mult timp online!";
	else rezultat = "Măi să fie! Mai dormi?";
	scrieElement(id, rezultat + " Oamenii petrec în medie 3-4 ore online.")
}

var oreOnline = function () {
	document.getElementById("timpOnline").innerHTML = document.getElementById("timpOnlineRange").value;
	rezultatOreOnline();
	arataElement("rezultatOreOnline", "50");
}