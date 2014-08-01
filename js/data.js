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
  </div>',
  '<div class = "alert alert-success">În ziua de astăzi, net-ul este platforma deschisă și universal accesibilă pentru inovație, creativitate și oportunități economice.</div>\
<h2><span class = "glyphicon glyphicon-map-marker"></span> Unde pot folosi internetul?</h2>\
<p> Alege cele mai utilizate 4 device-uri pentru a accesa internetul: </p>\
<form>\
  <input type="checkbox" id = "c1"> Laptop\
  <input type="checkbox" id = "c2"> Mașină de spălat\
  <input type="checkbox" id = "c3"> Telefon\
  <input type="checkbox" id = "c4"> Aragaz\
  <input type="checkbox" id = "c5"> Desktop PC\
  <input type="checkbox" id = "c6"> Brichetă\
  <input type="checkbox" id = "c7"> Frigider\
  <input type="checkbox" id = "c8"> Tabletă\
  <input type="checkbox" id = "c9"> MP3 Player\
  <input type="checkbox" id = "c10"> Calorifer\
  <br />\
</form>\
<div class = "btn btn-default" onclick = "verificaDevices()"> Verifică </div>\
<div id = "devices" class = "ascuns" >\
  <p id = "rezultatDevices"></p>\
  <p>Aproximativ oriunde cât timp am un device, de exemplu: </p>\
  <div class = "row">\
    <div class = "col-md-3 inner-content">\
      <center> <img src = "img/desktop.png" class = "device" /> </center> <br />\
      Acasă sau la muncă, desktop-ul este o alegere foarte bună pentru a naviga pentru internet.\
    </div>\
    <div class = "col-md-3 inner-content">\
      <center> <img src = "img/laptop.png" class = "device" /> </center> <br />\
      Cu performanțe aproape identice cu ale desktop-ului, laptopul este portabil.\
    </div>\
    <div class = "col-md-3 inner-content">\
      <center> <img src = "img/tableta.png" class = "device" /> </center> <br />\
      Tableta poate fi dusă aproape oriunde și asigură accesul rapid la informații.\
    </div>\
    <div class = "col-md-3 inner-content">\
      <center> <img src = "img/telefon.png" class = "device" /> </center>\
      Telefonul mobil (mai ales un smartphone) îl avem tot timpul cu noi.\
    </div>\
  </div>\
  </div>\
  <h2> <span class = "glyphicon glyphicon-signal"></span> Dar de unde semnal? </h2>\
  <p>Cele mai cunoscute moduri de transmisie sunt:</p>\
  <div class = "row">\
  <div class = "col-md-4">\
    <center><div class = "circle">Wi-Fi</div></center>\
    Tehnologie fără fir.\
  </div>\
  <div class = "col-md-4">\
    <center><div class = "circle">Dial-up</div></center>\
    Stabilește conexiunea prin liniile de la <span class = "glyphicon glyphicon-phone-alt"></span>\
  </div>\
  <div class = "col-md-4">\
    <center><div class = "circle">Fibră optică</div></center>\
    Cablu transparent și foarte subțire.\
</div>',
'\
<h2> Care sunt avantajele și dezavantajele internetului? </h2>\
<div class = "row">  <div class = "col-md-6">\
    Avantaje\
    <ul id = "adv">\
      <li><span class = "glyphicon glyphicon-calendar"></span> Putem afla rapid de evenimente importante. </li>\
      <li><span class = "glyphicon glyphicon-globe"></span> Putem discuta opinii cu oameni din toată lumea cu aceleași interese ca și noi.</li>\
      <li><span class = "glyphicon glyphicon-briefcase"></span> Avem acces la educație online cu ajutorul platformelor (infoarena, .campion), putem lucra mai ușor.</li>\
      <li><span class = "glyphicon glyphicon-eye-open"></span> Părinții își pot supraveghea copiii online.</li>\
      <li><span class = "glyphicon glyphicon-plus-sign"></span> Avem acces la consultații medicale online.</li>\
      <li><span class = "glyphicon glyphicon-shopping-cart"></span>Putem face cumpărături online.</li>\
      <li><span class = "glyphicon glyphicon-cloud"></span>Ne putem ține fișierele online.</li>\
    </ul>\
  </div>\
  <div class = "col-md-6">\
    Dezavantaje\
    <ul id = "disadv">\
      <li><span class = "glyphicon glyphicon-warning-sign"></span>Accesul copiilor la internet trebuie controlat. </li>\
      <li><span class = "glyphicon glyphicon-pushpin"></span>Dependența de internet e ca un drog. </li>\
      <li><span class = "glyphicon glyphicon-envelope"></span>Oamenii își pierd capacitatea de socializare.</li>\
      <li><span class = "glyphicon glyphicon-remove"></span>Nu toate informațiile sunt adevărate. Nici măcar identitățile oamenilor.</li>\
      <li><span class = "glyphicon glyphicon-user"></span>Nu toată lumea este atentă la reputația digitală.</li>\
    </ul>\
  </div>',
  '<h2>Cum navighez pe internet?</h2>\
  <p>Folosesc un browser! Câteva exemple sunt:</p>\
  <div class="alert alert-info" id = "bn"></div>\
  <img src = "img/chrome.png" class = "browser" onmouseover = "browserName(\'Google Chrome\')";/>\
  <img src = "img/firefox.jpg" class = "browser" onmouseover = "browserName(\'Mozilla Firefox\')"/>\
  <img src = "img/ie.png" class = "browser" onmouseover = "browserName(\'Internet Explorer\')"/> <br /> <br />\
  <button class = "btn btn-primary" onclick = "arataElement(\'QA\', \'800\')" style = "font-size: 20px;">Q & A <span class = "caret"></span></button>\
  <div class = "ascuns" id = "QA">\
  <div class = "row">\
    <div class = "col-md-4">\
        <h3>Cum intru într-o pagină din browser?</h3>\
        <p>Intrăm într-o pagină de aici: </p>\
        <img src = "img/enter_page.png" /> <br />\
      </div>\
      <div class = "col-md-4">\
        <h3>Cum căutăm informații?</h3>\
        <p>Putem folosi un motor de căutare precum Google: </p>\
        <img src = "img/search.jpg" class = "img-basic" />\
      </div>\
      <div class = "col-md-4">\
        <h3>Cum socializez?</h3>\
        <p>Ne trebuie în primul rând o adresă de mail. Un cont de gmail îmi oferă acces la mai mult decât corespondență electronică.</p>\
        <img src = "img/email.png" class = "img-basic" />\
      </div>\
    </div>\
    <div class = "row">\
      <div class = "col-md-4">\
      <h3>Cum mă uit la video-uri?</h3>\
      <p>Youtube.com!</p>\
      <img src = "img/youtube.png" class = "img-basic" />\
      </div>\
      <div class = "col-md-4">\
      <h3>Cum mă uit pe hartă?</h3>\
      <p>Google Maps!</p>\
      <img src = "img/harta.png" class = "img-basic" />\
      </div>\
      <div class = "col-md-4">\
      <h3>Unde încarc fișierele mele?</h3>\
      <p>Google Drive!</p>\
      <img src = "img/drive.png" class = "img-basic" />\
      </div>\
    </div>\
  </div>'
];
