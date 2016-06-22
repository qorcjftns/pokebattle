
var pokemon = require('./pokemon.js');
var Move = require('./move.js');

var poke = new pokemon.Pokemon(1);
poke.setIV(31,31,31,31,31,31);
poke.setEV(252,252,4,0,0,0);
poke.setLevel(50);
poke.calculateStats();
poke.setMoves([new Move(8),new Move(1),new Move(2),new Move(3)]);

var poke2 = new pokemon.Pokemon(4);
poke2.setIV(31,31,31,31,31,31);
poke2.setEV(252,252,4,0,0,0);
poke2.setLevel(50);
poke2.calculateStats();
poke2.setMoves([new Move(4),new Move(5),new Move(6),new Move(7)]);

console.log(poke.moves);
console.log(poke2.moves);

var field = {
	weather: "SUNLIGHT",
	defender: {
		reflecrtor: false,
		lightscreen: false,
	},
	attacker: {
		reflecrtor: false,
		lightscreen: false,
	}
};

poke.moves[0].calcDmg(poke, poke2, field);