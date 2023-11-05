'use strict';

var app = app || {};
(function(module){
  module.randomItem = function(array) {
    let randomIndex = Math.floor(Math.random() * Math.floor(array.length));
    return array[randomIndex];
  };
    module.roll = function(n) {
    var a = Array(n);
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * 6) + 1;
    return a[0] + a[1] + a[2];
};
})(app);
