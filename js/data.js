var info = [
	'<center>
  <h2><span class = "glyphicon glyphicon-pencil"></span> Ce este internetul?</h2>
  <p><i> Internetul </i> =  o rețea mondială unitară de device-uri.</p>

      <div class = "row" >
        <div class = "col-md-4 inner-content">
          <center><img src = "img/devices" class = "img-big" /></center>
          <br />
          <p>Internetul conectează un număr foarte mare de device-uri: calculator, tabletă, telefon etc. pentru a face navigarea mai ușoară și obținerea de informații mult mai rapidă.</p>
        </div>
        <div class = "col-md-4 inner-content">
          <center><img src = "img/worldwide.jpg" class = "img-big" /></center>
          <br />
          <p>Internetul ne ajută să obținem toată informația de care avem nevoie printr-o simplă căutare. Este utilizat de persoane de toate vârstele din toate colțurile lumii. </p>
        </div>
        <div class = "col-md-4 inner-content">
          <center><img src = "img/travel.jpg" class = "img-big" /></center>
          <br />
          <p>Totodată, ne ajută să vizităm locuri pe care nu le putem vedea în viața reală și să participăm la evenimente.</p>
        </div>
    </div>
    <h2> <span class = "glyphicon glyphicon-time"></span> Cât de mult folosesc oamenii internetul? </h2>
    <div>
      <p>Câte ore pe zi petreci online?</p>
      <p>Eu petrec <span id = "timpOnline">...</span> ore online pe zi.
      <br /> <input type = "range" min = "0" max = "24" id = "timpOnlineRange" onchange = "oreOnline()" onclick = "oreOnline">
      <div class="alert alert-info ascuns" id = "rezultatOreOnline" role="alert">
      </div>
    </div>
    <h2> <span class = "glyphicon glyphicon-globe"></span> Unde este internetul cel mai utilizat? </h2>
      <img src = "img/map.png" id = "map" />
      <p>Culorile mai calde indică un număr foarte mare de utilizatori.</p>
    <div>
    </div>
  </center>'
];