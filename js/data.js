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
  </div>',
 '<h2>Datele mele sunt mereu sigure pe net?</h2>\
<p>Nu, nu sunt. De aceea trebuie să fim întotdeauna atenți la ce site-uri folosim.</p>\
<p style = "font-size: 20px; color: red;"> <span class = "glyphicon glyphicon-shopping-cart"></span> <span class = "glyphicon glyphicon-usd\
"></span> <span class = "glyphicon glyphicon-user"></span></p>\
<p>Folosim site-uri dacă mergem la cumpărături, ne administrăm banii din bancă sau dacă vorbim cu prietenii. Pentru acest lucru, datele noastre personale ajung la sediul unei firme. Conexiunea este întotdeauna sigură? De asemenea, internetul reprezintă un spațiu fascinant, în care comunicarea, informația și divertismentul sunt beneficii pentru toți oamenii indiferent de vârstă și de cultura căreia îi aparțin. </p>\
<img src = "img/security.png" class = "img-basic" />\
<h2><span class = "glyphicon glyphicon-warning-sign"></span>Ce măsuri ar trebui să iau?</h2>\
<p>Hmm... Răspunde la următoarele întrebări.</p>\
<table class = "table table-striped">\
  <tr><td>Ești atent la ceea ce postezi? <p class = "ascuns" id = "a0"><span id = \'q0\'></span>Înainte de a posta pe o rețea socială, gândeștete dacă ai vrea ca la acea informație să aibă acces toată lumea. Nu uita, Internetul este un loc public!</p></td>\
    <td> <button class = "btn btn-success" onclick = "masuri(1, 0)">Da</button> <button class = "btn btn-danger" onclick = "masuri(2, 0)">Nu</button></td></tr>\
  <tr><td>Poți vorbi oricum cu ceilalți utilizatori?  <p class = "ascuns" id = "a1"><span id = "q1"></span>Comportă-te cu ceilalți așa cum ai vrea să se poarte și ei la rândul lor cu tine. În cazul în care cineva te deranjează, blochează și raportează persoana.</p></td>\
    <td> <button class = "btn btn-success" onclick = "masuri(1, 1)">Da</button> <button class = "btn btn-danger" onclick = "masuri(2, 1)">Nu</button></td></tr>\
  <tr><td>Ai antivirus? <p class = "ascuns" id = "a2"><span id = "q2"></span>Instalează un antivirus bun și actualizează-l regulat. Astfel vei fi ferit de viruși și malware.</p></td>\
    <td> <button class = "btn btn-success" onclick = "masuri(1, 2)">Da</button> <button class = "btn btn-danger" onclick = "masuri(2, 2)">Nu</button></td></tr>\
  <tr><td>Citești comentariile de la site-urile firmelor? <p class = "ascuns" id = "a3"><span id = "q3"></span>Este bine să citești comentariile utilizatorului pentru a te asigura ca site-ul respectiv este sigur.</p></td>\
  <td> <button class = "btn btn-success" onclick = "masuri(1, 3)">Da</button> <button class = "btn btn-danger" onclick = "masuri(2, 3)">Nu</button> </td></tr>\
</table>',
'<h2><span class = "glyphicon glyphicon-certificate"></span> Sfaturi</h2>\
<div class = "row">\
  <div class = "col-md-6">\
    <img src = "img/tip1.gif" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-camera"></span>La o căutare de imagini pe Google, apasă Ctrl + S și dă click pe o imagine pentru a căuta imagini asemănătoare. </p>\
    <img src = "img/tip3.gif" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-search"></span> Căutând "google in 1998", Google devine retro.</p>\
    <img src = "img/tip5.gif" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-search"></span> Căutând "Atari Breakout", poți juca jocul pe Google.</p>\
  </div>\
  <div class = "col-md-6">\
    <img src = "img/tip2.gif" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-camera"></span>Același lucru și dacă tragi imaginea spre bara de căutare.</p>\
    <img src = "img/tip4.gif" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-search"></span> Căutând "do a barrel roll", pagina de Google se învarte.</p>\
    <img src = "img/tip6.jpg" class = "img-basic" />\
    <p> <span class = "glyphicon glyphicon-star-empty"></span> Apasă Ctrl + Shift + N pentru a deschide o fereastră incognito.</p>\
  </div>'
];
