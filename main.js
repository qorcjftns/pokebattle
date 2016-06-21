
var pokemon = require('./pokemon.js');

var poke = new pokemon.Pokemon(1);
poke.setIV(31,31,31,31,31,31);
poke.setEV(252,252,4,0,0,0);
poke.setLevel(50);
poke.calculateStats();

var poke2 = new pokemon.Pokemon(4);
poke2.setIV(31,31,31,31,31,31);
poke2.setEV(252,252,4,0,0,0);
poke2.setLevel(50);
poke2.calculateStats();
