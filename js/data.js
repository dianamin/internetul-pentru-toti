var info = [
	'<center>\
  <h2><span class = "glyphicon glyphicon-pencil"></span> Ce este internetul?</h2>\
  <p><i> Internetul </i> =  o rețea mondială unitară de device-uri.</p>\
      <div class = "row" >\
        <div class = "col-md-4 inner-content">\
          <center><img src = "img/devices" class = "img-big" /></center>\
          <br />\
          <p>Internetul conectează un număr foarte mare de device-uri: calculator, tabletă, telefon etc. pentru a face navigarea mai ușoară și obținerea de informații mult mai rapidă.</p>\
        </div>\
        <div class = "col-md-4 inner-content">\
          <center><img src = "img/worldwide.jpg" class = "img-big" /></center>\
          <br />\
          <p>Internetul ne ajută să obținem toată informația de care avem nevoie printr-o simplă căutare. Este utilizat de persoane de toate vârstele din toate colțurile lumii. </p>\
        </div>\
        <div class = "col-md-4 inner-content">\
          <center><img src = "img/travel.jpg" class = "img-big" /></center>\
          <br />\
          <p>Totodată, ne ajută să vizităm locuri pe care nu le putem vedea în viața reală și să participăm la evenimente.</p>\
        </div>\
    </div>\
    <h2> <span class = "glyphicon glyphicon-time"></span> Cât de mult folosesc oamenii internetul? </h2>\
    <div>\
      <p>Câte ore pe zi petreci online?</p>\
      <p>Eu petrec <span id = "timpOnline">...</span> ore online pe zi.\
      <br /> <input type = "range" min = "0" max = "24" id = "timpOnlineRange" onchange = "oreOnline()" onclick = "oreOnline">\
      <div class="alert alert-info ascuns" id = "rezultatOreOnline" role="alert">\
      </div>\
    </div>\
    <h2> <span class = "glyphicon glyphicon-globe"></span> Unde este internetul cel mai utilizat? </h2>\
      <img src = "img/map.png" id = "map" />\
      <p>Culorile mai calde indică un număr foarte mare de utilizatori.</p>\
    <div>\
    </div>\
  </center>',
  '<h2><span class = "glyphicon glyphicon-question-sign"></span> Când crezi că a apărut internetul?</h2>\
  <div>\
    <p>Cred că internetul a apărut în anul<input type = "text" class = "form-control" placeholder = "scrie anul și apasă enter :)" id = "anInternet" id = "anRaspuns" onkeydown="if (event.keyCode == 13) anInternet()"/> </p>\
    <div class="alert alert-info ascuns" id = "rezultatAn" role="alert">\
      <br />\
    </div>\
    <a href = "http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html" /> <img src = "img/first_site.jpg" id = "map" /> </a>\
    <p>Click pe imagine pentru a vedea primul website </p>\
   <div class="panel panel-info" style = "font-size: 15px;">\
    <div class="panel-heading" style = "color: black;">\
      <h2> <span class = "glyphicon glyphicon-road"></span> Cum s-a dezvoltat internetul totuși?</h2>\
    </div>\
    <p>\
      Tim Bernes-Lee, un om de știință englez de la CERN a inventat World Wide Web (WWW) în 1989. Rețeaua a fost inițial concepută și dezvoltată pentru distribuirea automată a informației între oamenii de știință din universități și instituții din toată lumea. <span class = "glyphicon glyphicon-send"></span>\
    </p>\
    <ul class="list-group">\
      <li class="list-group-item">\
        <b> Secolul al XIX-lea - sisteme precursoare </b>\
        <p>  <span class = "glyphicon glyphicon-envelope"></span> Nu era chiar internet, dar totuși... Telegraful a revoluţionat transmisia de date şi era, pentru străbunicii noştri, o minune a tehnologiei la fel de copleşitoare ca şi internetul pentru noi. </p>\
      </li>\
      <li class="list-group-item">\
        <b>Anii \'50 - primele calculatoare</b>\
        <p>Un factor esenţial în evoluţia internetului a constituit-o dezvoltarea computerelor, începând din anii 1950. Mari cât o <span class = "glyphicon glyphicon-home"></span>, aceste prime calculatoare permiteau transmisiile de date de la un computer principal la terminale şi au reprezentat o etapă esenţială în apariţia fenomenului.</p>\
      </li>\
      <li class="list-group-item">\
        <b>Anii \'60-\'70: primele reţele informatice</b>\
        <p> <span class = "glyphicon glyphicon-certificate"></span> Pe baza ideilor lui Joseph Carl Robnett Licklider, în 1969, între universitatea California - Los Angeles şi Institutul de Cercetare Stanford a fost instalată o legătură printr-o reţea numită ARPANET (Advanced Research Projects Agency Network).</p>\
      </li>\
      <li class="list-group-item">\
        <b>Anul 1974 - apare termenul internet</b>\
        <p>Un protocol de reţea realizat în 1974, de către Vinton Cerf, Yogen Dalal şi Carl Sunshine, conţinea cuvântul internet, prescurtare de la internetworking.</p>\
      </li>\
    </ul>\
    </div>\
  </div>'
];

console.log(info[1]);