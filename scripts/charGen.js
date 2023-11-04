'use strict';

var app = app || {};
var data = data || {};

(function(module){
  module.Character = function() {
    this.strength = app.randomItem(data.strength);
    this.dexterity = app.randomItem(data.dexterity);
    this.control = app.randomItem(data.control);
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
    // this.height =
    //   Math.floor(
    //     Math.random()
    //       * (this.race.maxHeight[this.gender]-this.race.minHeight[this.gender])
    //       + this.race.minHeight[this.gender]
    //   );
    // this.weight =
    //   app.calcWeight(
    //     this.height,
    //     Math.floor(Math.random() * (this.race.maxBmi - this.race.minBmi) + this.race.minBmi)
    //   );
  };
})(app);
