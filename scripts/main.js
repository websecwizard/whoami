'use strict';

var app = app || {};

(function(module){
  module.displayCharacter = function(char) {
    document.getElementById('strength').innerText = `${char.strength}`;
    document.getElementById('dexterity').innerText = `${char.strength}`;
    document.getElementById('control').innerText = `${char.strength}`;
    document.getElementById('physique').innerText = `${char.strength}`;
    document.getElementById('face').innerText = `${char.strength}`;
    document.getElementById('speech').innerText = `${char.strength}`;
    document.getElementById('virtue').innerText = `${char.strength}`;
    document.getElementById('flaw').innerText = `${char.strength}`;
    document.getElementById('misfortunes').innerText = `${char.strength}`;
    document.getElementById('trauma').innerText = `${char.strength}`;
    document.getElementById('beliefs').innerText = `${char.strength}`;
    document.getElementById('social').innerText = `${char.strength}`;
    document.getElementById('startingMomento').innerText = `${char.strength}`;
    document.getElementById('startingBackground').innerText = `${char.strength}`;
    document.getElementById('startingGear').innerText = `${char.strength}`;
    document.getElementById('startingBonus').innerText = `${char.strength}`;
    document.getElementById('meeting').innerText = `${char.strength}`;
    document.getElementById('party').innerText = `${char.strength}`;
  };

  // function formatHeight(height) {
  //   let feet = Math.floor(height / 12.0);
  //   let inches = Math.floor(height % 12.0);

  //   return `${feet}' ${inches}"`;
  // }
    
  module.main = function() {
    let character = new app.Character();
    
    module.displayCharacter(character);
  };
})(app);
