'use strict';

var app = app || {};
var data = data || {};

(function(module){
  module.Character = function() {
    this.strength = app.roll(3);
    this.dexterity = app.roll(3);
    this.control = app.roll(3);
    this.physique = app.randomItem(data.physique);
    this.face = app.randomItem(data.face);
    this.speech = app.randomItem(data.speech);
    this.virtue = app.randomItem(data.virtue);
    this.flaw = app.randomItem(data.flaw);
    this.misfortunes = app.randomItem(data.misfortunes);
    this.trauma = app.randomItem(data.trauma);
    this.beliefs = app.randomItem(data.beliefs);
    this.social = app.randomItem(data.social);
    this.startingMomento = app.randomItem(data.startingMomento);
    this.startingBackground = app.randomItem(data.startingBackground);
    this.startingWeapon = app.randomItem(data.startingWeapon);
    this.startingGear = app.randomItem(data.startingGear);
    this.startingBonus = app.randomItem(data.startingBonus);
  };
})(app);
