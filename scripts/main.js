'use strict';

var app = app || {};

(function(module){
  module.displayCharacter = function(char) {
    document.getElementById('strength').innerText = `${char.strength}`;
    document.getElementById('dexterity').innerText = `${char.dexterity}`;
    document.getElementById('control').innerText = `${char.control}`;
    document.getElementById('physique').innerText = `${char.physique}`;
    document.getElementById('face').innerText = `${char.face}`;
    document.getElementById('speech').innerText = `${char.speech}`;
    document.getElementById('virtue').innerText = `${char.virtue}`;
    document.getElementById('flaw').innerText = `${char.flaw}`;
    document.getElementById('misfortunes').innerText = `${char.misfortunes}`;
    document.getElementById('trauma').innerText = `${char.trauma}`;
    document.getElementById('beliefs').innerText = `${char.beliefs}`;
    document.getElementById('social').innerText = `${char.social}`;
    document.getElementById('startingMomento').innerText = `${char.startingMomento}`;
    document.getElementById('startingBackground').innerText = `${char.startingBackground}`;
    document.getElementById('startingGear').innerText = `${char.startingGear}`;
    document.getElementById('startingBonus').innerText = `${char.startingBonus}`;
    document.getElementById('meeting').innerText = `${char.meeting}`;
    document.getElementById('party').innerText = `${char.party}`;
  };
  function roll(n) {
    var a = Array(n);
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * 6) + 1;
    return a[0] + a[1] + a[2];
}

  module.main = function() {
    let character = new app.Character();
    
    module.displayCharacter(character);
  };
})(app);
